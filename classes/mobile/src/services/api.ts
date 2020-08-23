import axios from 'axios';

const api = axios.create({
    //use o ip da maquina na rede local
    baseURL: 'http://192.168.0.10:3333'
});

export default api;