import { getUserRoleFromLocalStorage } from './localStorage';

export const isAdmin = () => {
  return 'admin' === getUserRoleFromLocalStorage();
}
