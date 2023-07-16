import { fetchData } from '../common/utils/fetchData';
import { APP_REQUEST_PATHS, AUTH_TOKEN_NAME, HTTP_METHODS } from '../common/constants';
import { manageLocalStorage } from '../common/utils/manageLocalStorage';
import { loginUserAction } from '../store/user/actionCreators';

export const fetchUserData = async dispatch => {
  const { successful, result, error } = await fetchData({
    url: APP_REQUEST_PATHS.userData,
  });

  if (!error && successful) {
    const { name, email } = result;
    const userData = {
      name,
      email,
      token: manageLocalStorage(AUTH_TOKEN_NAME),
    };
    dispatch(loginUserAction(userData));
  }
};

export const loginUser = async (dispatch, loginData) => {
  const fetchConfig = {
    url: APP_REQUEST_PATHS.login,
    method: HTTP_METHODS.post,
    body: loginData,
  };
  const { successful, result, error } = await fetchData(fetchConfig);

  if ( !error && successful ) {
    const authToken = result.split(' ')[1];
    manageLocalStorage(AUTH_TOKEN_NAME, authToken);
    await fetchUserData(dispatch);
  }
}
