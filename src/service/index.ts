// src/api/axiosInstance.ts
import axios from 'axios';
// import { BASE_URL } from './config/index';

const axiosInstance: any = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: any) => {
    // 在发送请求之前做些什么，比如添加授权信息
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: any) => {
    // 对响应数据做些什么
    return response;
  },
  (error: any) => {
    // 对响应错误做些什么
    if (error.response && error.response.status === 401) {
      // 处理未授权错误
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
