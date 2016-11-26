import axios from 'axios';


// actions
const ADD_ANSWER = "ADD_ANSWER";
const RESET = "RESET";

export const addAnswer = answer => ({ type: ADD_ANSWER, answer })
export const reset = () => ({type: RESET })

export const callAddAnswer = answer => dispatch => {
  dispatch(addAnswer(answer))
}

export const callOpenEndedReset = () => dispatch => {
  dispatch(reset())
}

const initialState = [];

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_ANSWER:
      return state.concat(action.answer)
    case RESET:
      return initialState;
  }
  return state;
}

export default reducer;
