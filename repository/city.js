var db = require('./../models/index');

var cityRepository = {

    async createCity(cityName, country, user){

        let city = await db.models.City.create({
            name: cityName,
            country: country,
            UserId: user.id
        });

        return city;
    }
};



module.exports = cityRepository;