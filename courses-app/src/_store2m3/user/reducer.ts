import LocalStorageService from 'src/services/local-storage.service';

import UserActionTypes from './types';

import { UserActions } from './actions';

const user = LocalStorageService.getUser();

const unauthenticatedState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userInitialState = user
	? {
			isAuth: true,
			name: user.name,
			email: user.email,
			token: user.token,
	  }
	: unauthenticatedState;

export default function userReducer(
	state = userInitialState,
	action: UserActions
) {
	switch (action.type) {
		case UserActionTypes.ADD_LOGGED_IN_USER:
			return {
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
			};
		case UserActionTypes.REMOVE_USER:
			return unauthenticatedState;
		default:
			return state;
	}
}
