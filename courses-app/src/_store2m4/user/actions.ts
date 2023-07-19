import IUserInfo from 'src/models/IUserInfo';

import UserActionTypes from './types';

type AddLoggedInUserAction = {
	type: UserActionTypes.ADD_LOGGED_IN_USER;
	payload: IUserInfo;
};

type RemoveUserAction = {
	type: UserActionTypes.REMOVE_USER;
};

type AddUserTokenAction = {
	type: UserActionTypes.ADD_USER_TOKEN;
	payload: string;
};

export type UserActions =
	| AddLoggedInUserAction
	| RemoveUserAction
	| AddUserTokenAction;

export const addLoggedInUserAction = (
	userInfo: IUserInfo
): AddLoggedInUserAction => ({
	type: UserActionTypes.ADD_LOGGED_IN_USER,
	payload: userInfo,
});

export const removeUserAction = (): RemoveUserAction => ({
	type: UserActionTypes.REMOVE_USER,
});

export const addUserTokenAction = (token: string): AddUserTokenAction => ({
	type: UserActionTypes.ADD_USER_TOKEN,
	payload: token,
});
