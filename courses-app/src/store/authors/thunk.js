import authorService from '../../services/author';
import {
  saveAllAuthorsAction,
  addAuthorAction,
} from './actions';

export const getAllAuthorsThunk = () => {
  return async (dispatch) => {
    authorService.getAllAuthors(
      (response,) => {
        dispatch(saveAllAuthorsAction(response.result));
      },
      (response, error) => {
        console.log('Get all authors error: ' + JSON.stringify(error || response));
      }
    );
  }
};

export const addAuthorThunk = (body) => {
  return async (dispatch) => {
    authorService.addAuthor(
      body,
      (response,) => {
        dispatch(addAuthorAction(response.result));
      },
      (response, error) => {
        console.log('Add author error: ' + JSON.stringify(error || response));
      }
    );
  }
};
