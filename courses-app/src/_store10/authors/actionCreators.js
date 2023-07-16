import { AUTHORS_ADD_TO_STORE } from './actionTypes';

export const setAuthorsData = authorsData => ({
  type: AUTHORS_ADD_TO_STORE,
  payload: authorsData,
});
