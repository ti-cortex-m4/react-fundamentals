import {
  SAVE_USER,
  LOGIN_USER,
  LOGOUT_USER,
//  SET_LOGIN_ERROR,
  REGISTER_RESULT,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './types';

export const saveUserAction = (payload) => ({ type: SAVE_USER, payload });
export const loginUserAction = (payload) => ({ type: LOGIN_USER, payload });
export const logoutUserAction = () => ({ type: LOGOUT_USER });
//export const setLoginErrorAction = (payload) => ({  type: SET_LOGIN_ERROR,  payload,});
export const registerResultAction = (payload) => ({  type: REGISTER_RESULT,  payload});
export const registerSuccessAction = (payload) => ({  type: REGISTER_SUCCESS,  payload,});
export const registerErrorAction = (payload) => ({  type: REGISTER_ERROR,  payload,});
