import axios from 'axios';


// actions
const ADD_QUESTION = "ADD_QUESTION";
const REMOVE_QUESTION = "REMOVE_QUESTION";

export const addQuestion = question => ({
  type: ADD_QUESTION, question
})

export const removeQuestion = () => ({
  type: REMOVE_QUESTION
})

export const callRemoveQuestion = () => dispatch => {
  dispatch(removeQuestion())
}

export const createQuestion = ({content, correctAnswer, questionType, choices, lecture_id }) => dispatch => {
  axios.post('/api/questions', {content, correctAnswer, questionType, choices, lecture_id })
  .then(question => dispatch(addQuestion(question.data)))
}



const initialState = [{
    content: "Incoming Question ",
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
