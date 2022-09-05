import axios from "axios";

export const SoftworkHttp = axios.create({
  baseURL: process.env.REACT_APP_SOFTWORK_API,
});

export default SoftworkHttp;
