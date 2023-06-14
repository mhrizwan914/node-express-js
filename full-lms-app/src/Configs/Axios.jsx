import axios from "axios";

let apiHandle = axios.create({
    baseURL: "http://localhost:3001/",
});

let Get = (endPoint) => {
    return apiHandle.get(endPoint);
};
let GetById = (endPoint, id) => {
    return apiHandle.get(`${endPoint}/${id}`);
};
let Create = (endPoint, body) => {
    return apiHandle.post(`${endPoint}`, body);
};
let Update = (endPoint, id, body) => {
    return apiHandle.put(`${endPoint}/${id}`, body);
};
let Remove = (endPoint, id) => {
    return apiHandle.delete(`${endPoint}/${id}`);
};
export { Get, GetById, Create, Update, Remove };