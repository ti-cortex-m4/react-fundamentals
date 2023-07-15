import { fetchData } from '../helpers/fetchData';
import { BACKEND_PATHS } from '../constants';

export const registerUser = async (body, onSuccess, onError) => {
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

export const loginUser = async (body, onSuccess, onError) => {
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

export const getCurrentUser = async (onSuccess, onError) => {
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
