import React from 'react';

function AddTodo (props) {
  return(
    <div>
      <form>
        <p></p>
        <h3>Add new Todo</h3>
        <input
          type='text'
          placeholder='Todo title'
        />
        <button type='submit'>Add Todo</button>
        <p></p>
      </form>
    </div>
  )
}

export default AddTodo;
