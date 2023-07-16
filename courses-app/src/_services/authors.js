import { fetchData } from '../common/utils/fetchData';
import { APP_REQUEST_PATHS } from '../common/constants';
import { setAuthorsData } from '../store/authors/actionCreators';

export const fetchAuthorsData = async dispatch => {
  const { successful, result, error } = await fetchData({
    url: APP_REQUEST_PATHS.authorsAll,
  });

  if (!error && successful) {
    dispatch(setAuthorsData(result));
  }
};
