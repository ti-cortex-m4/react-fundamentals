const AUTH_TOKEN = 'authToken';
const USER_NAME = 'userName';
const USER_ROLE = 'userRole';

export const getUserFromLocalStorage = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const userName = localStorage.getItem(USER_NAME);
  return [authToken, userName];
}

export const getRoleFromLocalStorage = () => {
  const userRole = localStorage.getItem(USER_ROLE);
  return [userRole];
}

export const setUserToLocalStorage = (authToken, userName) => {
  localStorage.setItem(AUTH_TOKEN, authToken);
  localStorage.setItem(USER_NAME, userName);
}

export const setRoleToLocalStorage = (userRole) => {
  localStorage.setItem(USER_ROLE, userRole);
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(USER_NAME);
  localStorage.removeItem(USER_ROLE);
}
