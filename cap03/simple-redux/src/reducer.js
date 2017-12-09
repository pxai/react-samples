import { SHOW_NAME, CHANGE_NAME } from './actions'

let reducer = (state = 'Anonymous', action) => {
    switch (action.type) {
      case CHANGE_NAME:
      console.log('Changed name in reducer:', action);
          return action.name;
      case SHOW_NAME:
          return state;
      default:
          return state;
  }
};

export default reducer;
