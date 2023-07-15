import { fetchData } from '../helpers/fetchData';
import { BACKEND_PATHS } from '../constants';

export const getAllCourses = async (onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'GET',
    url: BACKEND_PATHS.getAllCourses,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};

export const saveCourse = async (body, onSuccess, onError) => {
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
