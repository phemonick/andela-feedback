import axios from 'axios';
import host from './host';

const instance = axios.create({
  baseURL: host,
  headers: {"Access-Control-Allow-Origin": "*"}
});

// instance.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencoded';

export default instance;
