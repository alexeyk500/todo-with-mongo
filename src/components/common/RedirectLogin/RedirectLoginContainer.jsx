import React from "react";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


const RedirectToLogin = (Component) => {
  const WrappedComponent = (props) => {
    if (!props.isAutorised) {
      return <Redirect to='/' />
    }
    return (
        < Component {...props} />
    )
  }

  const mapStateToProps = (state) => {
    return ( {isAutorised: state.login.isAutorised} )
  }

  return connect(mapStateToProps)(WrappedComponent);
}

export default RedirectToLogin;
