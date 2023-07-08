import { manageLocalStorage } from './manageLocalStorage';
import {
  AUTH_TOKEN_NAME,
  HTTP_METHODS,
  SERVER_URL_BASE,
} from "../constants";
const { get } = HTTP_METHODS;

export const fetchData = async config => {
  let response;
  let error;
  const {
    method = get,
    url,
    body
  } = config;

  const [token] = manageLocalStorage(AUTH_TOKEN_NAME);
  const requestHeaders = new Headers({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json;charset=utf-8'
  });

  try {
    const res = await fetch(SERVER_URL_BASE + url, {
      method,
      headers: requestHeaders,
      body: JSON.stringify(body),
    });
    response = await res.json();
  } catch (e) {
    error = true;
  }

  return { ...(response || {}), error };
};
