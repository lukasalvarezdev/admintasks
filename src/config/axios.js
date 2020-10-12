import axios from 'axios';

/**
 * axios.create takes a baseURL
 */
const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
});

export default AxiosClient;