import { fetchData } from '../common/utils/fetchData';
import { APP_REQUEST_PATHS, HTTP_METHODS } from '../common/constants';
//import { loginUserAction } from '../store/user/actionCreators';

//export const fetchUserData = async dispatch => {
//  const { successful, result, error } = await fetchData({
//    url: APP_REQUEST_PATHS.userData,
//  });
//
//  if (!error && successful) {
//    const { name, email } = result;
//    const userData = {
//      name,
//      email,
//      token: getAuthTokenFromLocalStorage(),
//    };
//    dispatch(loginUserAction(userData));
//  }
//};

//export const loginUser = async (dispatch, loginData) => {
//  const fetchConfig = {
//    url: APP_REQUEST_PATHS.login,
//    method: 'POST',
//    body: loginData,
//  };
//  const { successful, result, error } = await fetchData(fetchConfig);
//
//  if ( !error && successful ) {
//    const authToken = result.split(' ')[1];
//    setAuthTokenToLocalStorage(authToken);
//    await fetchUserData(dispatch);
//  }
//}
