import axios from 'axios'

const reducer = (state=null, action) => {
  switch(action.type) {
  case CREATE_USER:
    return action.user
  case AUTHENTICATED:
    return action.user
  }
  return state
}
const CREATE_USER = 'CREATE_USER'
const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const createUser = user => ({
  type: CREATE_USER, user
})

export const signup = ({ email, password, name, role }) => dispatch => {
  axios.post('/api/users', { email, password, name, role })
  .then(user => dispatch(createUser(user.data)))
}

export const login = (email, password) =>
  dispatch =>
    axios.post('/api/auth/local/login',
      {email, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default reducer
