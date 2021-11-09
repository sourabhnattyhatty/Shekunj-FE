import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TitleIcon from "../assets/icons/logo.svg";

import Error from "../components/Error";
import "./Common.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { onSignup } from "../store/auth/action";
import {CircularProgress} from '@mui/material';
import { useTranslation } from "react-i18next";


const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  contact: Yup.number().required("Contact is required").positive(),
  email: Yup.string().email("Invalid emial").required("Email is required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
});

function SignupPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {isLoading} = useSelector(state => state.authReducer)
  const {t} = useTranslation();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        contact: "",
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit(values) {
        dispatch(onSignup(values, history));
      },
    });

  return (
    <>
      <div className='container'>
        <div className='logo_1'>
          <img src={TitleIcon} alt='...' />
        </div>

        <div className='main_div'>
          <h3 className='text-center'>{t('signup.heading')}</h3>
          <div className='row'>
            <div className='col-sm-4 col-md-4'></div>
            <div className='col-sm-4 col-md-4'>
              <form className='set_form' onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-sm-6 col-md-6'>
                    <div className='err'>
                      <label htmlFor='name'>{t('signup.label1')}</label>
                      <input
                        name='name'
                        type='text'
                        className='w-100 mt-2'
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur}
                        autoComplete='off'
                      />
                      <Error error={errors.name} touched={touched.name} />
                    </div>
                  </div>

                  <div className='col-sm-6 col-md-6'>
                    <div className='err'>
                      <label htmlFor='name'>{t('signup.label2')}</label>
                      <input
                        name='contact'
                        type='number'
                        className='w-100 mt-2'
                        onChange={handleChange}
                        value={values.contact}
                        onBlur={handleBlur}
                        autoComplete='off'
                      />
                      <Error
                        error={errors.contact}
                        touched={touched.contact}
                      />
                    </div>
                  </div>
                </div>

                <div className='err'>
                  <label htmlFor='name'>{t('signup.label3')}</label>
                  <input
                    name='email'
                    type='email'
                    className='w-100 mt-2'
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    autoComplete='off'
                  />
                  <Error error={errors.email} touched={touched.email} />
                </div>

                <div className='err'>
                  <label htmlFor='password'>{t('signup.label4')}</label>
                  <input
                    name='password'
                    type='password'
                    placeholder={t('signup.label4Placeholder')}
                    className='w-100 mt-2'
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                  />
                  <Error error={errors.password} touched={touched.password} />
                </div>
                <button className='w-100 login-button' type='submit'>
                  {isLoading ? <CircularProgress color="secondary" className="my-2" /> : (t('signup.button')) }
                </button>
              </form>
            </div>
            <div className='col-sm-4 col-md-4'></div>
          </div>
        </div>

        <div className='text-center Sign_up'>
          {t('signup.content')}{" "}
          <Link to='/login' className='signup-link'>
            {t('signup.loginLink')}
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
