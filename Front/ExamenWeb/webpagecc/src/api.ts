import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:400', // NestJS backend URL
});

export default api;