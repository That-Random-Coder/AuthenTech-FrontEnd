// src/api/axiosInstance.js
import axios from 'axios';

// Base URL for your backend
const BASE = import.meta.env.VITE_API_URL || 'http://localhost:1567';

// Create Axios instance
const api = axios.create({
  baseURL: `${BASE}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, // ❌ no cookies for now, matches fetch version
});

// Attach token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => Promise.reject(err)
);

// Handle 401 errors globally
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
