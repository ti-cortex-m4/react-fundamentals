import LocalStorageService from 'src/services/local-storage.service';

import UserActionTypes from './types';

import { UserActions } from './actions';

export const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	role: '',
	token: LocalStorageService.getToken(),
};

export default function userReducer(
	state = userInitialState,
	action: UserActions
) {
	switch (action.type) {
		case UserActionTypes.ADD_LOGGED_IN_USER:
			return {
				...action.payload,
				token: state.token,
				isAuth: true,
			};
		case UserActionTypes.REMOVE_USER:
			return {
				...userInitialState,
				token: '',
			};
		case UserActionTypes.ADD_USER_TOKEN:
			return {
				...state,
				token: action.payload,
			};
		default:
			return state;
	}
}
