class Api {
    constructor (data = {}) {
        this._data = data;
    }

    list () {
        return this._data;
    }
}

export default Api;