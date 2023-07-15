import { fetchData } from '../helpers/fetchData';
import { BACKEND_PATHS } from '../constants';

export const getAllCourses = async (onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'GET',
    url: '/courses/all',
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};

export const addCourse = async (body, onSuccess, onError) => {
  const { response, error } = await fetchData({
      method: 'POST',
      url: '/courses/add',
      body: body,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};

export const updateCourse = async (courseId, body, onSuccess, onError) => {
  const { response, error } = await fetchData({
      method: 'PUT',
      url: '/courses/' + courseId,
      body: body,
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
