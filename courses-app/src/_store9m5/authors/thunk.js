import apiService from '../services';
import { saveAuthorsAction, addAuthorAction } from './actions';

export const getAuthors = () => {
  return async (dispatch) => {
    const response = await apiService.getAllAuthors();
    const data = await response.json();

    dispatch(saveAuthorsAction(data.result));
  };
};

export const addAuthor = (name) => {
  return async (dispatch) => {
    const response = await apiService.addAuthor(name);
    const data = await response.json();
    dispatch(addAuthorAction(data.result));
  };
};
