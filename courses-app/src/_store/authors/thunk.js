import { authorService } from '../../services/author';

import {
  saveAuthorsAction,
  addAuthorAction,
} from './actions';

export const getAuthors = () => {
  return async (dispatch) => {
    authorService.getAllAuthors(
      body,
      (response,) => {
        dispatch(saveAuthorsAction(response.result));
      },
      (response, error) => {
        console.log('Get all authors error: ' + (error || response));
      }
    );
  }
};

export const addAuthor = (body) => {
  return async (dispatch) => {
    authorService.addAuthor(
      body,
      (response,) => {
        dispatch(addAuthorAction(body));
      },
      (response, error) => {
        console.log('Add author error: ' + (error || response));
      }
    );
  }
};
