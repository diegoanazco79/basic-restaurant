import axios from 'axios';

const apiBase = process.env.REACT_APP_API_LINK;

const defaultOptions = {
  baseURL: apiBase,
};

const api = axios.create(defaultOptions);

export default api;
