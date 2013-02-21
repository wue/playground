var assert = require("assert")
var should = require("should");
var helloService = require('../service/hello_service.js');
describe("greet", function() {
	it("checks for the right greeting", function(done) {
		var greeting = helloService.greet("lukas");
		assert.equal("hello lukas!", greeting);
		greeting.should.equal("hello lukas!");
		done();
	});
});


// ./node_modules/mocha/bin/mocha tests/test_api.js -w