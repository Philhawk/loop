// Constants

const STUDENT_SELECT_A = "STUDENT_SELECT_A";
const STUDENT_SELECT_B = "STUDENT_SELECT_B";
const STUDENT_SELECT_C = "STUDENT_SELECT_C";
const STUDENT_SELECT_D = "STUDENT_SELECT_D";

// Sync Action Creators
export const studentAddAnswer = ({answer}) => ({ type: STUDENT_ADD_ANSWER, answer })

// Async Action Creators
export const callStudentAddAnswer = answer => dispatch => {
  dispatch(studentAddAnswer(answer))
}

// Initial State
const initialState = [0, 0, 0, 0];

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case STUDENT_SELECT_A:
      return state[0] + 1
    case STUDENT_SELECT_B:
      return state[1] + 0
    case STUDENT_SELECT_C:
      return state + action.mood
    case STUDENT_SELECT_D:
      return state + action.mood
    default:
      return state;
  }
}

export default reducer;
