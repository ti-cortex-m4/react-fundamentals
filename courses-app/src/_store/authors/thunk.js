import { addAuthor, updateAuthor } from '../../services/author';

import {
  saveAuthorsAction,
  addAuthorAction,
} from './actions';

export const getAuthors = () => {
  return authorService.getAllAuthors(
    body,
    (response,) => {
      dispatch(saveAuthorsAction(response.result));
    },
    (response, error) => {
      alert('Get all authors error: ' + (error || response));
    }
  );
};

export const addAuthor = (body) => {
  return authorService.addAuthor(
    body,
    (response,) => {
      dispatch(addAuthorAction(body));
    },
    (response, error) => {
      alert('Add author error: ' + (error || response));
    }
  );
};
