import {
  SAVE_USER,
  LOGOUT_USER,
  LOGIN_USER,
  SET_LOGIN_ERROR,
  SET_REGISTRATION_ERROR,
  REGISTRATION_SUCCESS,
} from './types';

export const initialUserState = {
  user: {
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

    case SET_LOGIN_ERROR: {
      return {
        ...state,
        user: {
          ...state.user,
          loginError: action.payload,
        },
      };
    }

    case REGISTRATION_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          successfullRegistration: action.payload,
        },
      };

    case SET_REGISTRATION_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          registrationError: action.payload,
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
