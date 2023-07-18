import {
  SAVE_USER,
  LOGIN_USER,
  LOGOUT_USER,
//  SET_LOGIN_ERROR,
  REGISTER_RESULT,
} from './types';

export const saveUserAction = (payload) => ({ type: SAVE_USER, payload });
export const loginUserAction = (payload) => ({ type: LOGIN_USER, payload });
export const loginUserSuccessAction = (payload) => ({ type: LOGIN_USER_SUCCESS, payload });
export const loginUserErrorAction = (payload) => ({ type: LOGIN_USER_ERROR, payload });
export const getCurrentUserSuccessAction = (payload) => ({ type: GET_CURRENT_USER_SUCCESS, payload });
export const getCurrentUserErrorAction = (payload) => ({ type: GET_CURRENT_USER_ERROR, payload });
export const logoutUserAction = () => ({ type: LOGOUT_USER });
//export const setLoginErrorAction = (payload) => ({  type: SET_LOGIN_ERROR,  payload,});
export const registerUserSuccessAction = (payload) => ({  type: REGISTER_USER_SUCCESS_ACTION,  payload});
export const registerUserErrorAction = (payload) => ({  type: REGISTER_USER_ERROR_ACTION,  payload});
