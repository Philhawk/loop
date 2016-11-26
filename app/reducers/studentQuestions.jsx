// Constants
const STUDENT_ADD_QUESTION = "STUDENT_ADD_QUESTION";
const STUDENT_REMOVE_QUESTION = "STUDENT_REMOVE_QUESTION"

// Sync Action Creators
export const studentAddQuestion = question => ({ type: STUDENT_ADD_QUESTION, question })
export const studentRemoveQuestion = index => ({ type: STUDENT_REMOVE_QUESTION, index })


// Async Action Creators
export const callStudentAddQuestion = question => dispatch => {
  dispatch(studentAddQuestion(question))
}

// Initial State
const initialState = []

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case STUDENT_ADD_QUESTION:
      return state.concat(action.question);
    case STUDENT_REMOVE_QUESTION:
      return state.slice(0, action.index).concat(state.slice(action.index + 1))
    default:
      return state;
  }
}

export default reducer;
