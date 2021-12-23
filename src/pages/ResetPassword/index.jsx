import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

import TitleIcon from "../../assets/icons/logo.svg";
import Error from "../../components/Error";
import "./index.scss";

const validationSchema = Yup.object({
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
});

function ResetPassword() {
  const { isLoading } = useSelector((state) => state.authReducer);

  const { t } = useTranslation();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        password: "",
      },
      validationSchema,
      onSubmit() {},
    });

  return (
    <>
      <div className='container'>
        <div className='logo_3'>
          <img src={TitleIcon} alt='...' />
        </div>

        <div className='main_div'>
          <h3 className='text-center'>{t("resetPassword.heading")}</h3>
          <div className='row'>
            <div className='col-sm-4 col-md-4'></div>
            <div className='col-sm-4 col-md-4'>
              <form className='set_form' onSubmit={handleSubmit}>
                <div className='err'>
                  <label htmlFor='email'>
                    {t("resetPassword.label")} <span>*</span>
                  </label>
                  <input
                    name='password'
                    type='password'
                    className='w-100 mt-2'
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    autoComplete='off'
                  />
                  <Error error={errors.password} touched={touched.password} />
                </div>

                <button className='w-100 my-4 login-button' type='submit'>
                  {isLoading ? (
                    <CircularProgress color='secondary' className='my-2' />
                  ) : (
                    t("resetPassword.heading")
                  )}
                </button>
              </form>
            </div>
            <div className='col-sm-4 col-md-4'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
