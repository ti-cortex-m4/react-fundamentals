import authorService from '../../services/author';
import {
  saveAllAuthorsAction,
  addAuthorAction,
} from './actions';

export const getAllAuthors = () => {
  return async (dispatch) => {
    authorService.getAllAuthors(
      (response,) => {
        dispatch(saveAllAuthorsAction(response.result));
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
