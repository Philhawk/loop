import axios from 'axios';

// constants
const SET_ACTIVE_SESSIONS = 'SET_ACTIVE_SESSIONS';

// sync action creators
export const setActiveSessions = (sessionList) => ({ type: SET_ACTIVE_SESSIONS, sessionList })

// Async action creators
export const fetchActiveSessions = () => dispatch => {
  axios.get('/api/sessions/active')
  .then(sessions => {
    dispatch(setActiveSessions(sessions.data))
  })
}

export const fetchSessions = ({id}) => dispatch => {
  axios.get(`/api/sessions/lecture/${id}`)
  .then(sessions => {
    dispatch(setActiveSessions(sessions.data))
  })
}

// initial state
const initialState = [];

// reducer
const reducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_ACTIVE_SESSIONS:
      return action.sessionList
    default:
      return state;
  }
}

export default reducer;
