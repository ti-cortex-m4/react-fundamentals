import { fetchData } from '../helpers/fetchData';
import { BACKEND_PATHS } from '../constants';

class UserService {

registerUser = async (body, onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'POST',
    url: '/register',
    body: body,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};

loginUser = async (body, onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'POST',
    url: '/login',
    body: body,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};

logoutUser = async (body, onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'DELETE',
    url: '/logout'
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};

getCurrentUser = async (onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'GET',
    url: '/users/me',
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};
}

const userService = new UserService();

export default userService;
