import {
  SAVE_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './types';

export const initialUserState = {
  user: {
    isAuthenticated: false,
    userName: null,
    email: null,
    authToken: null,
    role: null,
    registerResult: null,
    loginError: null,
  },
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
        user: {
          ...state.user,
          authToken: authToken,
          userName: userName,
        },
      };
    }

    case LOGIN_USER_ERROR: {
      return {
        ...state,
        user: {
          ...state.user,
          loginResult: false,
        },
      };
    }

    case GET_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
         userRole: userRole,
         isAuthenticated: true,
         loginResult: true,
        },
      };
    }

    case GET_CURRENT_USER_ERROR: {
      return {
        ...state,
        user: {
          ...state.user,
         loginResult: false,
        },
      };
    }

//    case SET_LOGIN_ERROR: {
//      return {
//        ...state,
//        user: {
//          ...state.user,
//          loginError: action.payload,
//        },
//      };
//    }

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          registerResult: action.payload,
        },
      };

    case REGISTER_USER_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          registerResult: action.payload,
        },
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
    default:
      return state;
  }
};

export default userReducer;
