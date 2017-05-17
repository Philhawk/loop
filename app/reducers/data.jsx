import axios from 'axios';

// Constants

const STUDENT_SELECT_A = 'STUDENT_SELECT_A';
const STUDENT_SELECT_B = 'STUDENT_SELECT_B';
const STUDENT_SELECT_C = 'STUDENT_SELECT_C';
const STUDENT_SELECT_D = 'STUDENT_SELECT_D';
const RESET = 'RESET';

// Sync Action Creators
export const studentSelectA = () => ({ type: STUDENT_SELECT_A });
export const studentSelectB = () => ({ type: STUDENT_SELECT_B });
export const studentSelectC = () => ({ type: STUDENT_SELECT_C });
export const studentSelectD = () => ({ type: STUDENT_SELECT_D });
export const reset = () => ({ type: RESET });

// Async Action Creators
export const callStudentSelectA = () => (dispatch) => {
  dispatch(studentSelectA());
};

export const callStudentSelectB = () => (dispatch) => {
  dispatch(studentSelectB());
};

export const callStudentSelectC = () => (dispatch) => {
  dispatch(studentSelectC());
};

export const callStudentSelectD = () => (dispatch) => {
  dispatch(studentSelectD());
};

export const callReset = () => (dispatch) => {
  dispatch(reset());
};

export const postResponse = ({ userResponse, question_id }) => (dispatch) => {
  axios.post('/api/responses', { userResponse, question_id })
  .then((response) => {
  });
};

// Initial State
const initialState = [0, 0, 0, 0];

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_SELECT_A:
      return [state[0] + 1, state[1], state[2], state[3]];
    case STUDENT_SELECT_B:
      return [state[0], state[1] + 1, state[2], state[3]];
    case STUDENT_SELECT_C:
      return [state[0], state[1], state[2] + 1, state[3]];
    case STUDENT_SELECT_D:
      return [state[0], state[1], state[2], state[3] + 1];
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
