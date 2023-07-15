import { fetchData } from '../helpers/fetchData';
import { REQUEST_PATHS } from '../constants';

export const getAllAuthors = async (onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'GET',
    url: REQUEST_PATHS.getAllAuthors,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};
