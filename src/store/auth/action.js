import { authTypes } from "./types";
import { transformError } from "../../utils/transformAxiosError";
import { toast } from "react-toastify";
import {Post} from "../../utils/ApiServices"
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
    const err = transformError(error);
    if (err && err.statusCode === 401) {
      toast.error("Invalid credentials", toasterConfig);
    }else if(err && err.statusCode === 500){
      toast.error(err.message, toasterConfig);
    }
  }
};


export const onSignup = (values, history) => async(dispatch) => {
  try{
    dispatch({type : authTypes.SIGNUP_REQUEST});
    const res = await Post('register/', values);
    dispatch({type : authTypes.SIGNUP_FINISH, payload : values});
    debugger
    history.push("/verify");
  }
  catch(error){
    debugger
    dispatch({type : authTypes.SIGNUP_FAIL})
    if(error?.status === 400){
      toast.error(error.data.errors.email);
    }
  }
}
