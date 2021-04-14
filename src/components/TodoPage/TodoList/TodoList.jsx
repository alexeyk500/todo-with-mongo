import React from 'react';
import TodoItem from './TodoItem/TodoItem'

function TodoList (props) {
  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {props.todoList.map((todo,ind)=><TodoItem todo={todo} ind={ind}/>)}
      </ul>
      <p></p>
      <hr />
    </div>

  )
}

export default TodoList;
