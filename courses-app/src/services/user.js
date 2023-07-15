import { fetchData } from '../helpers/fetchData';
import { REQUEST_PATHS } from '../constants';

export const register = async(formData, onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'POST',
    url: REQUEST_PATHS.register,
    body: formData,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};
