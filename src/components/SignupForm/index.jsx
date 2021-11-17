import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import Google from "../../assets/images/login/google.png";
import Or from "../../assets/images/login/or.png";
import { onSignup } from "../../store/auth/action";
import Error from "../Error";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  contact: Yup.number().required("Contact is required").positive(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match",
  ),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading } = useSelector((state) => state.authReducer);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        contact: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema,
      onSubmit(values) {
        const data ={
          email : values.email,
          name : values.name,
          password : values.password,
          contact : values.contact
        }
        dispatch(onSignup(data, history));
      },
    });

  return (
    <>
      <div className='login_form'>
        <h2>Signup on Shekunj </h2>
        <p>
          Already have an account?{" "}
          <Link to='/login' className='register'>
            {" "}
            LOGIN NOW{" "}
          </Link>
        </p>

        <div className='text-center'>
          <button className='btn btn-google'>
            <img src={Google} alt='...' className='mr-2' /> Register with Google
          </button>

          <div className='mt-3 mb-3'>
            <img src={Or} className='orimg' alt='...' />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>
              Full Name <span className='asterik'> * </span>
            </label>
            <input
              name='name'
              type='text'
              className='form-control'
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              autoComplete='off'
            />
            <Error error={errors.name} touched={touched.name} />
          </div>

          <div className='form-group'>
            <label>
              E-mail <span className='asterik'> * </span>
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
              Mobile Number <span className='asterik'> * </span>
            </label>
            <input
              name='contact'
              type='number'
              className='form-control'
              onChange={handleChange}
              value={values.contact}
              onBlur={handleBlur}
              autoComplete='off'
            />
            <Error error={errors.contact} touched={touched.contact} />
          </div>

          <div className='form-group'>
            <label>
              Date of Birth <span className='asterik'> * </span>
            </label>
            <input type='text' className='form-control' />
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
            />
            <Error error={errors.password} touched={touched.password} />
          </div>

          <div className='form-group'>
            <label>
              Confirm Password <span className='asterik'> * </span>
            </label>
            <input
              name='confirmPassword'
              type='password'
              className='form-control'
              onChange={handleChange}
              value={values.confirmPassword}
              onBlur={handleBlur}
            />
            <Error error={errors.confirmPassword} touched={touched.confirmPassword} />
          </div>

          <button type='submit' className='btn btn_login w-100 mt-3'>
            Signup
          </button>
        </form>

        <div className='text-center'>
          <p className='policy_para mt-4'>
            Please read our <a href='#!'> Privacy Notice </a> ,{" "}
            <a href='#!'> Cookie Notice </a> and <a href='#!'> Legal terms </a>
            to understand how we use your personal data.
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
