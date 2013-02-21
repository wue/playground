var express = require('express');
var app = express();

app.configure(function() {
	app.set('port', process.env.PORT || 8000);
	app.use(express.logger('dev'));
})

var api = require('./controller/api.js');
app.get('/greet/:to', api.greet);

app.listen(app.get('port'));
console.log("API server listening on port %d", app.get('port'));