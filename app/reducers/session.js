import axios from 'axios';

// Constants
const SET_CURRENT_SESSION = 'SET_CURRENT_SESSION';

// Sync Action Creators
export const setCurrentSession = session => ({ type: SET_CURRENT_SESSION, session });

// Async Action Creators
export const createSession = ({ sessionString, active, lecture_id, bitly }) => (dispatch) => {
  axios.post('/api/sessions', { sessionString, active, lecture_id, bitly })
  .then((session) => {
    dispatch(setCurrentSession(session.data));
  })
  .catch(err => console.error(err));
};

export const fetchCurrentSession = ({ sessionString }) => (dispatch) => {
  return axios.get(`/api/sessions/string/${sessionString}`)
  .then((session) => {
    dispatch(setCurrentSession(session.data));
  })
  .catch(err => console.error(err));
};

export const updateSession = ({ session_id, sessionLength }) => (dispatch) => {
  return axios.put(`/api/sessions/${session_id}`, { sessionLength, active: false })
  .then((session) => {
  });
};

export const activateSession = ({ session_id }) => (dispatch) => {
  axios.put(`/api/sessions/${session_id}/activate`, { timeStarted: Date.now(), active: true })
  .then((session) => {
    dispatch(setCurrentSession(session.data));
  })
  .catch(err => console.error(err));
};

export const createActiveSession = ({ sessionString, lecture_id }) => (dispatch) => {
  return axios.post('/api/sessions/active', {
    sessionString,
    lecture_id,
    active: true,
    timeStarted: Date.now(),
  })
  .then((session) => {
    dispatch(setCurrentSession(session.data));
  });
};

export const endSession = ({ session_id, sessionLength, active }) => (dispatch) => {
  axios.put(`/api/sessions/${session_id}`, { active, sessionLength })
  .then((session) => {
    dispatch(setCurrentSession(session.data));
  })
  .catch(err => console.error(err));
};

  export const deleteSession = ({ session_id }) => (dispatch) => {
    axios.delete(`/api/sessions/${session_id}`)
    .then(() => {
      console.log('SESSION DESTROYED');
    });
  };

// Initial State
const initialState = {
  sessionString: '',
  active: false,
  lecture_id: null,
  bitly: '',
  currentQuestion: -1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SESSION:
      return action.session;
    default:
      return state;
  }
};

export default reducer;
