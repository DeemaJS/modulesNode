var request = require('request');

request({uri:'http://rod.dn.ua', method:'GET', encoding:'binary'},
	function (err, res, page) {
		console.log(page);
	});
