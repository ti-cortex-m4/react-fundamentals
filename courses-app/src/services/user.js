import { fetchData } from '../helpers/fetchData';
import { REQUEST_PATHS } from '../constants';
//import { loginUserAction } from '../store/user/actionCreators';

///* TODO */ export const fetchUserData = async dispatch => {
//  const { successful, result, error } = await fetchData({
//    url: REQUEST_PATHS.userData,
//  });
//
//  if (!error && response.successful) {
//    const { name, email } = result;
//    const userData = {
//      name,
//      email,
//      token: getAuthTokenFromLocalStorage(),
//    };
//    dispatch(loginUserAction(userData));
//  }
//};

///* TODO */ export const loginUser = async (dispatch, loginData) => {
//  const fetchConfig = {
//    url: REQUEST_PATHS.login,
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
