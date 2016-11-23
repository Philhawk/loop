
// Constants
const SET_CURRENT_QUESTION = "SET_CURRENT_QUESTION";

// Sync Action Creators
const setCurrentQuestion = question => ({ type: SET_CURRENT_QUESTION, question })

// Async Action Creators

export const callCurrentQuestion = (question) => dispatch => {
  dispatch(setCurrentQuestion(question))
}

// Initial State
const initialState = {
  content: 'MULT',
  correctAnswer: '',
  questionType: 'multipleChoice',
  choices: ["A", "B", "C", "D"],
  lecture_id: 0
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_QUESTION:
      return action.question;
    default:
      return state;
  }
}

export default reducer;
