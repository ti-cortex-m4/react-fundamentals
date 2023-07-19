import { SAVE_AUTHORS, ADD_AUTHOR } from './types';

export const initialAuthorsState = [];

const authorsReducer = (state = initialAuthorsState, action) => {
  switch (action.type) {
    case SAVE_AUTHORS: {
      return action.payload;
    }
    case ADD_AUTHOR: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default authorsReducer;
