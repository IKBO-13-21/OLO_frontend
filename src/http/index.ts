import axios, { InternalAxiosRequestConfig } from "axios";

export const API_URL = "http://olo.testerdev.ru";

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    config.headers.Authorization = `${localStorage.getItem("token")}`;
    return config;
  },
);

export default $api;
