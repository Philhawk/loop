import axios from 'axios';


// actions
const ADD_QUESTION = "ADD_QUESTION";
const REMOVE_QUESTION = "REMOVE_QUESTION";
const SET_QUESTIONS = "SET_QUESTIONS";

export const addQuestion = question => ({
  type: ADD_QUESTION, question
})

export const removeQuestion = () => ({
  type: REMOVE_QUESTION
})

export const setQuestions = () => ({
  type: SET_QUESTIONS, questions
})

export const callRemoveQuestion = () => dispatch => {
  dispatch(removeQuestion())
}

export const createQuestion = ({content, correctAnswer, questionType, choices, lecture_id }) => dispatch => {
  axios.post('/api/questions', {content, correctAnswer, questionType, choices, lecture_id })
  .then(question => dispatch(addQuestion(question.data)))
}

export const fetchQuestions = sessionString => dispatch => {
  axios.get(`/api/questions/session/${sessionString}`)
  .then(questions => {
    console.log(questions);
  })
}

export const setQ



const initialState = [{
    content: "",
    correctAnswer: null,
    questionType: "",
    choices: []
}];

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_QUESTION:
    return state.concat(action.question)
    case REMOVE_QUESTION:
    return state.slice(1)
  }
  return state;
}

export default reducer;
