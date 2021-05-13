import axios from 'axios';

const API = axios.create({ baseURL : 'http://localhost:5000'});

export const signIn = (FormData) => API.post('/user/signin', FormData);
export const signUp = (FormData) => API.post('/user/signup', FormData);