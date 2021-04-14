import React from 'react';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'navy',
    width: '400px',
    padding: '0.3rem 1rem',
    marginBottom: '0.5rem',
    border: '1px solid #ccc',
    backgroundColor: '#ccc',
    borderRadius: '5px',
    fontSize: '20px',
  },
  btnDelete: {
    color: 'white',
    backgroundColor: 'red',
    borderRadius: '5px',
    border: 'none',
    width: '1.5rem'
  }
}

function TodoItem (props) {
  return (
    <li style={styles.li}>
      <span>
        <input
          type='checkbox'
        />
        &nbsp;
        <strong>{props.ind+1}</strong>
        &nbsp;
        -
        &nbsp;
        {props.todo.title}
      </span>
      &nbsp;
      <button style={styles.btnDelete}>&times;</button>
    </li>
  )
}

export default TodoItem;
