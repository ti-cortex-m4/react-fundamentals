import { getUserFromLocalStorage } from './localStorage';
import { REQUEST_URL } from "../constants";
//const { get } = HTTP_METHODS;

export const fetchData = async config => {
  const {
    method,
    url,
    body
  } = config;

  const [authToken, userName] = getUserFromLocalStorage();

  const requestHeaders = new Headers({
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json;charset=utf-8'
  });

  let response;
  let error;

// `${process.env.REQUEST_URL}`
  try {
    const promise = await fetch(REQUEST_URL + url, {
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
