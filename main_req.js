var request = require('request');
var cheerio = require('cheerio');

request({uri:'http://rod.dn.ua', method:'GET', encoding:'binary'},
	function (err, res, page) {
		var $ = cheerio.load(page);
		classMenu = $('<ul class="menu">');
		console.log(classMenu);
	});
