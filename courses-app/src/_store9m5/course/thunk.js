import apiService from '../services';
import { getCourseAction } from './actions';

export const getCourse = (id) => {
  return async (dispatch) => {
    const response = await apiService.getCourseById(id);
    const data = await response.json();

    console.log(data.result);

    dispatch(
      getCourseAction({
        id: data.result.id,
        title: data.result.title,
        description: data.result.description,
        creationDate: data.result.creationDate,
        duration: data.result.duration,
        authors: data.result.authors,
      })
    );
  };
};
