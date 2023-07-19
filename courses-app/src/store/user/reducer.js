import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './types';

export const initialUserState = {
    isAuthenticated: null,
    isAdministrator: null,
//    email: null,
    authToken: null,
    userName: null,
    userRole: null,
//    role: null,
    loginResult: null,
    registerResult: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
/*
    case SAVE_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          isAuth: true,
          name: action.payload.name,
          email: action.payload.email,
          token: action.payload.token,
          role: action.payload.role,
        },
      };
    }

    case LOGIN_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          isAuth: action.payload.isAuth,
          name: action.payload.name,
          email: action.payload.email,
          token: action.payload.token,
        },
      };
    }
*/
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
          loginResult: false,
      };
    }

    case GET_CURRENT_USER_SUCCESS: {
      return {
        ...state,
         userRole: action.payload.userRole,
         isAuthenticated: true,
         loginResult: true,
      };
    }

    case GET_CURRENT_USER_ERROR: {
      return {
        ...state,
         loginResult: false,
      };
    }

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
          registerResult: action.payload,
      };

    case REGISTER_USER_ERROR:
      return {
        ...state,
          registerResult: action.payload,
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
