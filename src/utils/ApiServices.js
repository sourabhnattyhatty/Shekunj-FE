import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

import { checkIsSessionExpired, decodeToken } from ".";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

export const baseURL = process.env.REACT_APP_API_URL?.slice(0, 20);

const responseBody = (response) => response.data;

axios.interceptors.request.use((config) => {
  const token = Cookies.get("sheToken");
  if (token) {
    const userInfo = decodeToken(token);
    if (userInfo?.exp && checkIsSessionExpired(userInfo?.exp)) {
      Cookies.remove("userInfo");
      toast.error("Session expired!");
      window.location.href = "/login";
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    const { status } = !error.response;
    switch (status) {
      case 401:
        Cookies.remove("userInfo");
        toast.error("Unauthorized access!");
        window.location.href = "/login";
        console.log("Logout user!");
        break;
      case 403:
        console.log("You are not allowed to do that!");
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
  },
);

export const noImage =
  "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";

const requests = {
  baseURL,
  noImage,
  get: (url, params) => axios.get(url, { params }).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  patch: (url, body) => axios.patch(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
  postForm: (url, data) =>
    axios
      .post(url, data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody),
  putForm: (url, data) =>
    axios
      .put(url, data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody),
  createFormData,
};

function createFormData(item) {
  let formData = new FormData();
  for (const key in item) {
    formData.append(key, item[key]);
  }
  return formData;
}

export default requests;
