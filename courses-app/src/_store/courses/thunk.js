import { courseService } from '../../services/course';

import {
  saveCoursesAction,
  addCourseAction,
  updateCourseAction,
  deleteCourseAction,
} from './actions';

export const getCourses = () => {
  return (dispatch) => {
    courseService.getAllCourses(
      body,
      (response,) => {
        dispatch(saveCoursesAction(response.result));
      },
      (response, error) => {
        console.log('Get all courses error: ' + (error || response));
      }
    );
  }
};

export const addCourse = (body) => {
  return (dispatch) => {
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
  return (dispatch) => {
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

export const deleteCourse = (id) => {
  return (dispatch) => {
    courseService.deleteCourse(
      courseId,
      (response,) => {
        dispatch(deleteCourseAction(id));
      },
      (response, error) => {
        console.log('Delete course error: ' + (error || response));
      }
    );
  }
};
