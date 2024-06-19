import axios from "axios";



export const Axios = axios.create({
    // baseURL:'http://localhost:8080/',
    baseURL:'https://serchengin-server.onrender.com/',
    headers: {
        'Content-Type': 'application/json',
      },
   
})