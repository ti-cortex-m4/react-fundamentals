import { fetchData } from '../helpers/fetchData';
import { REQUEST_PATHS } from '../constants';

export const getAllCourses = async (onSuccess, onError) => {
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

export const deleteCourse = async (courseId, onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'DELETE',
    url: '/courses/' + courseId,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};
