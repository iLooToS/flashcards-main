import axios from 'axios';

const request = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

let accessToken = '';

export function setAccessToken(newToken) {
  accessToken = newToken;
}

export default request;
