class Api {
    constructor (data = []) {
        this._data = data;
    }

    list () {
        return this._data;
    }

    add (element) {
        this._data.push(element);
    }
}

export default Api;