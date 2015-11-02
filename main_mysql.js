var mysql = require('mysql');
var config = {host: 'localhost', user: 'root', password: '', database : 'joom3'};
var connection = mysql.createConnection(config);

connection.connect();
connection.query('SHOW TABLES;', function (err, fields, res) {
	if (err) throw error;
	console.log(fields);
});
connection.end();