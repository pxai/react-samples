const url = 'http://localhost:3001';


export function getAll () {
      return fetch(url + '/notes', {
          method: 'GET'
        }
      )
      .then(result => result.json())
   }

export function get(id) {
    return fetch(url +'/notes/' + id, {
        method: 'GET'
      }
    )
    .then(result => result.json() )
  }


export function create (note) {
    return fetch(url + '/notes', {
        method: 'POST',
        body: JSON.stringify(notes)
      }
    )
    .then(result => result.json() )
  }

export function update (note, option) {
    return fetch(url +'/notes/' + note.id, {
        method: 'PUT',
        body: JSON.stringify(note)
      }
    )
    .then(result => result.json() )
  }

export function delete (id) {
    return fetch(url +'/notes/' + id, {
        method: 'DELETE'
      }
    );
  }
}
