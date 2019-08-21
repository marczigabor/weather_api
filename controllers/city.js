const cityRepository = require("./../repository/city");
const maxNum = 8;

const city = {

    async city_automplete_get(req, res, next) {
        
        const result = cityRepository.search(req.params.searchValue, maxNum);
        
        res.send(city.mapCities(result));

    },
    mapCities (cities){

        let items = cities.map( item => {
            return {
                city: item.city,
                country: item.country,
            }
        })
        return items;
    }
}



module.exports = city;
