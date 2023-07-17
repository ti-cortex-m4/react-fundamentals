//import apiService from '../services';
import { addCourse, updateCourse } from '../../services/course';

import {
  saveCoursesAction,
  addCourseAction,
  updateCourseAction,
  deleteCourseAction,
} from './actions';

export const getCourses = () => {
  return async (dispatch) => {
    const response = await apiService.getAllCourses();
    const data = await response.json();

    dispatch(saveCoursesAction(data.result));
  };
};

export const addCourse = (body) => {
  return courseService.addCourse(
        body,
         (response, error) => {
           dispatch(addCourseAction(body));
         },
         (response, error) => {
           alert('Add course error: ' + (error ||response));
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
           alert('Update course error: ' + (error ||response));
         }
  );
};

export const deleteCourse = (id) => {
  return   courseService.deleteCourse(
       courseId,
       (response, error) => {
         dispatch(deleteCourseAction(id));
       },
       (response, error) => {
           alert('Delete course error: ' + (error ||response));
       }
     );
};
