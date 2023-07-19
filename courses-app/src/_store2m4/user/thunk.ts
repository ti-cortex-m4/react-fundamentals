import IUserInfo from 'src/models/IUserInfo';
import APIService from 'src/services/api.service';
import LocalStorageService from 'src/services/local-storage.service';

import { selectToken } from '../selectors';
import {
	addLoggedInUserAction,
	addUserTokenAction,
	removeUserAction,
} from './actions';

export function fetchUser() {
	return async (dispatch, getState) => {
		const token = selectToken(getState());
		const user = await APIService.getUser(token);

		dispatch(addLoggedInUserAction(user));
	};
}

export function loginUser(userInfo: Pick<IUserInfo, 'email' | 'password'>) {
	return async (dispatch) => {
		const { token } = await APIService.loginUser(userInfo);
		LocalStorageService.setToken(token);

		dispatch(addUserTokenAction(token));
	};
}

export function logoutUser() {
	return async (dispatch, getState) => {
		const token = selectToken(getState());
		await APIService.logout(token);
		LocalStorageService.clearToken();

		dispatch(removeUserAction());
	};
}
