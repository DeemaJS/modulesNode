var request = require('request');
var cheerio = require('cheerio');

request({uri:'http://rod.dn.ua', method:'GET', encoding:'binary'},
	function (err, res, page) {
		var $ = cheerio.load(page);
		var links = [];

		$('a').each(function(i, elem) {
			links[i] = $(this).attr('href');
		});

		links.join(', ');
		console.log(links);
	});
