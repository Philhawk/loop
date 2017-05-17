import axios from 'axios';

// actions
const SET_ENTITIES = 'SET_ENTITIES';

// sync action creators
export const setEntities = entities => ({
  type: SET_ENTITIES,
  entities,
});

// async action creators
export const fetchEntities = () => (dispatch) => {
  axios.get('/api/entities')
    .then((entities) => {
      dispatch(setEntities(entities.data));
    });
};

// initial state
const initialState = [];

const reducer = (state = initialState, { entities, type }) => {
  switch (type) {
    case SET_ENTITIES:
      return entities;
    default:
      return state;
  }
};

export default reducer;
