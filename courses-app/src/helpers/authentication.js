import { getUserRoleFromLocalStorage } from './localStorage';

export const isAuthenticated = () => {
  return getUserRoleFromLocalStorage() !== undefined;
}

export const isAdministrator = () => {
  return 'admin' === getUserRoleFromLocalStorage();
}
