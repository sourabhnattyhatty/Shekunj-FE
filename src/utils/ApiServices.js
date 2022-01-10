import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import noImageIcon from "../assets/images/no-image.jpeg";
import i18njs from "../assets/i18n/i18n";

import { checkIsSessionExpired, decodeToken } from ".";
import { removeUnauthorizedUser } from "./utils";

const apiBaseUrl = process.env.REACT_APP_URL_API;
const currentLang = localStorage.getItem("i18nextLng");
const lang = currentLang ? currentLang?.split("-")[0] : "en";
axios.defaults.baseURL = `${apiBaseUrl}${lang}/api/`;

axios.defaults.withCredentials = true;

export const baseURL = process.env.REACT_APP_API_URL?.slice(0, 20);

export const noImage = noImageIcon;

const responseBody = (response) => response.data;

axios.interceptors.request.use((config) => {
  const token = Cookies.get("sheToken");
  if (token) {
    const userInfo = decodeToken(token);
    if (userInfo?.exp && checkIsSessionExpired(userInfo?.exp)) {
      removeUnauthorizedUser();
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const { status } = await error?.response;
    switch (status) {
      case 401:
        removeUnauthorizedUser();
        break;
      case 403:
        toast.error(i18njs.t("error.other.10"));
        break;
      default:
        break;
    }
    return Promise.reject(error?.response);
  },
);

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
