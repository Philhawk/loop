// Constants
const STUDENT_ADD_MOOD = "STUDENT_ADD_MOOD";

// Sync Action Creators
export const studentAddMood = ({mood}) => ({ type: STUDENT_ADD_MOOD, mood })

// Async Action Creators
export const callStudentAddMood = mood => dispatch => {
  dispatch(studentAddMood(mood))
}

// Initial State
const initialState = 0;

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case STUDENT_ADD_MOOD:
      return state + action.mood
    default:
      return state;
  }
}

export default reducer;
