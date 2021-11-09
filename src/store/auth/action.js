import { authTypes } from "./types";
import { toast } from "react-toastify";
import {Get, Post} from "../../utils/ApiServices"
import toasterConfig from "../../utils/toasterCongig";
import Cookies from "js-cookie";


export const onLogin = (values, history) => async (dispatch) => {
  try {
    dispatch({ type: authTypes.LOGIN_REQUEST });
    const res = await Post('login/', values);
    dispatch({type : authTypes.LOGIN_FINISH, payload : {name: res.data.name, email : res.data.email} })
    Cookies.set('sheToken', res.data.tokens);
    history.push("/")
  } 
  catch (error) {
    dispatch({ type : authTypes.LOGIN_FAIL });
    if(error && error.status === 500){
      toast.error(error.data.errors.non_field_errors, toasterConfig);
    }
  }
};


export const onSignup = (values, history) => async(dispatch) => {
  try{
    dispatch({type : authTypes.SIGNUP_REQUEST});
    await Post('register/', values);
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
    const res = await Get(`email-verify/?token=${token}`);
    window.location.replace('success');
    return res;
  }
  catch(error){
    debugger
  }
}
