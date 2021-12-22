import { authTypes } from "./types";
import { toast } from "react-toastify";
import httpServices from "../../utils/ApiServices";
import toasterConfig from "../../utils/toasterCongig";
import Cookies from "js-cookie";
import { noImage } from "../courses/action";
import moment from "moment";

export const onLogin = (values, history, redirect) => async (dispatch) => {
  try {
    dispatch({ type: authTypes.LOGIN_REQUEST });
    const res = await httpServices.post("authentication/login/", values);
    dispatch({
      type: authTypes.LOGIN_FINISH,
      payload: { name: res.data.name, email: res.data.email },
    });
    Cookies.set("sheToken", res.data.tokens);
    if (redirect) {
      history.push(redirect);
    } else {
      history.push("/MyProgress");
    }
  } catch (error) {
    dispatch({ type: authTypes.LOGIN_FAIL });
    if (error && error.status === 500) {
      toast.error(error.data.message, toasterConfig);
    } else if (error && error.status === 400) {
      toast.error(error.data.errors.error[0], toasterConfig);
    }
  }
};

export const logOut = (history) => async (dispatch) => {
  Cookies.remove("sheToken");
  dispatch({ type: authTypes.LOGIN_FAIL });
  history.push("/login");
};

export const onSignup = (values, history) => async (dispatch) => {
  try {
    dispatch({ type: authTypes.SIGNUP_REQUEST });
    const res = await httpServices.post("authentication/register/", values);
    dispatch({ type: authTypes.SIGNUP_FINISH, payload: values });
    Cookies.set("sheToken", res.data.token);
    history.push("/MyProgress");
  } catch (error) {
    dispatch({ type: authTypes.SIGNUP_FAIL });
    if (error?.status === 400) {
      toast.error(error.data.errors.error[0], toasterConfig);
    } else if (error?.status === 500) {
      toast.error("Not valid OTP", toasterConfig);
    }
  }
};

export const registerWithGoogle = (value, history) => async (dispatch) => {
  try {
    const res = await httpServices.post("social_auth/google/", value);
    dispatch({
      type: authTypes.LOGIN_FINISH,
      payload: { name: res.data.username, email: res.data.email },
    });
    Cookies.set("sheToken", res.data.tokens.access);
    history.push("/MyProgress");
  } catch (err) {
    toast.error("Google Login failed.", toasterConfig);
  }
};

export const contactVerify = (value) => async (dispatch) => {
  try {
    dispatch({ type: authTypes.CONTACT_VERIFY_REQUEST });
    const res = await httpServices.post(`authentication/user-send-otp/`, {
      contact: value.contact.toString(),
    });
    dispatch({ type: authTypes.CONTACT_VERIFY_FINISH });
    toast.success(res.message, toasterConfig);
  } catch (error) {
    dispatch({ type: authTypes.CONTACT_VERIFY_FAIL });
    if (error?.status === 400) {
      toast.error(error.data.errors.error[0], toasterConfig);
    }
  }
};

export const requestRestEmail = (values, history) => async (dispatch) => {
  try {
    dispatch({ type: authTypes.EMAIL_VERIFY_REQUEST });
    const res = await httpServices.post(
      "authentication/request-reset-email/",
      values,
    );
    dispatch({ type: authTypes.EMAIL_VERIFY_FINISH });
    history.push("/login");
    toast.success(res.data.success, toasterConfig);
  } catch (error) {
    dispatch({ type: authTypes.EMAIL_VERIFY_FAIL });
    toast.error("E-mail not found", toasterConfig);
  }
};

export const changePassword = (values, history) => async (dispatch) => {
  try {
    dispatch({ type: authTypes.RESET_PASSWORD_REQUEST });
    const res = await httpServices.post(
      "/authentication/change_password/",
      values,
    );
    dispatch({ type: authTypes.RESET_PASSWORD_FINISH });
    Cookies.remove("sheToken");
    history.push("/login");
    toast.success(res.message, toasterConfig);
  } catch (error) {
    dispatch({ type: authTypes.RESET_PASSWORD_FAIL });
    if (error.status === 400) {
      toast.error(error.data.errors.old_password.old_password, toasterConfig);
    }
  }
};

export const refreshPage = () => async (dispatch) => {
  const token = Cookies.get("sheToken");
  if (token) {
    dispatch({ type: authTypes.REFRESH });
  }
};

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch({ type: authTypes.USER_PROFILE_REQUEST });
    const res = await httpServices.get("/authentication/user-profile/");
    dispatch({
      type: authTypes.USER_PROFILE_FINISH,
      payload: {
        ...res?.data,
        contact: res?.data?.contact
          ? !res?.data?.contact?.includes("+91")
            ? `+91 ${res?.data?.contact}`
            : res?.data?.contact
          : null,
        profile_pic: res?.data?.profile_pic
          ? res?.data?.profile_pic?.includes("http://3.109.195.234")
            ? res?.data?.profile_pic
            : `http://3.109.195.234${res?.data?.profile_pic}`
          : null,
        dob: res?.data?.dob
          ? moment(res?.data?.dob).format("DD-MM-YYYY")
          : null,
      },
    });
  } catch (error) {
    dispatch({ type: authTypes.USER_PROFILE_FAIL });
    if (error?.status === 400) {
      toast.error(error.data.errors.error[0], toasterConfig);
    } else if (error?.status === 500) {
      toast.error("Internal Server Error", toasterConfig);
    }
  }
};
