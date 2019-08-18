const cityRepository = require("./../repository/city");
const maxNum = 8;

const city = {

    async city_automplete_get(req, res, next) {
        
        const result = cityRepository.search(req.params.searchValue, maxNum);

        res.send(result);

    }
}

module.exports = city;
