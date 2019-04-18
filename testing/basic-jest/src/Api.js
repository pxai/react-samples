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

    add ({name}) {
        const id = Math.round(1000 * Math.random());
        this._data.push({id, name});
    }

    remove (id) {
        this._data = this._data.filter(a => a.id !== id);
    }

    update (task) {
        const index = this._data.findIndex(a => a.id === task.id) ;
        if (index > -1) {
            this._data[index] = task;
        }
    }
}

export default Api;
