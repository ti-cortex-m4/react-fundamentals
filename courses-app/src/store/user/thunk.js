import userService from '../../services/user';
import {
  loginUserSuccessAction,
  loginUserErrorAction,
  registerUserSuccessAction,
  registerUserErrorAction,
  getCurrentUserSuccessAction,
  getCurrentUserErrorAction,
  logoutUserSuccessAction,
  logoutUserErrorAction,
} from './actions';
import {
  setAuthTokenToLocalStorage,
  setUserNameToLocalStorage,
  setUserRoleToLocalStorage,
  removeUserFromLocalStorage
} from '../../helpers/localStorage';

export const registerUserThunk = (body) => {
  return async (dispatch) => {
    userService.registerUser(
      body,
      (response,) => {
        dispatch(registerUserSuccessAction(true));
      },
      (response, error) => {
        console.log('Register user error: ' + JSON.stringify(error || response));
        dispatch(registerUserErrorAction({
          actionResult: false,
          actionError: (error || response.errors || response.result)
        }));
      }
    );
  }
};

export const getCurrentUserThunk = () => {
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
          actionResult: false,
          actionError: (error || response.errors || response.result)
        }));
      }
    );
  }
};

export const loginUserThunk = (body) => {
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
        dispatch(getCurrentUserThunk());
      },
      (response, error) => {
        console.log('Login user error: ' + JSON.stringify(error || response));
        dispatch(loginUserErrorAction({
          actionResult: false,
          actionError: (error || response.errors || response.result)
        }));
      }
    );
  }
};

export const logoutUserThunk = () => {
  return async (dispatch) => {
    userService.logoutUser(
      (response,) => {
        dispatch(logoutUserSuccessAction());
      },
      (response, error) => {
        console.log('Logout user error: ' + JSON.stringify(error || response));
        dispatch(logoutUserErrorAction({
          logoutResult: false,
          logoutError: (error || response.errors || response.result)
        }));
      }
    );
  }
};
