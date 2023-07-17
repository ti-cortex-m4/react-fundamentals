import { SAVE_AUTHORS, ADD_AUTHOR } from './types';

export const saveAllAuthorsAction = (payload) => ({ type: SAVE_ALL_AUTHORS, payload });
export const addAuthorAction = (payload) => ({ type: ADD_AUTHOR, payload });
