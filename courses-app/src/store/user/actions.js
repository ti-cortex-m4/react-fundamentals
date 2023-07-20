import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './types';

export const loginUserSuccessAction = (payload) => ({ type: LOGIN_USER_SUCCESS, payload });
export const loginUserErrorAction = (payload) => ({ type: LOGIN_USER_ERROR, payload });
export const getCurrentUserSuccessAction = (payload) => ({ type: GET_USER_SUCCESS, payload });
export const getCurrentUserErrorAction = (payload) => ({ type: GET_USER_ERROR, payload });
//export const logoutUserAction = () => ({ type: LOGOUT_USER });
export const registerUserSuccessAction = (payload) => ({ type: REGISTER_USER_SUCCESS, payload });
export const registerUserErrorAction = (payload) => ({ type: REGISTER_USER_ERROR, payload });
