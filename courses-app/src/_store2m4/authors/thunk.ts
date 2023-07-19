import APIService from 'src/services/api.service';

import { selectAuthors, selectToken } from '../selectors';
import { addAuthorAction, setAuthorsAction } from './actions';

export function fetchAuthors() {
	return async (dispatch, getState) => {
		if (selectAuthors(getState()).length > 0) {
			return;
		}

		const courses = await APIService.getAuthors();
		dispatch(setAuthorsAction(courses));
	};
}

export function createAuthor(name: string) {
	return async (dispatch, getState) => {
		const token = selectToken(getState());
		const author = await APIService.createAuthor(name, token);
		dispatch(addAuthorAction(author));
	};
}
