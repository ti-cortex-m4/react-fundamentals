//import apiService from '../services';
import { userService } from '../../services/user';
import {
//  saveUserAction,
//  logoutUserAction,
//  loginUserAction,
  registerResultAction,
//  registrationErrorAction,
//  successfullRegistrationAction,
} from './actions';
//import getUserFromLocalStorage from '../../helpers/getUserFromLocalStorage';

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

export const registerUser = (body) => {
 return (dispatch) => { 
  userService.registerUser(
    body,
    (response,) => {
      dispatch(registerResultAction(true));
    },
    (response, error) => {
      console.log('Register user error: ' + (error || response));
      dispatch(registerResultAction(false));
    }
  );
 } 
};

export const getCurrentUser = () => {
 return (dispatch) => {
  userService.getCurrentUser(
    (response,) => {
      const userRole = response.result?.role;
      ///setUserRoleToLocalStorage(userRole);

      dispatch(getCurrentUserAction(userRole));
    },
    (response, error) => {
      console.log('Get current user error: ' + (error || response));
      dispatch(loginResultAction(false));
    }
  );
 }
};

export const loginUser = (body) => {
 return (dispatch) => {
  userService.loginUser(
    body,
    (response,) => {
       const authToken = response.result.split(' ')[1];
//       setAuthTokenToLocalStorage(authToken);

       const userName = response.user?.name;
//       setUserNameToLocalStorage(userName);

       dispatch(loginSuccessAction({
          authToken: authToken,
          userName: userName,
//          isAuth: data.successful,
//          name: data.user.name,
//          email: data.user.email,
//          token: data.result,
       }));
       dispatch(getCurrentUser());
    },
    (response, error) => {
      console.log('Login user error: ' + (error || response));
      dispatch(loginResultAction(false));
    }
  );
 }
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
