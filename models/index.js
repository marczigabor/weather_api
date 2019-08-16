
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = 'production' //process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.js')[env];
var db        = {
              models: {}
            };

//console.log(config);

//if (config.use_env_variable) {
  //var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
   var sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

//console.log(sequelize);

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db.models[model.name] = model;
//   });

db.models = {
  User: sequelize.import('./user'),
  City: sequelize.import('./city')
}

Object.keys(db.models).forEach(modelName => {
  //console.log(db.models);
  console.log(modelName);
  if (db.models[modelName].associate) {
    db.models[modelName].associate(db.models);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


//console.log(db);
module.exports = db;



// var Sequelize = require('sequelize');

// const sequelize = new Sequelize(
//   'weather',
//   'postgres',
//   'admin',
//   //process.env.DATABASE,
//   //process.env.DATABASE_USER,
//   //process.env.DATABASE_PASSWORD,
//   {
//     host: 'localhost',
//     port: 5432,
//     dialect: 'postgres',
//   },
// );

// const models = {
//    User: sequelize.import('./user.js')
// };

// // Object.keys(models).forEach(key => {
// //   if ('associate' in models[key]) {
// //     models[key].associate(models);
// //   }
// // });

// exports.sequelize = sequelize;

// //exports.models = models;
