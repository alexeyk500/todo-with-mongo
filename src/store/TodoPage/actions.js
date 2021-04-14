export const SET_TODO_LIST = 'SET_TODO_LIST';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';

export const setTodoList = (todoList) =>{
  return(
    {
      type: SET_TODO_LIST,
      payload: todoList
    }
  )
}

export const setIsFetching = (isFetching)  => {
  return (
    {
      type: SET_IS_FETCHING,
      payload: isFetching
    }
  )
}
