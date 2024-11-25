import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: ' http://localhost:3000/todo', // 기본 URL 
});


export default axiosInstance;
