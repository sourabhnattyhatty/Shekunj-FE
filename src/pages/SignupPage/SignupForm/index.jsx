import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { contactVerify, onSignup } from "../../../store/auth/action";
import { useTranslation } from "react-i18next";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import * as Yup from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { Error, GoogleLoginComponent } from "../../../components";

import User from "../../../assets/icons/user.png";
import Lock from "../../../assets/icons/lock.png";
import Mail from "../../../assets/icons/mail.png";
import Phone from "../../../assets/icons/phone.png";
import Otp from "../../../assets/icons/otp.png";
import Alert from "../../../assets/icons/alert.png";
import inactive from "../../../assets/images/login/inactive.png";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  last_name: Yup.string().required("Surname is required"),
  contact: Yup.number().required("Contact is required").positive(),
  email: Yup.string().email("Invalid email"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  otp: Yup.number().required("OTP is required"),
  gender: Yup.string().required("Gender is required"),
});

const LoginForm = () => {
  const [visible, setVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, verifyLoading } = useSelector(
    (state) => state.authReducer,
  );
  const { t } = useTranslation();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        last_name: "",
        contact: "",
        email: "",
        password: "",
        otp: "",
        gender: "female",
      },
      validationSchema,
      onSubmit(values) {
        dispatch(onSignup(values, history));
      },
    });

  const handleVerify = (e) => {
    const contact = values.contact;
    if (contact === "") {
      toast.error("Please provide contact number.");
    } else if (contact.length > 10 || contact.length < 10) {
      toast.error("Please provide valid contact number.");
    } else {
      dispatch(contactVerify({ contact }));
    }
  };

  const restrictMale = () => {
    setAlertVisible(true);
  };

  return (
    <>
      <div className='login_form'>
        <h2>{t("signup.heading")}</h2>
        <p>
          {t("signup.content")}{" "}
          <Link to='/login' className='register'>
            {" "}
            &nbsp; {t("signup.loginLink")}{" "}
          </Link>
        </p>

        <GoogleLoginComponent showOr={true} />

        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <TextField
              name='name'
              type='text'
              className='form-control'
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              autoComplete='off'
              placeholder={t("signup.placeholder1")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img src={User} alt='...' />
                  </InputAdornment>
                ),
              }}
            />

            <Error error={errors.name} touched={touched.name} />
          </div>

          <div className='form-group'>
            <TextField
              name='last_name'
              type='text'
              className='form-control'
              onChange={handleChange}
              value={values.last_name}
              onBlur={handleBlur}
              autoComplete='off'
              placeholder={t("signup.placeholder6")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img src={User} alt='...' />
                  </InputAdornment>
                ),
              }}
            />

            <Error error={errors.last_name} touched={touched.last_name} />
          </div>

          <div className='form-group rem_s'>
            <TextField
              name='email'
              type='email'
              className='form-control'
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              autoComplete='off'
              placeholder={t("signup.placeholder2")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img src={Mail} alt='...' />
                  </InputAdornment>
                ),
              }}
            />
            <Error error={errors.email} touched={touched.email} />
          </div>

          <div className='form-group'>
            <div className='ver'>
              <span onClick={handleVerify}>
                {verifyLoading ? (
                  <CircularProgress
                    color='secondary'
                    size={20}
                    style={{ marginTop: "8px" }}
                  />
                ) : (
                  t("signup.verify")
                )}
              </span>
              <TextField
                name='contact'
                type='number'
                value={values.contact}
                className='form-control'
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete='off'
                placeholder={t("signup.placeholder3")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <img src={Phone} alt='...' />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Error error={errors.contact} touched={touched.contact} />
          </div>

          <div className='form-group'>
            <TextField
              name='otp'
              type='number'
              className='form-control'
              value={values.otp}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t("signup.placeholder4")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img src={Otp} alt='...' />
                  </InputAdornment>
                ),
              }}
            />
            <Error error={errors.otp} touched={touched.otp} />
          </div>

          <div className='form-group'>
            <TextField
              name='password'
              type={visible ? "text" : "password"}
              className='form-control'
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t("signup.placeholder5")}
              autoComplete='off'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img src={Lock} alt='...' />
                  </InputAdornment>
                ),
              }}
            />
            <p className='eye' onClick={(e) => setVisible(!visible)}>
              {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </p>

            <Error error={errors.password} touched={touched.password} />
          </div>

          <div className='rad_set'>
            <div className='radio-with-Icon'>
              <p className='gender'>
                {t("signup.label6.placeholder")} <span>*</span>
              </p>
              <p className='radioOption-Item'>
                <input
                  type='radio'
                  name='gender'
                  id='BannerType1'
                  value={values.gender}
                  className='ng-valid ng-dirty ng-touched ng-empty'
                  defaultChecked={values.gender === "female"}
                />
                <label
                  htmlFor='BannerType1'
                  onClick={() => setAlertVisible(false)}
                >
                  <img src={inactive} alt='' srcSet='' />
                </label>
              </p>
              <p className='fel'>{t("signup.label6.1")}</p>

              <p className='radioOption-Item'>
                <input
                  type='radio'
                  name='BannerTypes'
                  id='BannerType2'
                  value='false'
                  className='ng-valid ng-dirty ng-touched ng-empty'
                  disabled
                />
                <label htmlFor='BannerType2' onClick={restrictMale}>
                  <img src={inactive} alt='' srcSet='' />
                </label>
              </p>
              <p className='male'>{t("signup.label6.2")}</p>
            </div>
            {errors.gender && (
              <Error error={errors.gender} touched={touched.gender} />
            )}
          </div>

          {alertVisible && (
            <div className='alert_div'>
              <div className='alert_image'>
                <img src={Alert} alt='...' />
              </div>
              <p>"{t("signup.alert")}"</p>
            </div>
          )}

          <button type='submit' className='btn btn_login w-100 mt-3'>
            {isLoading ? (
              <CircularProgress color='secondary' size={20} />
            ) : (
              t("signup.button")
            )}
          </button>
        </form>

        <div className='text-center'>
          <p className='policy_para'>
            {t("login.T&C.content1")} <a href='#!'> {t("login.T&C.link1")} </a>{" "}
            , <a href='#!'> {t("login.T&C.link2")} </a>{" "}
            {t("login.T&C.content2")} <a href='#!'> {t("login.T&C.link3")} </a>
            {t("login.T&C.content3")}
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
