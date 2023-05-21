import axios from "axios";

const handle = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
});

const Get = (endpoint) => {
    return handle.get(endpoint);
};

const Post = (endpoint, body) => {
    return handle.post(endpoint, body);
};

export { Get, Post };