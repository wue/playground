
var helloService = require('../service/hello_service.js');

exports.greet = function(req, res) {
	res.json(
		{ greeting: helloService.greet(req.params.to) }
	);
}