import { IUserInfo } from 'src/models/IUserInfo';

import UserActionTypes from './types';

type UserLoggedInAction = {
	type: UserActionTypes.ADD_LOGGED_IN_USER;
	payload: IUserInfo;
};

type UserLoggedOutAction = {
	type: UserActionTypes.REMOVE_USER;
};

export type UserActions = UserLoggedInAction | UserLoggedOutAction;

export const userLoggedInAction = (
	userInfo: IUserInfo,
	token: string
): UserLoggedInAction => ({
	type: UserActionTypes.ADD_LOGGED_IN_USER,
	payload: {
		...userInfo,
		token,
	},
});

export const userLoggedOutAction = (): UserLoggedOutAction => ({
	type: UserActionTypes.REMOVE_USER,
});
