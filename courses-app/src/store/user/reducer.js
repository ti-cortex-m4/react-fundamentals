import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './types';

export const initialUserState = {
  isAuthenticated: null,
  isAdministrator: null,
  authToken: null,
  userName: null,
  userRole: null,
  loginResult: null,
  loginError: null,
  registerResult: null,
  registerError: null,
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
        userRole: action.payload.userRole,
        isAuthenticated: true,
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
    /*
        case LOGOUT_USER: {
          return {
            ...state,
            user: {
              ...state.user,
              isAuth: false,
              name: '',
              email: '',
              token: '',
              role: '',
              loginError: null,
              registrationError: null,
              successfullLogin: false,
              successfullRegistration: false,
            },
          };
        }
    */
    default: {
      return state;
    }
  }
};

export default userReducer;
