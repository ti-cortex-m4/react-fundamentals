import { fetchData } from '../helpers/fetchData';
import { BACKEND_PATHS } from '../constants';

class AuthorService {

  getAllAuthors = async (onSuccess, onError) => {
    const { response, error } = await fetchData({
      method: 'GET',
      url: '/authors/all',
    });

    if (!error && response.successful) {
      onSuccess(response, error);
    } else {
      onError(response, error);
    }
  }

  addAuthor = async (name, onSuccess, onError) => {
    const { response, error } = await fetchData({
      method: 'POST',
      url: '/authors/add',
      body: { name },
    });

    if (!error && response.successful) {
      onSuccess(response, error);
    } else {
      onError(response, error);
    }
  }
}

const authorService = new AuthorService();

export default authorService;
