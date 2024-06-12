import axios from "axios";

export const dfHttp = axios.create({
  baseURL: import.meta.env.VITE_URL_DEFAULT,
});
