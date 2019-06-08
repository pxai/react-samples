const url = "http://localhost:3001";

const headers =  {
  "Accept": "application/json, text/plain, */*",
  "Content-Type": "application/json"
};

export function getAll () {
      return fetch(url + "/notes", {
          method: "GET"
        }
      )
      .then(result => result.json())
   }

export function get(id) {
    return fetch(url +"/notes/" + id, {
        method: "GET"
      }
    )
    .then(result => result.json() )
  }


export function create (note) {
    return fetch(url + "/notes", {
        method: "POST",
        headers,
        body: JSON.stringify(note)
      }
    )
    .then(result => result.json() )
  }

export function update (note, option) {
    return fetch(url +"/notes/" + note.id, {
        method: "PUT",
        headers,
        body: JSON.stringify(note)
      }
    )
    .then(result => result.json() )
  }

export function remove (id) {
    return fetch(url +"/notes/" + id, {
        method: "DELETE",
        headers
      }
    );
  }
