var express = require('express');
var router = express.Router();
var city_controller = require('./../controllers/city');
var auth = require('./../middlewares/auth');

router.get('/:searchValue', auth.verifyToken ,city_controller.city_automplete_get);

module.exports = router;
