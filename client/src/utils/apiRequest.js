import axios from 'axios';

const api = axios.create({
    baseURL:"http://localhost:5000/api",
    // baseURL:"https://mernify-xk7x.onrender.com/api",
    // baseURL: "https://960abb00815d.ngrok-free.app/api",
     withCredentials: true,               
     headers: {
    'Content-Type': 'application/json',
  },
})

export default api;