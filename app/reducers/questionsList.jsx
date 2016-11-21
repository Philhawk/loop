import axios from 'axios';


// actions
const ADD_QUESTION = "ADD_QUESTION";

export const addQuestion = question => ({
  type: ADD_QUESTION, question
})

export const createQuestion = ({content, correctAnswer, questionType, choices, lecture_id }) => dispatch => {
  axios.post('/api/questions', {content, correctAnswer, questionType, choices, lecture_id })
  .then(question => dispatch(addQuestion(question.data)))
}


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
  }
  return state;
}

export default reducer;
