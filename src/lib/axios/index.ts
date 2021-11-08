import axiosInstance from 'axios';

const axios = axiosInstance.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
});

export default axios;
