import {
  SAVE_USER,
  LOGIN_USER,
  LOGOUT_USER,
//  SET_LOGIN_ERROR,
  REGISTER_RESULT,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from './types';

export const initialUserState = {
  user: {
    isAuth: false,
    name: '',
    email: '',
    token: '',
    role: '',
    registerResult: null,
    registerSuccess: false,
    registerError: null,
    successfullLogin: false,
    loginError: null,
  },
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
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

//    case SET_LOGIN_ERROR: {
//      return {
//        ...state,
//        user: {
//          ...state.user,
//          loginError: action.payload,
//        },
//      };
//    }

    case REGISTER_RESULT:
      return {
        ...state,
        user: {
          ...state.user,
          registerResult: action.payload,
        },
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          registerSuccess: action.payload,
        },
      };

    case REGISTER_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          REGISTER_ERROR: action.payload,
        },
      };

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
    default:
      return state;
  }
};

export default userReducer;
