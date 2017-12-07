import  { Articles }  from '../api';

export const GET_ARTICLE = 'GET_ARTICLE'
export const GET_ARTICLES = 'GET_ARTICLES'
export const GET_ARTICLES_BY_CATEGORY = 'GET_ARTICLES_BY_CATEGORY'
export const ADD_ARTICLES = 'ADD_ARTICLE'
export const DELETE_ARTICLES = 'DELETE_ARTICLE'
export const UPDATE_ARTICLES = 'UPDATE_ARTICLE'
export const VOTE_ARTICLES = 'VOTE_ARTICLE'

export function getArticle(articles) {
    return {
        type: GET_ARTICLE,
        articles
    }
}
export function getArticlesAsync(id) {
    return dispatch => (
        Articles.get(id).then(articles => dispatch(getArticle(articles)))
    )
}

export function getArticles(articles) {
    return {
        type: GET_ARTICLES,
        articles
    }
}

export function getArticlesAsync() {
    return dispatch => (
        Articles.getAll().then(articles => dispatch(getArticles(articles)))
    )
}


export function getArticlesByCategory(category) {
    return {
        type: GET_ARTICLE_BY_CATEGORY,
        category
    }
}

export function addArticles(articles) {
    return {
        type: ADD_ARTICLE,
        articles
    }
}

export function addArticlesAsync(articles) {
    return dispatch => (
        Articles.create(articles).then(() => dispatch(addArticles(articles)))
    )
}

export function deleteArticles(id) {
    return {
        type: DELETE_ARTICLES,
        id
    }
}


export function deleteArticlesAsync(id) {
    return dispatch => (
        Articles.delete(id).then(() => dispatch(deleteArticles(id)))
    )
}

export function updateArticles (articles) {
    return {
        type: UPDATE_ARTICLES,
        articles
    }
}

export function updateArticlesAsync(articles) {
    console.log('Updating articles : ', articles);
    return dispatch => (
        Articles.update(articles).then((articles) => dispatch(updateArticles(articles)))
    )
}

export function voteArticles (articles) {
    return {
        type: VOTE_ARTICLES,
        articles
    }
}

export function voteArticlesAsync(id, vote) {
    return dispatch => (
        Articles.vote(id, vote).then((articles) => dispatch(voteArticles(articles)))
    )
}
