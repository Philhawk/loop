import axios from 'axios';


// actions
const SET_LECTURE = 'SET_LECTURE';

export const setLecture = lecture => ({
  type: SET_LECTURE,
  lecture
})

export const fetchLecture = ({lecture_id}) => dispatch => {
  return axios.get(`/api/lectures/${lecture_id}`)
  .then(lecture => {
    dispatch(setLecture(lecture.data))
  })
}

export const createLecture = ({ name, mood, description, teacher_id }) => dispatch => {
  return axios.post('/api/lectures', { name, mood, description, teacher_id })
  .then(lecture => {
    dispatch(setLecture(lecture.data))
  })
}

export const updateLecture = ({ name, mood, description, teacher_id, lecture_id }) => dispatch => {
  axios.put(`/api/lectures/${lecture_id}`, { name, mood, description, teacher_id })
  .then(lecture => {
    dispatch(setLecture(lecture.data))
  })
}

export const deleteLecture = ({ lecture_id }) => dispatch => {
  return axios.delete(`/api/lectures/${lecture_id}`)
  .then(() => {
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
