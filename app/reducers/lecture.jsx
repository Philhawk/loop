const SET_LECTURE = 'SET_LECTURE';

const setLecture = lecture => ({
  type: SET_LECTURE,
  lecture
})

const createLecture = ({ name, mood, timeStarted }) => dispatch => {
  axios.post('', { })
  .then(lecture => dispatch(setLecture(lecture.data)))
}

const initialState = [{

}]

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LECTURE:
      return state.const(action.lecture)
  }
  return state;
}

export default reducer;
