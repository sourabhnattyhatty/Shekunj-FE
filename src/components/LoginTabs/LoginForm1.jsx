import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Error from "../Error";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { onLogin } from "../../store/auth/action";
import { CircularProgress } from "@mui/material";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
});

function LoginForm1() {
  const { isLoading } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();

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
      <form onSubmit={handleSubmit}>
        <div className='form-group mb-4'>
          <input
            name='email'
            type='email'
            className='form-control'
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            autoComplete='off'
            placeholder='E-mail'
          />
          <Error error={errors.email} touched={touched.email} />
        </div>

        <div className='form-group'>
          <input
            name='password'
            type='password'
            className='form-control'
            onChange={handleChange}
            value={values.password}
            onBlur={handleBlur}
            autoComplete='off'
            placeholder='Password'
          />
          <Error error={errors.password} touched={touched.password} />
        </div>

        <button type='submit' className='btn btn_login w-100'>
          {isLoading ? (
            <CircularProgress color='secondary' size={20} />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
}

export default LoginForm1;
