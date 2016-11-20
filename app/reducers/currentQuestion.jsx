
// Constants
const SET_CURRENT_QUESTION = "SET_CURRENT_QUESTION";

// Sync Action Creators
const setCurrentQuestion = question => { type: SET_CURRENT_QUESTION, question }

// Async Action Creators

// Initial State
const initialState = {
  content: 'The decision excerpted most directly reflected a growing belief after the Second World War that the power of the federal government should be used to',
  correctAnswer: '',
  questionType: 'multipleChoice',
  choices: ['The decision excerpted most directly reflected a growing belief after the Second World War that the power of the federal government should be used to',
'The decision excerpted most directly reflected a growing belief after the Second World War that the power of the federal government should be used to',
'The decision excerpted most directly reflected a growing belief after the Second World War that the power of the federal government should be used to',
'The decision excerpted most directly reflected a growing belief after the Second World War that the power of the federal government should be used to'],
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
