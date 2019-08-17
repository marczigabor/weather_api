var express = require('express');
var user_controller = require('./../controllers/user');
var router = express.Router();
var auth = require('./../middlewares/auth');

// router.options("/*", (req, res, next) => {
//   res.header('access-control-allow-origin', '*');
//   res.header('access-control-allow-methods', 'POST');
//   res.header('access-control-allow-headers', ' Accept, access-control-allow-origin, Content-Type');
//   res.sendStatus(204);
// });

// const validationRules = [
//   check('password').isLength({ min: 6 }),
//   check('username').isAlphanumeric(),
// ]

router.post('/login', user_controller.login_post);

router.get('/city', auth.verifyToken, user_controller.cities_get);

module.exports = router;
