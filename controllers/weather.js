var request = require('request');
var apiKey = '6c4651c161e482495f5bef0a0cbe7684';

const weather = {

    async weather_get(req, res, next) {
        
        request('https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + req.params.city + '&APPID=' + apiKey, (error, response, body)=>{

            try {

                if (response.statusCode == 200){
                    
                    res.send(getResponse(JSON.parse(body)));
                  
                }else {
                    let errorObject = new Error(error || response.statusMessage);
                    next(errorObject);
                }
            }catch (err){
                next(err);
            }            
        });
    },

    getResponse(boy){
        return {
            sunrise: result.sys.sunrise,
            sunrset: result.sys.sunset,    
            temp: result.main.temp        
        }
    }
}

module.exports = weather;
