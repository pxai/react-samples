import  { News }  from '../api';

export const GET_NEWS = 'GET_NEWS'
export const GET_NEWSS = 'GET_NEWSS'
export const GET_NEWSS_BY_CATEGORY = 'GET_NEWSS_BY_CATEGORY'
export const ADD_NEWS = 'ADD_NEWS'
export const DELETE_NEWS = 'DELETE_NEWS'
export const UPDATE_NEWS = 'UPDATE_NEWS'
export const VOTE_NEWS = 'VOTE_NEWS'

export function getNews(news) {
    return {
        type: GET_NEWS,
        news
    }
}
export function getNewsAsync(id) {
    return dispatch => (
        News.get(id).then(news => dispatch(getNews(news)))
    )
}

export function getNews(news) {
    return {
        type: GET_NEWSS,
        news
    }
}

export function getNewsAsync() {
    return dispatch => (
        News.getAll().then(news => dispatch(getNews(news)))
    )
}


export function getNewsByCategory(category) {
    return {
        type: GET_NEWSS_BY_CATEGORY,
        category
    }
}

export function addNews(news) {
    return {
        type: ADD_NEWS,
        news
    }
}

export function addNewsAsync(news) {
    return dispatch => (
        News.create(news).then(() => dispatch(addNews(news)))
    )
}

export function deleteNews(id) {
    return {
        type: DELETE_NEWS,
        id
    }
}


export function deleteNewsAsync(id) {
    return dispatch => (
        News.delete(id).then(() => dispatch(deleteNews(id)))
    )
}

export function updateNews (news) {
    return {
        type: UPDATE_NEWS,
        news
    }
}

export function updateNewsAsync(news) {
    console.log('Updating news : ', news);
    return dispatch => (
        News.update(news).then((news) => dispatch(updateNews(news)))
    )
}

export function voteNews (news) {
    return {
        type: VOTE_NEWS,
        news
    }
}

export function voteNewsAsync(id, vote) {
    return dispatch => (
        News.vote(id, vote).then((news) => dispatch(voteNews(news)))
    )
}
