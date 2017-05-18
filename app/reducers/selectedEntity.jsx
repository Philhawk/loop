import axios from 'axios';

// constants
const SET_ENTITY = 'SET_ENTITY';

// sync action creators
export const setEntity = entity => ({ type: SET_ENTITY, entity });

// async action creators
export const fetchEntity = entityId => (dispatch) => {
  console.log('ID IN SELECTED ENTITY REDUCER', entityId);
  axios.get(`/api/entities/${entityId}`)
  .then((entity) => {
    dispatch(setEntity(entity.data));
  });
};

const initialState = {};

const reducer = (state = initialState, { entity, type }) => {
  switch (type) {
    case SET_ENTITY:
      return entity;
    default:
      return state;
  }
};

export default reducer;
