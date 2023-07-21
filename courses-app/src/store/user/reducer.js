import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
} from './types';

export const initialUserState = {
  isAuthenticated: null,
  isAdministrator: null,
  authToken: null,
  userName: null,
  userRole: null,
  registerResult: null,
  registerError: null,
  loginResult: null,
  loginError: null,
  logoutResult: null,
  logoutError: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {

    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        authToken: action.payload.authToken,
        userName: action.payload.userName,
      };
    }

    case LOGIN_USER_ERROR: {
      return {
        ...state,
        loginResult: action.payload.loginResult,
        loginError: action.payload.loginError,
      };
    }

    case GET_USER_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        isAdministrator: 'admin' === action.payload.userRole,
        userRole: action.payload.userRole,
        loginResult: true,
        loginError: null,
      };
    }

    case GET_USER_ERROR: {
      return {
        ...state,
        loginResult: action.payload.loginResult,
        loginError: action.payload.loginError,
      };
    }

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerResult: action.payload,
        registerError: null
      };

    case REGISTER_USER_ERROR:
      return {
        ...state,
        registerResult: action.payload.registerResult,
        registerError: action.payload.registerError,
      };

    case LOGOUT_USER_SUCCESS:
    console.log('4');
      return {
  isAuthenticated: null,
  isAdministrator: null,
  authToken: null,
  userName: null,
  userRole: null,
  registerResult: null,
  registerError: null,
  loginResult: null,
  loginError: null,
        logoutResult: action.payload,
        logoutError: null
      }

    case LOGOUT_USER_ERROR:
    console.log('5');
      return {
        ...state,
        logoutResult: action.payload.logoutResult,
        logoutError: action.payload.logoutError,
      };

    default:
      return state;
  }
};

export default userReducer;
