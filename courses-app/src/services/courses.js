import { fetchData } from '../common/utils/fetchData';
import { APP_REQUEST_PATHS } from '../common/constants';
import { setCoursesData } from '../store/courses/actionCreators';

export const fetchCoursesData = async dispatch => {
  const { successful, result, error } = await fetchData({
    url: APP_REQUEST_PATHS.coursesAll,
  });

  if (!error && successful) {
    dispatch(setCoursesData(result));
  }
};
