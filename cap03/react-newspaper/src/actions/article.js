import  { Article }  from "../api";

export const GET_ARTICLE = "GET_ARTICLE"
export const GET_ARTICLES = "GET_ARTICLES"
export const GET_ARTICLES_BY_CATEGORY = "GET_ARTICLES_BY_CATEGORY"
export const ADD_ARTICLE = "ADD_ARTICLE"
export const DELETE_ARTICLE = "DELETE_ARTICLE"
export const UPDATE_ARTICLE = "UPDATE_ARTICLE"
export const VOTE_ARTICLE = "VOTE_ARTICLE"

export function getArticle(article) {
    return {
        type: GET_ARTICLE,
        article
    }
}
export function getArticleAsync(id) {
    return dispatch => (
        Article.get(id).then(article => dispatch(getArticle(article)))
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
        Article.getAll().then(articles => dispatch(getArticles(articles)))
    )
}


export function getArticlesByCategory(category) {
    return {
        type: GET_ARTICLES_BY_CATEGORY,
        category
    }
}

export function addArticle(article) {
    return {
        type: ADD_ARTICLE,
        article
    }
}

export function addArticleAsync(article) {
    return dispatch => (
        Article.create(article).then(() => dispatch(addArticle(article)))
    )
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        id
    }
}


export function deleteArticleAsync(id) {
    return dispatch => (
        Article.delete(id).then(() => dispatch(deleteArticle(id)))
    )
}

export function updateArticle (article) {
    return {
        type: UPDATE_ARTICLE,
        article
    }
}

export function updateArticleAsync(article) {
    console.log("Updating article : ", article);
    return dispatch => (
        Article.update(article).then((article) => dispatch(updateArticle(article)))
    )
}

export function voteArticle (article) {
    return {
        type: VOTE_ARTICLE,
        article
    }
}

export function voteArticleAsync(id, vote) {
    return dispatch => (
        Article.vote(id, vote).then((article) => dispatch(voteArticle(article)))
    )
}