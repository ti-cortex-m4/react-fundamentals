import { addCourse, updateCourse } from '../../services/course';

import {
  saveCoursesAction,
  addCourseAction,
  updateCourseAction,
  deleteCourseAction,
} from './actions';

export const getCourses = () => {
  return courseService.getAllCourses(
    body,
    (response, error) => {
      dispatch(saveCoursesAction(response.result));
    },
    (response, error) => {
      alert('Get all courses error: ' + (error || response));
    }
  );
};

export const addCourse = (body) => {
  return courseService.addCourse(
    body,
    (response, error) => {
      dispatch(addCourseAction(body));
    },
    (response, error) => {
      alert('Add course error: ' + (error || response));
    }
  );
};

export const updateCourse = (courseId, body) => {
  return courseService.updateCourse(
    courseId,
    body,
    (response, error) => {
      dispatch(updateCourseAction(body));
    },
    (response, error) => {
      alert('Update course error: ' + (error || response));
    }
  );
};

export const deleteCourse = (id) => {
  return courseService.deleteCourse(
    courseId,
    (response, error) => {
      dispatch(deleteCourseAction(id));
    },
    (response, error) => {
      alert('Delete course error: ' + (error || response));
    }
  );
};
