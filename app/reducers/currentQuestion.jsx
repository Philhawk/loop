
// Constants
const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';

// Sync Action Creators
const setCurrentQuestion = question => ({ type: SET_CURRENT_QUESTION, question });

// Async Action Creators
export const callSetCurrentQuestion = question => (dispatch) => {
  dispatch(setCurrentQuestion(question));
};

// Initial State
const initialState = {
  content: 'Questions Will Appear Here',
  choices: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_QUESTION:
      return action.question;
    default:
      return state;
  }
};

export default reducer;
