import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/users/',
});

api.interceptors.request.use(async (config) => {
  let access = localStorage.getItem('access');
  const refresh = localStorage.getItem('refresh');

  if (access) {
    const { exp } = jwtDecode(access);
    if (Date.now() >= exp * 1000 && refresh) {
      const res = await axios.post('http://127.0.0.1:8000/api/users/token/refresh/', { refresh });
      access = res.data.access;
      localStorage.setItem('access', access);
    }
    config.headers.Authorization = `Bearer ${access}`;
  }

  return config;
});

export default api;