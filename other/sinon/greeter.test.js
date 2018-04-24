const assert = require('assert');
const { Greeter } = require('./greeter');

describe('Tests for greeter', () => {
	it('Should exist as a class', () => {
		assert(Greeter);
	});

	it('Should return default message', () => {
		const greeter = new Greeter();
		assert.equal(greeter.msg,'Hello World');
	});
	
	it('Should return default message', () => {
		const greeter = new Greeter('Hi there');
		assert.equal(greeter.msg,'Hi there');
	});
})
