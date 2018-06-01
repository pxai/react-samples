import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from '../actions/todo'

const initialTodoState = {
  name: 'My ToDo List',
  todos: [
    {"id": 1, "task": "Learn Redux"},
    {"id": 2, "task": "Learn Ruby"}
    ]
};

export default function todoList (state = initialTodoState, action) {

  switch (action.type) {
    case ADD_TODO:
      return {
          ...state, 
            todos: [
              ...state.todos,
              action.todo
          ]
      };
    case DELETE_TODO:
        return state.todos.filter(elem => elem.id !== action.todo.todo.id);
    case UPDATE_TODO:
      return state.todos.map( (elem) => {
                if(elem.id !== action.todo.id) { // keep it as-is
                    return elem;
                }
                
                // return an updated value
                return {
                    ...elem,
                    ...action.todo
                };    
            });
    default: 
        return state;
  }
}



class Customer {
    constructor (name, age) {
        this._name = name;
        this._age = age;
    }

    get name () {
        return this._name;
    }

    set name (name) {
        this._name= name;
    }

    get age () {
        return this._age;
    }

    set age (age) {
        this._age = age;
    }
}

customer = new Customer();

customer.age = 66;
customer.name = 'John Doe';

