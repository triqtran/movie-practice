import { API_KEY } from "../utils/Constant";
import { isEmpty, keys } from "lodash";

const handle = async (method, url, body) => {
  try {
    url += `?api_key=${API_KEY}`;
    if (method === 'GET' && !isEmpty(body)) {
      let parameter = '';
      const KEYS = keys(body);
      KEYS.forEach((param) => {
        const value = body[param]
        if(value !== undefined && value !== null) {
          parameter += '&' + param + '=' + body[param]
        }
      })
      url += parameter
    }

    const headers = {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json"
      //add more optional
    }

    return fetch(url, {
      method,
      headers,
      body: method !== 'GET'  ? JSON.stringify(body) : null,
    }).then(res => {
      if(res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then(data => {
      return data;
    })

  } catch (error) {
    throw new Error(error);
  }
}

export default class Restful {

  static get(url, parameters) {
    return handle('GET', url, parameters);
  }

  static post(url, body) {
    return handle('POST', url, body);
  }

  static put(url, body) {
    return handle('PUT', url, body);
  }

}