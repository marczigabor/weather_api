var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var auth = require('./middlewares/auth');

var indexRouter = require('./routes/index');
var weatherRouter = require('./routes/weather');
var userRouter = require('./routes/user');
var cityRouter = require('./routes/city');

//var models = require('./models/index');
var db = require('./models/index');
const encryption = require('./helper/encryption');

//var Sequelize = require('Sequelize');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


let apiVersion = "/api/v1";

app.use('/', indexRouter);
app.use(apiVersion + '/weather', auth.verifyToken, weatherRouter);
app.use(apiVersion + '/user', userRouter);
app.use(apiVersion + '/city', cityRouter);


//database

//console.log(db);


// db. models.sequelize.sync().then(function () {
//   server.listen(port);
//   server.on('error', onError);
//   server.on('listening', onListening);
// });


db.sequelize.authenticate().then(() => {
  console.log("Success!");

  // db.sequelize.sync({ force: true }).then(()=>{
  //   console.log("sync is done");
  //   seed();
  // });
 
}).catch((err) => {
  console.log(err);
});

seed = async ()=>{
  console.log(db.models);

  await db.models.User.create(
    {
      userName: 'jobs@benestudio.co',
      password:  encryption.getHashString('password'),
      Cities: [
        {
          name: 'London',
          country: 'UK'
        },
        {
          name: 'New York',
          country: 'USA'
        },
      ],
    },
    {
      include: [db.models.City],
    },    
  );

  // let u = await userRepository.findByLoginIncludeCities("jobs@benestudio.co");

  // console.log(u);

}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
