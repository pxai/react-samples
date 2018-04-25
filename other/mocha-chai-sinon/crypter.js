module.exports = class Crypter {
	constructor(length = 8) {
		this._length = length;
	}

	get length() { return this._length; }
	set length(length) { this._length = length; }
}

//module.exports = { Crypter };
