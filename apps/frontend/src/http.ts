import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000 * 10,
});

export const http = {
  post<Request = any, Response = unknown>(url: string, data: Request) {
    return instance.post<Response>(url, data).then((res) => res.data);
  },
  get<Response = unknown>(url: string) {
    return instance.get<Response>(url).then((res) => res.data);
  },
  patch<Request = any, Response = unknown>(url: string, data: Request) {
    return instance.patch<Response>(url, data).then((res) => res.data);
  },
  delete<Response = unknown>(url: string) {
    return instance.delete<Response>(url).then((res) => res.data);
  },
};
