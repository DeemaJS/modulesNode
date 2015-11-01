var http = require('http');
var express = require('express');
var app = express();
app.use(express.bodyParser());

app.get('/', function (req, res) {
	res.end('Hello lee');
}).listen(9000); 

// /:folder/:file реагирует на запрос любой страницы из любой папки
// Запрос попадает в переменную req. 
// Все переменные доступны как «req.params.имя_переменной»
// IP юзера (req.ip), URL страницы (req.path), протокол (req.protocol)
// /index.htm?a=5& значения переменных попадают в req.query.имя_
// res.send или res.end отправляют ответ сервера
// передача res.attachment(‘путь_к_файлу’) или res.sendfile()
// bodyParser — мета-модуль, объединяющий модули json, urlencoded и multipart