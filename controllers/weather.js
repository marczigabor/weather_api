var request = require('request');
var apiKey = '6c4651c161e482495f5bef0a0cbe7684';

exports.weather_get = function(req, res) {
    request('https://api.openweathermap.org/data/2.5/weather?q=' + req.params.city + '&APPID=' + apiKey, function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
        res.send(body);
    });
}

//module.exports = router;
