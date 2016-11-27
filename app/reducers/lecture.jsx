import axios from 'axios';


// actions
const SET_LECTURE = 'SET_LECTURE';

export const setLecture = lecture => ({
  type: SET_LECTURE,
  lecture
})

export const createLecture = ({ name, mood, timeStarted, teacher_id }) => dispatch => {
  return axios.post('/api/lectures', { name, mood, timeStarted, teacher_id })
  .then(lecture => {
    dispatch(setLecture(lecture.data))
  })
}

export const updateLecture = ({ name, mood, timeStarted, teacher_id }) => dispatch => {
  axios.put('/api/lectures', { name, mood, timeStarted, teacher_id })
  .then(lecture => {
    console.log(lecture)
    dispatch(setLecture(lecture.data))
  })
}

const initialState = { id: 0, name: "", mood: 0, timeStarted: null}

const reducer = (state = initialState, { lecture, type }) => {
  switch(type) {
    case SET_LECTURE:
      return lecture;
  }
  return state;
}

export default reducer;
