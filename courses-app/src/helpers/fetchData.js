import { getAuthTokenFromLocalStorage } from './localStorage';

export const fetchData = async config => {
  const {
    method,
    url,
    body
  } = config;

  const authToken = getAuthTokenFromLocalStorage();

  const requestHeaders = new Headers({
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json;charset=utf-8'
  });

  let response;
  let error;

  try {
    const promise = await fetch(`${process.env.REACT_APP_BACKEND_URL}` + url, {
      method,
      headers: requestHeaders,
      body: JSON.stringify(body),
    });
    response = await promise.json();
  } catch (e) {
    error = true;
  }

  return { response, error };
};
