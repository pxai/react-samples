class Greeter {
	constructor(msg = 'Hello World') {
		this._msg = msg; 
	}

	get msg () { return this._msg; }

	set (msg) { this._msg = msg; }

	greet () {
		return `I say: ${this._msg}`;
	}
}

module.exports = { Greeter };
