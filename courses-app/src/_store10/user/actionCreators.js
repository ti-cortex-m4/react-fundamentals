import { USER_LOGIN, USER_LOGOUT } from './actionTypes';

export const loginUserAction = userData => ({
  type: USER_LOGIN,
  payload: userData,
});

export const logoutUserAction = () => ({
  type: USER_LOGOUT,
});
