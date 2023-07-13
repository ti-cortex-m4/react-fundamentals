import { getUserFromLocalStorage } from '../../helpers/localStorage';
import { SERVER_URL_BASE } from "../../constants";
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

  try {
    const promise = await fetch(SERVER_URL_BASE + url, {
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
