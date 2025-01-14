import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true, // Enable cookies for all requests
});

export default axiosInstance;
