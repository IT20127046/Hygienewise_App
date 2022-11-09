import axios from 'axios';

const ApiManager = axios.create({
    baseURL: 'http://192.168.56.1:5000',
    responseType: 'json',
    withCredentials: true
})

export default ApiManager;
