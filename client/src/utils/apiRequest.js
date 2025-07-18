import axios from 'axios';

const api = axios.create({
    // baseURL:"http://localhost:5000/api",
    baseURL: "https://204e23de8c82.ngrok-free.app/api",
     withCredentials: true,               
     headers: {
    'Content-Type': 'application/json',
  },
})

export default api;