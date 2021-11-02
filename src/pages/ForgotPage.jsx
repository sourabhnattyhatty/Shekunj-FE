import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TitleIcon from "../assets/icons/logo.svg";

import Error from "../components/Error";
import "./Common.scss";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid emial").required("Email is required"),
});

function ForgotPage() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema,
      onSubmit(values) {
        console.log(values);
      },
    });

  return (
    <>
      <div className='container'>
        <div className='logo_1'>
          <img src={TitleIcon} alt='...' />
        </div>

        <div className='main_div'>
          <h3 className='text-center'>Forgot Password</h3>
          <div className='row'>
            <div className='col-sm-4 col-md-4'></div>
            <div className='col-sm-4 col-md-4'>
              <form className='set_form' onSubmit={handleSubmit}>
                <div className='err'>
                  <label htmlFor='email'>
                    E-mail address <span>*</span>
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
                  Submit
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
