const clone = require('clone')
const uid = require('./uid')


let notes = [
  {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    content: 'This is an example',
  },
   {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    content: 'This thing works',
  }
]


function get (id) {
  return new Promise((res) => {
    const note = notes.filter( n => n.id === id)
    res(notes[0])
  })
}

function getAll () {
  return new Promise((res) => {
    logStatus()
    res(notes)
  })
}

function add (note) {
  note.id = uid();
  return new Promise((res )=> {
    notes.push(note)
    logStatus(note)
    res(note)
  })
}

function remove (id) {
    return new Promise((res) => {
      const notes = notes.filter( n => n.id !== id)
      logStatus()
      res(id)
    })
}

function edit (id, note) {
    return new Promise((res) => {
        let articles = getData(token)
        for (prop in article) {
            articles[id][prop] = article[prop]
        }
        logStatus()
        res(articles[id])
    })
}

function logStatus(note={}) {
  console.log('Note: ', note, ' total: ', notes)
}

module.exports = {
  get,
  getAll,
  add,
  remove,
  edit
}