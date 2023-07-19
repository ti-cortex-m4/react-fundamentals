import IAuthorItem from 'src/models/IAuthorItem';

import AuthorsActionTypes from './types';

import { AuthorsActions } from './actions';

export const authorsInitialState: IAuthorItem[] = [];

export default function authorsReducer(
	state = authorsInitialState,
	action: AuthorsActions
) {
	switch (action.type) {
		case AuthorsActionTypes.ADD_AUTHOR:
			return [...state, action.payload];
		case AuthorsActionTypes.SET_AUTHORS:
			return action.payload;
		default:
			return state;
	}
}
