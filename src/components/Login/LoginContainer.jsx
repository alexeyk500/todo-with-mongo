import React from 'react';
import Login from './Login';
import {setEmail, setPassword, setIsAutorised} from './../../store/Login/actions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

function LoginContainer (props) {
  if (props.isAutorised) {
    return <Redirect to='/todo_page' />
  }
  return (
      <Login
        email = {props.email}
        password = {props.password}
        setEmail = {props.setEmail}
        setPassword = {props.setPassword}
        setIsAutorised = {props.setIsAutorised}
        adminPassword = {props.adminPassword}
      />
  )
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    password: state.login.password,
    isAutorised: state.login.isAutorised,
    adminPassword: state.login.adminPassword,
  }
}

const mapDispatchToProps = {
    setEmail,
    setPassword,
    setIsAutorised,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)


