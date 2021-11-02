import axios from "axios";

const environment = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (environment) {
      config.url = `${environment}${config.url}`;
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(undefined, (error) => {
  throw error.response;
});

export const Post = async (url, values) => {
  return axios.post(`${url}`, values);
};

export const Put = async (url, value) => {
  return axios.put(`${url}`, value);
};

export const Get = async (url) => {
  return axios.get(`${url}`);
};

export const Delete = async (url) => {
  return axios.delete(`${url}`);
};
