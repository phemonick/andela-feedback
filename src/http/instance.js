import axios from 'axios';
import host from './host';

const instance = axios.create({
  baseURL: host,
  headers: {"Access-Control-Allow-Origin": "*"}
});

export default instance;
