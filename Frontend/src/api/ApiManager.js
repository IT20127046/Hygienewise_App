import axios from 'axios';

const ApiManager = axios.create({
    baseURL: 'http://172.18.12.241:5000',
    responseType: 'json',
    withCredentials: true
})

export default ApiManager;
