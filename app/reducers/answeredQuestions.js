import axios from 'axios';

// Constants
const TEACHER_QUESTIONS_ANSWERED = "TEACHER_QUESTIONS_ANSWERED";

// Sync Action Creators
export const teacherQuestionsAnswered = length => ({ type: TEACHER_QUESTIONS_ANSWERED, length })

export const fetchQuestionsAnsweredLength = ({session_id}) => dispatch => {
  axios.get(`api/studentQuestions/session/${session_id}/answered`)
  .then((questions) => {
    dispatch(teacherQuestionsAnswered(questions.data.length))
  })
}

// Initial State
const initialState = 0

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case TEACHER_QUESTIONS_ANSWERED:
      return action.length
    default:
      return state;
  }
}

export default reducer;
