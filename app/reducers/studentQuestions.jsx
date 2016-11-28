import axios from 'axios';

// Constants
const STUDENT_ADD_QUESTION = "STUDENT_ADD_QUESTION";
const STUDENT_REMOVE_QUESTION = "STUDENT_REMOVE_QUESTION"
const STUDENT_SHOW_ALL_QUESTIONS = "STUDENT_SHOW_ALL_QUESTIONS"

// Sync Action Creators
export const studentAddQuestion = question => ({ type: STUDENT_ADD_QUESTION, question })
export const studentRemoveQuestion = index => ({ type: STUDENT_REMOVE_QUESTION, index })
export const setStudentQuestionsForLoop = questions => ({ type: STUDENT_SHOW_ALL_QUESTIONS, questions})

// Async Action Creators
export const createStudentQuestion = ({ questionContent, session_id }) => dispatch => {
  axios.post('/api/studentQuestions', { content: questionContent, session_id })
  .then(studentQuestion => {
    console.log("STUDENT QUESTION", studentQuestion.data)
    dispatch(studentAddQuestion(studentQuestion.data))
  })
}

export const getAllStudentQuestionsByLoop = ({ session_id }) => dispatch => {
  axios.get(`/api/studentQuestions/session/${session_id}`)
  .then(questions => {
    dispatch(setStudentQuestionsForLoop(questions.data))
  })
}

// make an async thunk that will update the question status from unanswered to answered
export const answerQuestion = ({ id }) => dispatch => {
  axios.put(`/api/studentQuestions/${id}`, { status: "answered" })
  .then(question => {
  })
}


// Initial State
const initialState = []

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case STUDENT_ADD_QUESTION:
      return state.concat(action.question);
    case STUDENT_REMOVE_QUESTION:
      return state.slice(0, action.index).concat(state.slice(action.index + 1))
    case STUDENT_SHOW_ALL_QUESTIONS:
      return action.questions
    default:
      return state;
  }
}

export default reducer;
