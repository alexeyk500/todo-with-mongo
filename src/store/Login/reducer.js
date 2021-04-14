import {SET_EMAIL, SET_PASSWORD, SET_IS_AUTORISED} from './actions'

const initialState = {
  email: '',
  password: '',
  isAutorised: false,
  adminPassword: '123',
}

function LoginReducer (state=initialState, action) {
  switch (action.type) {
    case SET_EMAIL: {
      return (
        {...state, email: action.payload}
      )
    }

    case SET_PASSWORD: {
      return (
        {...state, password: action.payload}
      )
    }

    case SET_IS_AUTORISED: {
      return (
        {...state, isAutorised: action.payload}
      )
    }
    default: return state
  }
}

export default LoginReducer;
