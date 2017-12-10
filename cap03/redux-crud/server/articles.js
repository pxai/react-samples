const clone = require('clone')

let db = {}

const defaultData = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false 
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false
  }
}

function getData (token) {
  let data = db[token]
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByCategory (token, category) {
  return new Promise((res) => {
    let articles = getData(token)
    let keys = Object.keys(articles)
    let filtered_keys = keys.filter(key => articles[key].category === category && !articles[key].deleted)
    res(filtered_keys.map(key => articles[key]))
  })
}

function get (token, id) {
  return new Promise((res) => {
    const articles = getData(token)
    res(
      articles[id].deleted 
        ? {}
        : articles[id]
    )
  })
}

function getAll (token) {
  return new Promise((res) => {
    const articles = getData(token)
    let keys = Object.keys(articles)
    let filtered_keys = keys.filter(key => !articles.deleted)
    res(filtered_keys.map(key => articles[key]))
  })
}

function add (token, article) {
  return new Promise((res) => {
    let articles = getData(token)
    
    articles[article.id] = {
      id: article.id,
      timestamp: article.timestamp,
      title: article.title,
      body: article.body,
      author: article.author,
      category: article.category,
      voteScore: 1,
      deleted: false
    }
     
    res(articles[article.id])
  })
}

function vote (token, id, option) {
  return new Promise((res) => {
    let articles = getData(token)
    article = articles[id]
    switch(option) {
        case "upVote":
            article.voteScore = article.voteScore + 1
            break
        case "downVote":
            article.voteScore = article.voteScore - 1
            break
        default:
            console.log(`articles.vote received incorrect parameter: ${option}`)
    }
    res(article)
  })
}

function disable (token, id) {
    return new Promise((res) => {
      let articles = getData(token)
      articles[id].deleted = true
      res(articles[id])
    })
}

function edit (token, id, article) {
    return new Promise((res) => {
        let articles = getData(token)
        for (prop in article) {
            articles[id][prop] = article[prop]
        }
        res(articles[id])
    })
}

module.exports = {
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  getAll
}