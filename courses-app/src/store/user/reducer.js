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
  actionResult: null,
  actionError: null,
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
        actionResult: action.payload.actionResult,
        actionError: action.payload.actionError,
      };
    }

    case GET_USER_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        isAdministrator: 'admin' === action.payload.userRole,
        userRole: action.payload.userRole,
        actionResult: true,
        actionError: null,
      };
    }

    case GET_USER_ERROR: {
      return {
        ...state,
        actionResult: action.payload.actionResult,
        actionError: action.payload.actionError,
      };
    }

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        actionResult: action.payload,
        actionError: null
      };

    case REGISTER_USER_ERROR:
      return {
        ...state,
        actionResult: action.payload.actionResult,
        actionError: action.payload.actionError,
      };

    case LOGOUT_USER_SUCCESS:
      return initialUserState;

    case LOGOUT_USER_ERROR:
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
