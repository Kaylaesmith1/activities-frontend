import axios from 'axios';

axios.defaults.baseURL = 'https://activities-backend-api-a2cb7e703660.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();