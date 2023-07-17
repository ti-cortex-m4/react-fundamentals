import {
  SAVE_USER,
  LOGIN_USER,
  LOGOUT_USER,
//  SET_LOGIN_ERROR,
//  SET_REGISTRATION_ERROR,
//  REGISTRATION_SUCCESS,
} from './types';

export const saveUserAction = (payload) => ({ type: SAVE_USER, payload });
export const loginUserAction = (payload) => ({ type: LOGIN_USER, payload });
export const logoutUserAction = () => ({ type: LOGOUT_USER });
//export const setLoginErrorAction = (payload) => ({  type: SET_LOGIN_ERROR,  payload,});
//export const registrationErrorAction = (payload) => ({  type: SET_REGISTRATION_ERROR,  payload,});
//export const successfullRegistrationAction = (payload) => ({  type: REGISTRATION_SUCCESS,  payload,});
