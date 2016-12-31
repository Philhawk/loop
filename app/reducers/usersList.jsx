import axios from 'axios';

// actions
const SET_USERS = 'SET_USERS';

// sync action creator
export const setUsers = users => ({
  type: SET_USERS,
  users
});

// async action creator
export const fetchUsersByEntity = (entityId) => dispatch => {
  console.log(entityId)
  axios.get(`/api/users/entity/${entityId}`)
  .then(users => {
    dispatch(setUsers(users.data))
  })
};

// initil state
const initialState = [];

// reducer
const reducer = (state = initialState, {users, type}) => {
  switch(type) {
    case SET_USERS:
      return users;
    default:
      return state;
  }
}

export default reducer;