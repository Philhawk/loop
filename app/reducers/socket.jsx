const SET_SOCKET = 'SET_SOCKET';

export const setSocket = socket => ({ type: SET_SOCKET, socket });

export const createSocket = socket => dispatch => {
  dispatch(setSocket(socket));
};

const initialState = '';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOCKET:
      return action.socket;
    default: return state;
  }
};

export default reducer;
