import { fetchData } from '../helpers/fetchData';
import { BACKEND_PATHS } from '../constants';

export const registerUser = async (formData, onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'POST',
    url: BACKEND_PATHS.registerUser,
    body: formData,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};

export const loginUser = async (formData, onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'POST',
    url: BACKEND_PATHS.loginUser,
    body: formData,
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
    url: BACKEND_PATHS.getCurrentUser,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};
