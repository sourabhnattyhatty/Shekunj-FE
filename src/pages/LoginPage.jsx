import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import "./Common.scss";
import { useDispatch, useSelector } from "react-redux";

import Error from "../components/Error";
import TitleIcon from "../assets/icons/logo.svg";
import { onLogin } from "../store/auth/action";
import {CircularProgress} from '@mui/material';


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
});

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {isLoading} = useSelector(state => state.authReducer)

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit(values) {
        dispatch(onLogin(values, history));
      },
    });


  return (
    <>
      <div className='container'>
        <div className='logo_1'>
          <img src={TitleIcon} alt='...' />
        </div>

        <div className='main_div'>
          <h3 className='text-center'>Login</h3>
          <div className='row'>
            <div className='col-sm-4 col-md-4'></div>
            <div className='col-sm-4 col-md-4'>
              <form className='set_form' onSubmit={handleSubmit}>
                <label htmlFor='email'>
                  E-mail address <span>*</span>
                </label>
                <div className='err'>
                  <input
                    name='email'
                    type='email'
                    className='w-100'
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    autoComplete='off'
                    />
                  <Error error={errors.email} touched={touched.email} />
                </div>

                <div className='err'>
                  <label htmlFor='password'>
                    Password <span>*</span>
                  </label>
                  <input
                    name='password'
                    type='password'
                    className='w-100'
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    autoComplete='off'
                  />
                  <Error error={errors.password} touched={touched.password} />
                </div>

                <button className='w-100 login-button' type='submit'>
                  {isLoading ? <CircularProgress color="inherit" /> : "Submit"}
                </button>
              </form>
            </div>
            <div className='col-sm-4 col-md-4'></div>
          </div>
        </div>

        <div className='text-center for_pass'>
          <Link to='/forgot' className='forgot-link'>
            Forgot Password ?
          </Link>
        </div>
        <div className='text-center Sign_up'>
          Not a member ?{" "}
          <Link to='/signup' className='signup-link'>
            Sign up now
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
