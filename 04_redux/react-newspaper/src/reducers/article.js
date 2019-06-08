import {
    GET_ARTICLE,
    GET_ARTICLES,
    GET_ARTICLES_BY_CATEGORY,
    ADD_ARTICLE,
    DELETE_ARTICLE,
    UPDATE_ARTICLE,
    VOTE_ARTICLE
  } from "../actions/article"
  
  const initialArticlesState = {
    articles: []
  };
  
  export default function article (state = initialArticlesState, action) {
    switch (action.type) {
      case GET_ARTICLES:
        return { articles: action.articles.filter(elem => !elem.deleted)};
      case GET_ARTICLE:
        return { articles: [action.article]};
      case GET_ARTICLES_BY_CATEGORY:
        return { articles: state.articles.filter(elem => elem.category === action.category) };
      case ADD_ARTICLE:
        return {
              articles: [
                ...state.articles,
                action.article
            ]
        };
      case VOTE_ARTICLE:
        return { articles:
                  state.articles.map( (elem) => {
                    if(elem.id !== action.article.id) {
                        // This isn"t the item we care about - keep it as-is
                        return elem;
                    }
                    return action.article;
                    // Otherwise, this is the one we want - return an updated value
                    /*return {
                        ...elem,
                        voteScore: 666
                    };*/    
                })
              };
      case DELETE_ARTICLE:
        return { articles: state.articles.filter(elem => elem.id !== action.id) };
      case UPDATE_ARTICLE:
        return { articles:
                  state.articles.map( (elem) => {
                  if(elem.id !== action.article.id) {
                      // This isn"t the item we care about - keep it as-is
                      return elem;
                  }
                  
                  // Otherwise, this is the one we want - return an updated value
                  return {
                      ...elem,
                      ...action.article
                  };    
              })
            };
      default: 
          return state;
    }
  }