import {
    GET_POST,
    GET_POSTS,
    GET_POSTS_BY_CATEGORY,
    ADD_POST,
    DELETE_POST,
    UPDATE_POST,
    VOTE_POST
  } from '../actions/news'

  const initialPostsState = {
    news: []
  };

  export default function news (state = initialPostsState, action) {
    switch (action.type) {
      case GET_POSTS:
        return { news: action.news.filter(elem => !elem.deleted)};
      case GET_POST:
        return { news: [action.news]};
      case GET_POSTS_BY_CATEGORY:
        return { news: state.news.filter(elem => elem.category === action.category) };
      case ADD_POST:
        return {
              news: [
                ...state.news,
                action.news
            ]
        };
      case VOTE_POST:
        return { news: 
                  state.news.map( (elem) => {
                    if(elem.id !== action.news.id) {
                        // This isn't the item we care about - keep it as-is
                        return elem;
                    }
                    return action.news;
                    // Otherwise, this is the one we want - return an updated value
                    /*return {
                        ...elem,
                        voteScore: 666
                    };*/
                })
              };
      case DELETE_POST:
        return { news: state.news.filter(elem => elem.id !== action.id) };
      case UPDATE_POST:
        return { news: 
                  state.news.map( (elem) => {
                  if(elem.id !== action.news.id) {
                      // This isn't the item we care about - keep it as-is
                      return elem;
                  }

                  // Otherwise, this is the one we want - return an updated value
                  return {
                      ...elem,
                      ...action.news
                  };
              })
            };
      default:
          return state;
    }
  }
