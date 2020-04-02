import axios from 'axios';

export const apiCall = (url, data, headers, method) => axios({
  method,
  url,
  data,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});
