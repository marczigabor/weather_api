const jwt = require('jsonwebtoken');

var secret = "af1c7829-1fd6-4e66-837d-9383af02cb4c";

const token = {

  generateToken(id){
    const token = jwt.sign(
      {
        userName: id
      },
      secret, 
      { 
          expiresIn: '7d' 
      }
      );
      return token;
    },

    verify(token) {
      return jwt.verify(token, secret);
    }
}


module.exports = token;