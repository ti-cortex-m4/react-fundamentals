import { fetchData } from '../helpers/fetchData';
import { BACKEND_PATHS } from '../constants';

class CourseService {

getAllCourses = async (onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'GET',
    url: '/courses/all',
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
}

 addCourse = async (body, onSuccess, onError) => {
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
}

 updateCourse = async (courseId, body, onSuccess, onError) => {
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
}

 deleteCourse = async (courseId, onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'DELETE',
    url: '/courses/' + courseId,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
}
}

const courseService = new CourseService();

export default courseService;