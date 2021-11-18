import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import Google from "../../assets/images/login/google.png";
import Or from "../../assets/images/login/or.png";
import { onLogin } from "../../store/auth/action";
import Error from "../Error";
import { CircularProgress } from "@mui/material";
import LoginTabs from "../LoginTabs";


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const { isLoading } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const [value, setValue] = React.useState('1');

  const handleChanged = (event, newValue) => {
    setValue(newValue);
  };

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
      <div className='login_form'>
        <h2>Login on Shekunj</h2>
        <p>
          Don't have an account?{" "}
          <Link to='/signup' className='register'>
            {" "}
            REGISTER HERE{" "}
          </Link>
        </p>

        


        <LoginTabs/>

       

        {/* <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>
              E-mail address <span className='asterik'> * </span>
            </label>
            <input
              name='email'
              type='email'
              className='form-control'
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              autoComplete='off'
            />
            <Error error={errors.email} touched={touched.email} />
          </div>

          <div className='form-group'>
            <label>
              Password <span className='asterik'> * </span>
            </label>
            <input
              name='password'
              type='password'
              className='form-control'
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              autoComplete='off'
            />
            <Error error={errors.password} touched={touched.password} />
          </div>

          <button type='submit' className='btn btn_login w-100 mt-3'>
            {isLoading ? <CircularProgress color="secondary" size={20}/> : 'Login'}
          </button>
        </form> */}

        <div className='text-center'>
          <p className='policy_para'>
            Please read our <a href='#!'> Privacy Notice </a> ,{" "}
            <a href='#!'> Cookie Notice </a> and <a href='#!'> Legal terms </a>
            to understand how we use your personal data.
          </p>
        </div>


        <div className='text-center'>
        <div className='mt-3 mb-3'>
            <img src={Or} className='orimg' alt='...' />
          </div>
        </div>

          <button className='btn btn-google'>
            <img src={Google} alt='...' className='mr-2' /> Register with Google
          </button>

          



      </div>
    </>
  );
};

export default LoginForm;
