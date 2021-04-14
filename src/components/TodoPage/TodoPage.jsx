import React from 'react';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';

function TodoPage (props) {
  const onClickLoogOut = () => {
    console.log('Разлогинились')
    props.setIsAutorised(false)
  }
  return(
    <div>
      <AddTodo />
      <TodoList todoList= {props.todoList}/>
      <p></p>
      <button
        onClick={onClickLoogOut}
      >LogOut</button>
      <p></p>
    </div>
  )
}

export default TodoPage
