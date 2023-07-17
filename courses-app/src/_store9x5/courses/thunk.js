import apiService from '../services';
import {
  saveCoursesAction,
  addCourseAction,
  deleteCourseAction,
  updateCorseAction,
} from './actions';

export const getCourses = () => {
  return async (dispatch) => {
    const response = await apiService.getAllCourses();
    const data = await response.json();

    dispatch(saveCoursesAction(data.result));
  };
};

export const addCourse = (title, description, duration, authors) => {
  return async (dispatch) => {
    const response = await apiService.addCourse(
      title,
      description,
      duration,
      authors
    );
    const data = await response.json();
    if (data.successful) {
      dispatch(
        addCourseAction({
          title,
          description,
          duration,
          authors,
        })
      );
    }
  };
};

export const updateCourse = (id, body) => {
  return async (dispatch) => {
    const response = await apiService.updateCourse(id, body);
    const data = await response.json();

    if (data.successful) {
      dispatch(updateCorseAction(data.result));
    }
  };
};

export const deleteCourse = (id) => {
  return async (dispatch) => {
    const response = await apiService.deleteCourse(id);
    if (response.status === 200) {
      dispatch(deleteCourseAction(id));
    }
  };
};
