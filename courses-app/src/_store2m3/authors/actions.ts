import IAuthorItem from 'src/models/IAuthorItem';

import AuthorsActionTypes from './types';

type SetAuthorsAction = {
	type: AuthorsActionTypes.SET_AUTHORS;
	payload: IAuthorItem[];
};

type AddAuthorAction = {
	type: AuthorsActionTypes.ADD_AUTHOR;
	payload: IAuthorItem;
};

export type AuthorsActions = SetAuthorsAction | AddAuthorAction;

export const addAuthorAction = (author: IAuthorItem): AddAuthorAction => ({
	type: AuthorsActionTypes.ADD_AUTHOR,
	payload: author,
});

export const setAuthorsAction = (authors: IAuthorItem[]): SetAuthorsAction => ({
	type: AuthorsActionTypes.SET_AUTHORS,
	payload: authors,
});
