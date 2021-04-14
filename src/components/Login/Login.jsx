import React from 'react';

function Login(props){

  const onChangeEmail = (event) => {
    props.setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    props.setPassword(event.target.value)
  }

  const onLoginClick = (event) => {
    event.preventDefault();
    if (props.password === props.adminPassword) {
      console.log('Авторизовались')
      props.setIsAutorised(true);
    }
  }

  return (
      <form>
        <h3>Login please</h3>
        <input
          type='text'
          placeholder='email'
          value={props.email}
          onChange={onChangeEmail}
        />
        <p></p>
        <input
          type='text'
          placeholder='password'
          value={props.password}
          onChange={onChangePassword}
        />
        <p></p>
        <button
          type='submit'
          onClick={onLoginClick}
        >Login</button>
        <p></p>
        <hr />
      </form>
  )
}

export default Login
