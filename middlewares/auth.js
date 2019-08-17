var jwt = require('jsonwebtoken');
var tokenHelper = require('./../helper/token');
var userRepository = require("./../repository/user");

exports.verifyToken = async (req, res, next)=> {
    
  const token = req.headers['x-access-token'] || req.cookies.auth;
    
  if(!token) {
    return res.status(400).send({ 'message': 'Token is not provided' });
  }

  try {
    const decoded = tokenHelper.verify(token);

    if (decoded && decoded.userName){

      let user = await userRepository.getUserByUsername(decoded.userName);
      if (user){
        req.userName = decoded.userName;    
      }else {
        return res.status(400).send({ 'message': 'The token you provided is invalid' });
      } 

    }
      next();
    } 
    catch(error) {
      return res.status(400).send(error);
  }
}


