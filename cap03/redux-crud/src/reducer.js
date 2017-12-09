let reducer = (state = 'Anonymous', action) => {
    switch (action.type) {
      case 'CHANGE_NAME':
          return action.name;
      default:
          return state;
  }
};

export default reducer;
