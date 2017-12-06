import RequestHeaders from './headers'

const url = 'http://localhost:3001';

const Category = function () {
    this.getAll = function () {
      return fetch(url + '/categories', {
                  method: 'GET', 
                  headers: RequestHeaders
                }
            )
            .then((res) => res.json())
    }

}

export default new Category();