class Api {
    constructor (data = []) {
        this._data = data;
    }

    findAll () {
        return this._data;
    }

    findById (id) {
        return this._data.find(a => a.id === id);
    }

    add (task) {
        const id = Math.round(1000 * Math.random());
        this._data.push({id, task});
    }

    remove (id) {
        this._data = this._data.filter(a => a.id !== id);
        console.log("Removed: ", id);
    }

    update (id, element) {
        const index = this._data.findIndex(a => a.id === id) ;
        if (index > -1) {
            this._data[index] = element;
        }
    }
}

export default Api;
