import { fetchData } from '../helpers/fetchData';
import { BACKEND_PATHS } from '../constants';

export const register = async(formData, onSuccess, onError) => {
  const { response, error } = await fetchData({
    method: 'POST',
    url: BACKEND_PATHS.register,
    body: formData,
  });

  if (!error && response.successful) {
    onSuccess(response, error);
  } else {
    onError(response, error);
  }
};

    const login = async (formData) => {
      const { response, error } = await fetchData({
        url: BACKEND_PATHS.login,
        method: 'POST',
        body: formData,
      });

      if (!error && response.successful) {
        const authToken = response.result.split(' ')[1];
        setAuthTokenToLocalStorage(authToken);
        const userName = response.user?.name;
        setUserNameToLocalStorage(userName);

        setFormData(initialFormData);
        setIsLogged(true);

        setFormValid(true);

        getUserData();
      } else {
        setFormValid(false);
        alert('Login failed: ' + response.result);
      }
    };

    const getUserData = async () => {
      const { response, error } = await fetchData({
        url: BACKEND_PATHS.userData,
        method: 'GET',
      });

      if (!error && response.successful) {
        const userRole = response.result?.role;
        setUserRoleToLocalStorage(userRole);

        navigate(FRONTEND_PATHS.courses);
      } else {
        setFormValid(false);
        alert('Reading user data failed: ' + response.result);
      }
    };
