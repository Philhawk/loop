import axios from 'axios';

// ------------- CONSTANTS
const SET_ACTIVE_USER = 'SET_ACTIVE_USER';


// ------------- SYNC ACTION CREATORS

// fired on successful login
export const setActiveUser = user => ({ type: SET_ACTIVE_USER, user })


// ------------- ASYNC ACTION CREATORS

export const fetchUser = ({ strategy, email, password }) => dispatch => {
  axios.post(`/${strategy}/login`, { email, password })
  .then(user => dispatch(setActiveUser(user.data)))
}

// ------------- REDUCER

const initialState = {
  id: 0,
  name: '',
  email: '',
  role: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ACTIVE_USER:
      return action.user;
    default:
      return state;
  }
}

export default reducer;
