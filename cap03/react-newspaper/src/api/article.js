import RequestHeaders from './headers'

const url = 'http://localhost:3001';

const Article = function () {

    this.getAll = function () {
      return fetch(url + '/articles', {
          method: 'GET', 
          headers: RequestHeaders
        }
      )
      .then(result => result.json())
   }
   
   this.get = function (id) {
    return fetch(url +'/articles/' + id, {
        method: 'GET', 
        headers: RequestHeaders
      }
    )
    .then(result => result.json() )
  }

   this.getByCategory = function (category) {
    return fetch(url + '/'+category+'/articles', {
        method: 'GET', 
        headers: RequestHeaders
      }
    )
    .then(result => result.json() )
  }

  this.create = function (article) {
    return fetch(url + '/articles', {
        method: 'ARTICLE',
        body: JSON.stringify(article),
        headers: RequestHeaders
      }
    )
    .then(result => result.json() )
  }

  this.vote = function (id, vote) {
    return fetch(url + '/articles/' + id, {
        method: 'ARTICLE',
        body: JSON.stringify(vote),
        headers: RequestHeaders
      }
    )
    .then(result => result.json() )
  }

  this.update = function (article, option) {
    return fetch(url +'/articles/' + article.id, {
        method: 'PUT',         
        body: JSON.stringify(article),
        headers: RequestHeaders
      }
    )
    .then(result => result.json() )
  }

  this.delete = function (id) {
    return fetch(url +'/articles/' + id, {
        method: 'DELETE', 
        headers: RequestHeaders
      }
    );
  }
}

export default new Article();