var http = require('http');
var express = require('express');
var app = express();

app.use('', function (req, res) {
	res.end('Hello lee');
});

app.listen(9000);