var request = require("request"),
    cheerio = require("cheerio"),
    url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 34415;

request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body),
            temperature = $("[data-variable='temperature'] .wx-value").html();

        console.log("Температура " + temperature + " градусов по Фаренгейту.");
    } else {
        console.log("Произошла ошибка: " + error);
    }
});