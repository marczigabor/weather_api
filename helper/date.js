const date = {
    convertUnixDate(date, timezone) {
        return new Date(date*1000+timezone*1000);
    },
    getHourMinutes(date){
        var hours = date.getUTCHours();
        var minutes = "0" + date.getMinutes();
        return hours + ':'  + minutes.substr(-2);
    }
}

module.exports = date;