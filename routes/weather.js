var express = require('express');
var router = express.Router();
var weather_controller = require('./../controllers/weather');


router.get('/:city', weather_controller.weather_get);


module.exports = router;
