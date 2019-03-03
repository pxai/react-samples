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

    remove (id) {
        this._data = this._data.filter(a => a.id !== id);
    }
}

export default Api;