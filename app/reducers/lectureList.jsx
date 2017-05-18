import axios from 'axios';

// constants
const SET_LECTURES = 'SET_LECTURES';

// sync action creators
export const setLectures = lectureList => ({ type: SET_LECTURES, lectureList });

// async action creators
export const fetchLecturesByTeacher = ({ id }) => (dispatch) => {
  axios.get(`/api/lectures/teacher/${id}`)
  .then((lectureList) => {
    dispatch(setLectures(lectureList.data));
  });
};

export const fetchAllLectures = () => (dispatch) => {
  axios.get('/api/lectures')
  .then((lectureList) => {
    dispatch(setLectures(lectureList.data));
  });
};

const initialState = [];

const reducer = (state = initialState, { lectureList, type }) => {
  switch (type) {
    case SET_LECTURES:
      return lectureList;
    default:
      return state;
  }
};

export default reducer;
