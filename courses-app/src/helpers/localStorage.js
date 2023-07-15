const AUTH_TOKEN = 'authToken';
const USER_NAME = 'userName';
const USER_ROLE = 'userRole';

export const getAuthTokenFromLocalStorage = () => {
  return localStorage.getItem(AUTH_TOKEN);
}

export const getUserNameFromLocalStorage = () => {
  return localStorage.getItem(USER_NAME);
}

export const getUserRoleFromLocalStorage = () => {
  return localStorage.getItem(USER_ROLE);
}

export const setAuthTokenToLocalStorage = (authToken) => {
  localStorage.setItem(AUTH_TOKEN, authToken);
}

export const setUserNameToLocalStorage = (userName) => {
  localStorage.setItem(USER_NAME, userName);
}

export const setUserRoleToLocalStorage = (userRole) => {
  localStorage.setItem(USER_ROLE, userRole);
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(USER_NAME);
  localStorage.removeItem(USER_ROLE);
}
