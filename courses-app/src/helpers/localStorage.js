const AUTH_TOKEN = 'authToken';
const USER_NAME = 'userName';

export const getUserFromLocalStorage = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const userName = localStorage.getItem(USER_NAME);
  return [authToken, userName];
}

export const setAuthTokenToLocalStorage = (authToken) => {
  return localStorage.setItem(AUTH_TOKEN, authToken);
}

export const setUserNameToLocalStorage = (userName) => {
  return localStorage.setItem(USER_NAME, userName);
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(USER_NAME);
}
