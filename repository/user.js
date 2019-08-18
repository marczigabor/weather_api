var db = require('./../models/index');

var userRepository = {

    async findByLoginIncludeCities(login){
    
        let user = await db.models.User.findOne(
          {
            where: { userName: login },
            include: [{ model: db.models.City}]
          });
    
        return user;
    },

    async getUserByUsername(login){
    
        let user = await db.models.User.findOne(
          {
            where: { userName: login },
          });
    
        return user;
    },

    async addCity(userName, city){

        let user = await this.getUserByUsername(userName);
        user.addCities(city);

        return true;
    }
};



module.exports = userRepository;