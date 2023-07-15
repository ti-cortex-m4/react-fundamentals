import { fetchData } from '../helpers/fetchData';
import { BACKEND_PATHS } from '../constants';

export const getAllAuthors = async (onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'GET',
    url: BACKEND_PATHS.getAllAuthors,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};
