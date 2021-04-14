export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_IS_AUTORISED = 'SET_IS_AUTORISED';

export const setEmail = (email) => {
  return(
    {
      type: SET_EMAIL,
      payload: email,
    }
  )
}

export const setPassword = (password) => {
  return (
    {
      type: SET_PASSWORD,
      payload: password,
    }
  )
}

export const setIsAutorised = (autorise) => {
  return (
    {
      type: SET_IS_AUTORISED,
      payload: autorise
    }
  )
}
