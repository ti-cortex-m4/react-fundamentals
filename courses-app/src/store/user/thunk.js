import userService from '../../services/user';
import {
  loginUserSuccessAction,
  loginUserErrorAction,
  getCurrentUserSuccessAction,
  getCurrentUserErrorAction,
  registerUserSuccessAction,
  registerUserErrorAction,
} from './actions';
import {
  setAuthTokenToLocalStorage,
  setUserNameToLocalStorage,
  setUserRoleToLocalStorage
} from '../../helpers/localStorage';

export const registerUser = (body) => {
  return async (dispatch) => {
    userService.registerUser(
      body,
      (response,) => {
        dispatch(registerUserSuccessAction(true));
      },
      (response, error) => {
        console.log('Register user error: ' + JSON.stringify(error || response));
        dispatch(registerUserErrorAction(false));
      }
    );
  }
};

export const getCurrentUser = () => {
  return async (dispatch) => {
    userService.getCurrentUser(
      (response,) => {
        const userRole = response.result?.role;
        setUserRoleToLocalStorage(userRole);

        dispatch(getCurrentUserSuccessAction(userRole));
      },
      (response, error) => {
        console.log('Get current user error: ' + JSON.stringify(error || response));
        dispatch(getCurrentUserErrorAction({
          loginResult: false,
          loginError: response.result
        }));
      }
    );
  }
};

export const loginUser = (body) => {
  return async (dispatch) => {
    userService.loginUser(
      body,
      (response,) => {
        const authToken = response.result.split(' ')[1];
        setAuthTokenToLocalStorage(authToken);

        const userName = response.user?.name;
        setUserNameToLocalStorage(userName);

        dispatch(loginUserSuccessAction({
          authToken: authToken,
          userName: userName,
        }));
        dispatch(getCurrentUser());
      },
      (response, error) => {
        console.log('Login user error: ' + JSON.stringify(error || response));
        dispatch(loginUserErrorAction({
          loginResult: false,
          loginError: response.result
        }));
      }
    );
  }
};
/*
export const logoutUser = () => {
  return async (dispatch) => {
    await apiService.logoutUser();

    dispatch(logoutUserAction());
  };
};
*/