import { GET_NOTES, GET_NOTE,
    ADD_NOTE, UPDATE_NOTE, DELETE_NOTE  } from '../actions'

let initialNotes = [
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
];

let reducer = (state = initialNotes, action) => {
    switch (action.type) {
        case GET_NOTES:         
          return state;
        
        case GET_NOTE:
          console.log('get name: ', state.name)
          return state.filter(n => n.id === action.id);
        
        case ADD_NOTE:
          console.log('add name: ', action.note)
          return state;
        
          case UPDATE_NOTE:
          console.log('update name: ', action.note)
          return state;
          
          case DELETE_NOTE:
          console.log('delete note: ', action.id)
          return state.filter(n => n.id !== action.id);
          
          default:
          return state;
  }
};

export default reducer;
