import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://49.234.92.131:3001'
});

export default instance;