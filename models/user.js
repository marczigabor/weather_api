module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userName: {
      unique: true,
      required: true,
      type: DataTypes.STRING
    },
    password: DataTypes.STRING
  });

  User.associate = (models)=> {
    //models.User.hasMany(models.City);
    User.hasMany(models.City);
  };

  // User.findByLogin = async login => {
    
  //   let user = await User.findOne({
  //     where: { userName: login },
  //   });

  //   return user;
  // }

  // User.findByLoginIncludeCities = async (login) => {
    
  //   let user = await User.findOne(
  //     {
  //       where: { userName: login },
  //       include: [{ model: City}]
  //     });

  //   return user;
  // }

  return User;
};

  // module.exports = function(sequelize, Sequelize) {
  //   var User = sequelize.define('User', {
  //       id: {
  //         type: Sequelize.INTEGER(11),
  //         allowNull: true,
  //         primaryKey: true,
  //         autoIncrement: true
  //       },
  //       user_id: {
  //         type: Sequelize.STRING(255),
  //         allowNull: true,
  //         defaultValue: ''
  //       }
  //     }); // you missed a closing parenthesis here

  //     User.prototype.getJWT = function() {
  //       let expiration_time = parseInt(CONFIG.jwt_expiration);
  //       return "Bearer " + jwt.sign({
  //         user_id: this.user_id,
  //         role: this.role
  //       }, CONFIG.jwt_encryption, {
  //         expiresIn: expiration_time
  //       });
  //     }
  //     return User
  //   }