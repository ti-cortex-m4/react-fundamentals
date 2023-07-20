import courseService from '../../services/course';
import {
  saveAllCoursesAction,
  addCourseAction,
  updateCourseAction,
  deleteCourseAction,
} from './actions';

export const getAllCoursesThunk = () => {
  return async (dispatch) => {
    courseService.getAllCourses(
      (response,) => {
        dispatch(saveAllCoursesAction(response.result));
      },
      (response, error) => {
        console.log('Get all courses error: ' + JSON.stringify(error || response));
      }
    );
  }
};

export const addCourseThunk = (body) => {
  return async (dispatch) => {
    courseService.addCourse(
      body,
      (response,) => {
        dispatch(addCourseAction(body));
      },
      (response, error) => {
        console.log('Add course error: ' + JSON.stringify(error || response));
      }
    );
  }
};

export const updateCourseThunk = (courseId, body) => {
  return async (dispatch) => {
    courseService.updateCourse(
      courseId,
      body,
      (response,) => {
        dispatch(updateCourseAction(body));
      },
      (response, error) => {
        console.log('Update course error: ' + JSON.stringify(error || response));
      }
    );
  }
};

export const deleteCourseThunk = (courseId) => {
  return async (dispatch) => {
    courseService.deleteCourse(
      courseId,
      (response,) => {
        dispatch(deleteCourseAction(courseId));
      },
      (response, error) => {
        console.log('Delete course error: ' + JSON.stringify(error || response));
      }
    );
  }
};
