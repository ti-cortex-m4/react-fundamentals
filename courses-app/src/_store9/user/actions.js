import { SAVE_USER, LOGOUT_USER } from './types';

export const saveUserAction = (payload) => ({ type: SAVE_USER, payload });
export const logoutUserAction = () => ({ type: LOGOUT_USER });
