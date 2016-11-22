// Constants
const STUDENT_ADD_QUESTION = "STUDENT_ADD_QUESTION";

// Sync Action Creators
export const studentAddQuestion = question => ({ type: STUDENT_ADD_QUESTION, question })

// Async Action Creators
export const callStudentAddQuestion = question => dispatch => {
  dispatch(studentAddQuestion(question))
}

// Initial State
const initialState = [{
  questionContent: '',
  answered: false
}]

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case STUDENT_ADD_QUESTION:
      return state.concat(action.question);
    default:
      return state;
  }
}

export default reducer;
