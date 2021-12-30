import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TitleIcon from "../../assets/icons/logo.svg";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import Error from "../../components/Error";
import "../Common.scss";
import { requestRestEmail } from "../../store/auth/action";


function ForgotPage() {
  const { isLoading } = useSelector((state) => state.authReducer);
  
  const { t } = useTranslation();
  
  const dispatch = useDispatch();
  const history = useHistory();
  
  const validationSchema = Yup.object({
    email: Yup.string().email(t("form1.emailError.invalid")).required(t("form1,emailError.required")),
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema,
      onSubmit(values) {
        dispatch(requestRestEmail(values, history));
      },
    });


  return (
    <>
      <div className='container'>
        <div className='logo_1'>
          <img src={TitleIcon} alt='...' />
        </div>

        <div className='main_div'>
          <h3 className='text-center'>{t("forgot.heading")}</h3>
          <div className='row'>
            <div className='col-sm-4 col-md-4'></div>
            <div className='col-sm-4 col-md-4'>
              <form className='set_form' onSubmit={handleSubmit}>
                <div className='err'>
                  <label htmlFor='email'>
                    {t("forgot.label")} <span>*</span>
                  </label>
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

                <button className='w-100 my-4 login-button' type='submit'>
                  {isLoading ? (
                    <CircularProgress color='secondary' className='my-2' />
                  ) : (
                    t("forgot.button")
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

export default ForgotPage;
