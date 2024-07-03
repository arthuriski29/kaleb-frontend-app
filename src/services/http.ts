import axios from 'axios';
import type { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

interface HttpFallback {
  (message: string): void;
}

const http = (token: string | null, fallback: HttpFallback): AxiosInstance => {
  const headers: Record<string, string> = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const instance = axios.create({
    headers,
    baseURL: 'http://localhost:3000' || import.meta.env.BACKEND_URL ,
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response && error.response.status === 401) {
        const errorMessage = (error.response.data as { message: string }).message;
        return Promise.reject(fallback(errorMessage));
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default http;