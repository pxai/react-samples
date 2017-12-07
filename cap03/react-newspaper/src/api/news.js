import RequestHeaders from './headers'

const url = 'http://localhost:3001';

const News = function () {

    this.getAll = function () {
      return fetch(url + '/news', {
          method: 'GET', 
          headers: RequestHeaders
        }
      )
      .then(result => result.json())
   }
   
   this.get = function (id) {
    return fetch(url +'/news/' + id, {
        method: 'GET', 
        headers: RequestHeaders
      }
    )
    .then(result => result.json() )
  }

   this.getByCategory = function (category) {
    return fetch(url + '/'+category+'/news', {
        method: 'GET', 
        headers: RequestHeaders
      }
    )
    .then(result => result.json() )
  }

  this.create = function (news) {
    return fetch(url + '/news', {
        method: 'POST',        
        body: JSON.stringify(news),
        headers: RequestHeaders
      }
    )
    .then(result => result.json() )
  }

  this.vote = function (id, vote) {
    return fetch(url + '/news/' + id, {
        method: 'POST',        
        body: JSON.stringify(vote),
        headers: RequestHeaders
      }
    )
    .then(result => result.json() )
  }

  this.update = function (news, option) {
    return fetch(url +'/news/' + news.id, {
        method: 'PUT',         
        body: JSON.stringify(news),
        headers: RequestHeaders
      }
    )
    .then(result => result.json() )
  }

  this.delete = function (id) {
    return fetch(url +'/news/' + id, {
        method: 'DELETE', 
        headers: RequestHeaders
      }
    );
  }
}

export default new News();