import courseService from '../../services/course';
import {
  saveAllCoursesAction,
  addCourseAction,
  updateCourseAction,
  deleteCourseAction,
} from './actions';

export const getAllCourses = () => {
  return async (dispatch) => {
    courseService.getAllCourses(
      (response,) => {
        dispatch(saveAllCoursesAction(response.result));
      },
      (response, error) => {
        console.log('Get all courses error: ' + (error || response));
      }
    );
  }
};

export const addCourse = (body) => {
  return async (dispatch) => {
    courseService.addCourse(
      body,
      (response,) => {
        dispatch(addCourseAction(body));
      },
      (response, error) => {
        console.log('Add course error: ' + (error || response));
      }
    );
  }
};

export const updateCourse = (courseId, body) => {
  return async (dispatch) => {
    courseService.updateCourse(
      courseId,
      body,
      (response,) => {
        dispatch(updateCourseAction(body));
      },
      (response, error) => {
        console.log('Update course error: ' + (error || response));
      }
    );
  }
};

export const deleteCourse = (courseId) => {
  return async (dispatch) => {
    courseService.deleteCourse(
      courseId,
      (response,) => {
        dispatch(deleteCourseAction(courseId));
      },
      (response, error) => {
        console.log('Delete course error: ' + (error || response));
      }
    );
  }
};
