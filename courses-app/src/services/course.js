import { fetchData } from './helpers/fetchData';
import { REQUEST_PATHS } from './constants';

export const getAllCourses = async () => {
  const { response, error } = await fetchData({
    method: 'GET',
    url: REQUEST_PATHS.getAllCourses,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};
