var db = require('./../models/index');

var userRepository = {};

userRepository.findByLoginIncludeCities = async (login) => {
    
    let user = await db.models.User.findOne(
      {
        where: { userName: login },
        include: [{ model: db.models.City}]
      });

    return user;
};

userRepository.getUserByUsername = async (login) => {
    
    let user = await db.models.User.findOne(
      {
        where: { userName: login },
      });

    return user;
};


module.exports = userRepository;