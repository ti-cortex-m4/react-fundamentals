import { SAVE_AUTHORS, ADD_AUTHOR } from './types';

export const saveAuthorsAction = (payload) => ({ type: SAVE_AUTHORS, payload });
export const addAuthorAction = (payload) => ({ type: ADD_AUTHOR, payload });
