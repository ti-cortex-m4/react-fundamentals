import apiService from '../services';
import {
  saveUserAction,
  logoutUserAction,
  loginUserAction,
  setLoginErrorAction,
  registrationErrorAction,
  successfullRegistrationAction,
} from './actions';
import getUserFromLocalStorage from '../../helpers/getUserFromLocalStorage';

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await apiService.login(email, password);
    const data = await response.json();

    console.log(data);

    if (data.successful) {
      localStorage.setItem(
        'user',
        JSON.stringify({
          token: data.result.split(' ')[1],
        })
      );

      dispatch(
        loginUserAction({
          isAuth: data.successful,
          name: data.user.name,
          email: data.user.email,
          token: data.result,
        })
      );
    } else {
      dispatch(setLoginErrorAction(true));
    }
  };
};

export const register = (name, email, password) => {
  return async (dispatch) => {
    const response = await apiService.registration(name, email, password);
    const data = await response.json();

    if (data.successful) {
      dispatch(successfullRegistrationAction(true));
    } else {
      dispatch(registrationErrorAction(true));
    }
  };
};

export const getLoggedUser = () => {
  return async (dispatch) => {
    const response = await apiService.getCurrentUser();
    const data = await response.json();

    localStorage.setItem(
      'user',
      JSON.stringify({
        token: getUserFromLocalStorage('user')?.token,
        role: data.result.role,
        name: data.result.name,
      })
    );

    dispatch(
      saveUserAction({
        name: data.result?.name,
        email: data.result?.email,
        role: data.result?.role,
        token: getUserFromLocalStorage()?.token,
      })
    );
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    await apiService.logoutUser();

    dispatch(logoutUserAction());
  };
};
