const chai = require("chai");
const expect = chai.expect;
const  Crypter  = require("./crypter");

describe("Crypter class", () => {
	it ("should exist", () => {
		expect(Crypter).to.exist;
	});
});
