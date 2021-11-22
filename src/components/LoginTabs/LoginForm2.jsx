import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Error from "../Error";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { onLogin } from "../../store/auth/action";
import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";


function LoginForm2() {
  const { isLoading } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    contact: Yup.number().required(t('login.form2.contactError')),
    password: Yup.string()
    .min(6, t('login.form1.passError.min'))
    .required(t('login.form1.passError.required')),
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        contact: "",
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
            name='contact'
            type='number'
            className='form-control'
            onChange={handleChange}
            value={values.contact}
            onBlur={handleBlur}
            autoComplete='off'
            placeholder={t("login.form2.placeholder1")}
          />
          <Error error={errors.contact} touched={touched.contact} />
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
            placeholder={t("login.form2.placeholder2")}
          />
          <Error error={errors.password} touched={touched.password} />
        </div>

        <button type='submit' className='btn btn_login w-100'>
          {isLoading ? (
            <CircularProgress color='secondary' size={20} />
          ) : (
            t("login.button")
          )}
        </button>
      </form>
    </>
  );
}

export default LoginForm2;
