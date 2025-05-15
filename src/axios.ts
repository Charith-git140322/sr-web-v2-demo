import axios, { AxiosError, AxiosResponse } from "axios";
import { API_BASE_URL } from "./config/constants";
import { DTOAPIResponseError } from "./lib/types";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const status = error.response?.status ?? "Unknown Status";
    const message = error.message ?? "Unknown Error";
    const data = error.response?.data ?? null;

    console.error(`Error [${status}]: ${message}`);
    if (data) {
      console.error("Error Data:", data);
    }

    return Promise.reject<DTOAPIResponseError>({
      status,
      message,
      data,
    });
  },
);

export default axiosInstance;
