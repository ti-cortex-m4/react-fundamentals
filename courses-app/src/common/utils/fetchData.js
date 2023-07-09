import { getAuthTokenFromLocalStorage } from '../../helpers/localStorage';
import {
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

//  const [token] = getAuthTokenFromLocalStorage();
  const token = getAuthTokenFromLocalStorage();
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
