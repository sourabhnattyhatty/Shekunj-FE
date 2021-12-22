import Cookies from "js-cookie";

export const toasterConfig = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
};

export const transformError = (error) => {
  const err = {
    statusCode: 500,
    message: "Something went wrong",
    data: {},
  };
  if (error && error.data && error.data.statusCode) {
    const data = error.data;
    err.statusCode = data.statusCode || 500;
    err.message = data.message || "Something went wrong";
    err.data = data.data || {};
  } else {
    if (error && error.response) {
      const { data } = error.response;
      err.statusCode = data.statusCode || 500;
      err.message = data.message || "Something went wrong";
      err.data = data.data || {};
    }
  }
  return err;
};

export const isAuthenticated = () => {
  const token = Cookies.get("sheToken");
  // Check time
  if (token) {
    return true;
  }
  return false;
};
