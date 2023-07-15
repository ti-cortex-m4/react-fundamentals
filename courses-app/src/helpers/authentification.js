import { getUserRoleFromLocalStorage } from './localStorage';

export const isAdministrator = () => {
  return 'admin' === getUserRoleFromLocalStorage();
}
