const { check, validationResult } = require('express-validator');
var userRepository = require('./../repository/user');
var cityRepository = require('./../repository/city');
const encryptionHelper = require('./../helper/encryption');
const tokenHelper = require('./../helper/token');
var db = require('./../models/index');

const validationError= "Validation error: user or password not valid";

const user = {
    async login_post(req, res, next) {

        // check(req.body.userName).isEmail();
        // check(req.body.password).isLength({ min: 5 });
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //   return res.status(422).json({ errors: errors.array() });
        // }
    
        try{
            const user = await userRepository.getUserByUsername(req.body.userName);
    
            if (user){
    
                if (await encryptionHelper.compare(req.body.password, user.password)){
                    console.log('Password is correct');
                } else {
                    console.log('Password is wrong');
                    throw new Error(validationError);
                }
            }else{
                throw new Error(validationError);
            }
    
            //req.session.userName = user.userName;
            const token = tokenHelper.generateToken(user.userName);
    
            res.cookie('auth',token);
            res.status(200).send({ token });
        }catch (err){
            next(err);
        }
    },

    async cities_get(req, res, next){

        try{
            let userCities = await userRepository.findByLoginIncludeCities(req.userName);
            res.send(userCities.Cities);
        }catch (err){
            next(err);
        }
    },

    async cities_post(req, res, next){

        try{

            const user = await userRepository.getUserByUsername(req.userName);
            await cityRepository.createCity(req.body.city, req.body.country, user);

            res.send("ok");
        }catch (err){
            next(err);
        }        
    }
}


module.exports = user;