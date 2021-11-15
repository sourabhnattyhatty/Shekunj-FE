import { authTypes } from "./types";
import { toast } from "react-toastify";
import {Get, Post, Patch} from "../../utils/ApiServices"
import toasterConfig from "../../utils/toasterCongig";
import Cookies from "js-cookie";


export const onLogin = (values, history) => async (dispatch) => {
  try {
    dispatch({ type: authTypes.LOGIN_REQUEST });
    const res = await Post('authentication/login/', values);
    debugger
    dispatch({type : authTypes.LOGIN_FINISH, payload : {name: res.data.name, email : res.data.email} })
    Cookies.set('sheToken', res.data.data.tokens);
    history.push("/")
  } 
  catch (error) {
    dispatch({ type : authTypes.LOGIN_FAIL });
    debugger
    if(error && error.status === 500){
      toast.error(error.data.errors.non_field_errors, toasterConfig);
    }else if(error && error.status === 400){
      toast.error(error.data.errors.error, toasterConfig);
    }
  }
};


export const onSignup = (values, history) => async(dispatch) => {
  try{
    dispatch({type : authTypes.SIGNUP_REQUEST});
    await Post('authentication/register/', values);
    dispatch({type : authTypes.SIGNUP_FINISH, payload : values});
    localStorage.setItem('email', values.email);
    history.push("/verify");
  }
  catch(error){
    dispatch({type : authTypes.SIGNUP_FAIL})
    if(error?.status === 400){
      toast.error(error.data.errors.email);
    }
  }
}

export const emailVerify = (token) => async(dispatch) => {
  try{
    const res = await Get(`authentication/email-verify/?token=${token}`);
    window.location.replace('success');
    return res;
  }
  catch(error){
    toast.error();
  }
}

export const requestRestEmail = (values,history) => async(dispatch) => {
  try{
    dispatch({type : authTypes.EMAIL_VERIFY_REQUEST})
    const res = await Post('authentication/request-reset-email/', values);
    dispatch({type : authTypes.EMAIL_VERIFY_FINISH})
    history.push("/login");
    toast.success(res.data.success, toasterConfig);
  }
  catch(error){
    dispatch({type : authTypes.EMAIL_VERIFY_FAIL})
    toast.error('E-mail not found', toasterConfig);
  }
}

export const resetPassword = (values,history) => async(dispatch) => {
  try{
    dispatch({type : authTypes.EMAIL_VERIFY_REQUEST})
    const res = await Patch('authentication/password-reset-complete/', values)
    dispatch({type : authTypes.EMAIL_VERIFY_FINISH})
    history.push('/login');
    toast.success(res.data.message, toasterConfig);
  }
  catch(error){
    toast.error("Internal Server Error", toasterConfig)
  }
}
