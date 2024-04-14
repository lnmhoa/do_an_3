import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:3001/api/',
});

const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

const post = async (path, options = {}) => {
    const response = await httpRequest.post(path, options);
    return response.data;
};

const request = {
    get,
    post,
};

export default request;
