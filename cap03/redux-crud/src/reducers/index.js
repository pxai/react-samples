import { SHOW_NAME, CHANGE_NAME } from '../actions'

let reducer = (state = {name: 'Anonymous'}, action) => {
    switch (action.type) {
      case CHANGE_NAME:         
          return {name: action.name};
      case SHOW_NAME:
          console.log('Show name: ', state.name)
          return state;
      default:
          return state;
  }
};

export default reducer;
