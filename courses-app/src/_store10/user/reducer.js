import * as types from './actionTypes';
import { manageLocalStorage } from '../../common/utils/manageLocalStorage';
import { AUTH_TOKEN_NAME } from '../../common/constants';

const userInitialState = {
  isAuth: false,
  name: '',
  email: '',
  token: manageLocalStorage(AUTH_TOKEN_NAME)[0] || '',
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        isAuth: true,
        ...action.payload,
      };
    case types.USER_LOGOUT:
      return userInitialState;
    default:
      return state;
  }
};

export default userReducer;
