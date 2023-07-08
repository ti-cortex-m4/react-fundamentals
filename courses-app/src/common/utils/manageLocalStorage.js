export const manageLocalStorage = (...props) => {
  const [key, value] = props;
  let localStorageValue = value;

  if (key && value) {
    localStorage.setItem(key, value);
  }

  if (key) {
    localStorageValue = localStorage.getItem(key);
  }

  const removeItem = () => {
    localStorage.removeItem(key);
  };

  return [localStorageValue, removeItem];
};
