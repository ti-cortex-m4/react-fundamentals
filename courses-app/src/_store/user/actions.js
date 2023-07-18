import {
  SAVE_USER,
  LOGIN_USER,
  LOGOUT_USER,
//  SET_LOGIN_ERROR,
  REGISTER_RESULT,
} from './types';

export const saveUserAction = (payload) => ({ type: SAVE_USER, payload });
export const loginUserAction = (payload) => ({ type: LOGIN_USER, payload });
export const loginSuccessAction = (payload) => ({ type: LOGIN_SUCCESS, payload });
export const getCurrentUserSuccessAction = (payload) => ({ type: CURRENT_USER_SUCCESS, payload });
export const logoutUserAction = () => ({ type: LOGOUT_USER });
//export const setLoginErrorAction = (payload) => ({  type: SET_LOGIN_ERROR,  payload,});
export const registerResultAction = (payload) => ({  type: REGISTER_RESULT,  payload});
