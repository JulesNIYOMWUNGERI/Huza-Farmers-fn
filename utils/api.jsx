import axios from 'axios';

const api = axios.create({
  baseURL: 'https://huza-farmers-bn.onrender.com/api',
});

api.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem('token'),
    )}`;
  }
  return req;
});

export default api;