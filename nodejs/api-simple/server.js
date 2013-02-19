var api = require('./controller.js');
var http = require('http');

http.createServer(function(req, res) {
	api.hello(req, res);
}).listen(8000, 'localhost');

console.log('Hello API running at http://localhost:8000/');