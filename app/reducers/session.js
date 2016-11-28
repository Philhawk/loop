import axios from 'axios';

// Constants
const SET_CURRENT_SESSION = "SET_CURRENT_SESSION";

// Sync Action Creators
export const setCurrentSession = session => ({ type: SET_CURRENT_SESSION, session })

// Async Action Creators


export const createSession = ({ sessionString, active, lecture_id, bitly }) => dispatch => {
  axios.post('/api/sessions', { sessionString, active, lecture_id, bitly })
  .then(session => {
    console.log(session.data);
    dispatch(setCurrentSession(session.data))
  })
  .catch(err => console.error(err));
}

export const fetchCurrentSession = ({ sessionString }) => dispatch => {
  return axios.get(`/api/sessions/string/${sessionString}`)
  .then(session => {
    dispatch(setCurrentSession(session.data))
  })
  .catch(err => console.error(err));
}

export const updateSessionTime = ({session_id}) => dispatch => {
  console.log("SESSION ID", session_id)
  axios.put(`/api/sessions/${session_id}`, { timeStarted: Date.now() })
  .then(session => {
    dispatch(setCurrentSession(session.data))
  })
}

// Initial State
const initialState = {
  sessionString: '',
  active: false,
  lecture_id: null,
  bitly: '',
  currentQuestion: -1
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_SESSION:
      return action.session;
    default:
      return state;
  }
}

export default reducer;
