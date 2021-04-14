import {SET_TODO_LIST, SET_IS_FETCHING} from './actions'

const initialState = {
  todoList : [
    {id:1, title: 'Купить Хлеба', completed: false},
    {id:2, title: 'Купить Молока', completed: true},
    {id:3, title: 'Купить печенек', completed: false},
  ],
  isFetching: false
}

function TodoPageReducer (state=initialState, action) {
  switch (action.type) {
    case SET_TODO_LIST: {
      return (
        {...state, todoList: action.payload}
      )
    }

    case SET_IS_FETCHING : {
      return (
        {...state, isFetching: action.payload}
      )
    }

    default: return state
  }
}

export default TodoPageReducer;
