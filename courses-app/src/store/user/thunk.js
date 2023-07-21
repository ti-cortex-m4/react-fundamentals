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
          registerResult: false,
          registerError: (error || response.errors || response.result)
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
          loginResult: false,
          loginError: (error || response.errors || response.result)
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
          loginResult: false,
          loginError: (error || response.errors || response.result)
        }));
      }
    );
  }
};

export const logoutUserThunk = () => {
  return async (dispatch) => {
    userService.logoutUser(
      (response,) => {
      console.log('2');
        removeUserFromLocalStorage();

        dispatch(logoutUserSuccessAction(true));
      },
      (response, error) => {
      console.log('3');
        removeUserFromLocalStorage();

        console.log('Logout user error: ' + JSON.stringify(error));
        dispatch(logoutUserErrorAction({
          logoutResult: false,
          logoutError: (error)
        }));
      }
    );
  }
};
