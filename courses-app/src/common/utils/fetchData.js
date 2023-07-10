import { getUserFromLocalStorage } from '../../helpers/localStorage';
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

  const [authToken, userName] = getUserFromLocalStorage();

  console.log('user ' + authToken + ' ' + userName);

  const requestHeaders = new Headers({
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json;charset=utf-8'
  });

  console.log('url ' + url);

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

  console.log("response " + JSON.stringify(response));

  return { ...(response || {}), error };
};
