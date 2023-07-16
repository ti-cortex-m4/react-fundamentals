import { SAVE_USER, LOGOUT_USER } from './types';

export const initialUserState = {
  user: {
    isAuth: false,
    name: '',
    email: '',
    token: '',
  },
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case SAVE_USER: {
      return {
        user: {
          isAuth: true,
          name: action.payload.name,
          email: action.payload.email,
          token: action.payload.token,
        },
      };
    }
    case LOGOUT_USER: {
      return {
        user: {
          isAuth: false,
          name: '',
          email: '',
          token: '',
        },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
