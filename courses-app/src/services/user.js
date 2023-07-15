import { fetchData } from '../helpers/fetchData';
import { BACKEND_PATHS } from '../constants';

export const register = async (formData, onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'POST',
    url: BACKEND_PATHS.register,
    body: formData,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};

export const login = async (formData, onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'POST',
    url: BACKEND_PATHS.login,
    body: formData,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};

export const getUserData = async (onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'GET',
    url: BACKEND_PATHS.userData,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};
