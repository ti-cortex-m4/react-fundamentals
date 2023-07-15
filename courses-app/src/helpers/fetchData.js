import { getAuthTokenFromLocalStorage } from './localStorage';
import { BACKEND_URL } from '../constants';
//const { get } = HTTP_METHODS;

/* TODO */ export const fetchData = async config => {
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

// `${process.env.BACKEND_URL}`
  try {
    const promise = await fetch(BACKEND_URL + url, {
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
