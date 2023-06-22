import axios from 'axios';

axios.defaults.baseURL = 'https://activities-frontend-6f71eff2ee1a.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();