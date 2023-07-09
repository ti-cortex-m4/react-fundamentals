const AUTH_TOKEN = 'authToken';
const USER_NAME = 'userName';

export const getAuthTokenFromLocalStorage = () => {
  return localStorage.getItem(AUTH_TOKEN);
}

export const getUserNameFromLocalStorage = () => {
  return localStorage.getItem(USER_NAME);
}

export const setAuthTokenToLocalStorage = (authToken) => {
  return localStorage.setItem(AUTH_TOKEN, authToken);
}

export const setUserNameToLocalStorage = (userName) => {
  return localStorage.setItem(USER_NAME, userName);
}

export const removeAuthTokenFromLocalStorage = () => {
  localStorage.removeItem(AUTH_TOKEN);
}

export const removeUserNameFromLocalStorage = () => {
  localStorage.removeItem(USER_NAME);
}
