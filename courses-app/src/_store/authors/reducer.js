import * as types from './actionTypes';

const authorsInitialState = {
  authors: [],
};

const authorsReducer = (state = authorsInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.AUTHORS_ADD_TO_STORE:
      return {
        authors: payload,
      };
    case types.AUTHORS_CREATE:
      return {
        authors: [...state.courses, payload],
      };
    case types.AUTHORS_DELETE:
      return {
        authors: payload,
      };
    default:
      return state;
  }
};

export default authorsReducer;
