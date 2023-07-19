import {
  SAVE_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './types';

export const saveUserAction = (payload) => ({ type: SAVE_USER, payload });
export const loginUserAction = (payload) => ({ type: LOGIN_USER, payload });
export const loginUserSuccessAction = (payload) => ({ type: LOGIN_USER_SUCCESS, payload });
export const loginUserErrorAction = (payload) => ({ type: LOGIN_USER_ERROR, payload });
export const getCurrentUserSuccessAction = (payload) => ({ type: GET_CURRENT_USER_SUCCESS, payload });
export const getCurrentUserErrorAction = (payload) => ({ type: GET_CURRENT_USER_ERROR, payload });
export const logoutUserAction = () => ({ type: LOGOUT_USER });
//export const setLoginErrorAction = (payload) => ({  type: SET_LOGIN_ERROR,  payload,});
export const registerUserSuccessAction = (payload) => ({  type: REGISTER_USER_SUCCESS,  payload});
export const registerUserErrorAction = (payload) => ({  type: REGISTER_USER_ERROR,  payload});
