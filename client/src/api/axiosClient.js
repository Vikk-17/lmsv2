import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const axiosClient = axios.create({
    baseURL: BASE_URL,
    withCredentials:true,
    // headers:{
    //     // 'Content-Type':'application/json'
    //     "Content-Type": "multipart/form-data"
    // },
});


axiosClient.interceptors.request.use((config) => {
  const isFormData = config.data instanceof FormData;

  if (!isFormData) {
    config.headers['Content-Type'] = 'application/json';
  } else {
    // Let the browser set the correct multipart/form-data with boundary
    delete config.headers['Content-Type'];
  }

  return config;
});