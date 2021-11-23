import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Google from "../../assets/images/login/google.png";
import Or from "../../assets/images/login/or.png";
import { onSignup } from "../../store/auth/action";
import Error from "../Error";
import inactive from "../../assets/images/login/inactive.png";
import { CircularProgress } from "@mui/material";

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
  const { t } = useTranslation();

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
        const data = {
          email: values.email,
          name: values.name,
          password: values.password,
          contact: values.contact,
        };
        dispatch(onSignup(data, history));
      },
    });

  return (
    <>
      <div className='login_form'>
        <h2>{t("signup.heading")}</h2>
        <p>
          {t("signup.content")}{" "}
          <Link to='/login' className='register'>
            {" "}
            &nbsp; {t('signup.loginLink')}{" "}
          </Link>
        </p>

        <div className='text-center'>
          <button className='btn btn-google'>
            <img src={Google} alt='...' className='mr-2' /> {t('login.google')}
          </button>

          <div className='or'>
            <img src={Or} className='orimg' alt='...' />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              name='name'
              type='text'
              className='form-control'
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              autoComplete='off'
              placeholder={t('signup.placeholder1')}
            />

            <Error error={errors.name} touched={touched.name} />
          </div>

          <div className='form-group'>
            <input
              name='name'
              type='text'
              className='form-control'
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              autoComplete='off'
              placeholder='Surname'
            />

            <Error error={errors.name} touched={touched.name} />
          </div>

          <div className='form-group rem_s'>
            <input
              name='email'
              type='email'
              className='form-control'
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              autoComplete='off'
              placeholder={t('signup.placeholder2')}
            />
            <Error error={errors.email} touched={touched.email} />
          </div>

          <div className='form-group'>
            <div className='ver'>
              <span>{t('signup.verify')}</span>
              <input
                name='contact'
                type='number'
                className='form-control'
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete='off'
                placeholder={t('signup.placeholder3')}
              />
            </div>
            <Error error={errors.contact} touched={touched.contact} />
          </div>

          <div className='form-group'>
            <input
              name='confirmPassword'
              type=''
              className='form-control'
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('signup.placeholder4')}
            />
            <Error
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
          </div>

          <div className='form-group'>
            
            <input
              name='confirmPassword'
              type='password'
              className='form-control'
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('signup.placeholder5')}
            />
            <p className="eye"><VisibilityIcon /></p>
            <Error
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
            />
          </div>

          <div className='rad_set'>
            <div className='radio-with-Icon'>
              <p className='gender'>
              {t('signup.label6.placeholder')} <span>*</span>
              </p>
              <p className='radioOption-Item'>
                <input
                  type='radio'
                  name='BannerTypes'
                  id='BannerType1'
                  value='true'
                  className='ng-valid ng-dirty ng-touched ng-empty'
                />
                <label for='BannerType1'>
                  <img src={inactive} alt='' srcset='' />
                </label>
              </p>
              <p className='fel'>{t('signup.label6.1')}</p>

              <p className='radioOption-Item'>
                <input
                  type='radio'
                  name='BannerTypes'
                  id='BannerType2'
                  value='false'
                  className='ng-valid ng-dirty ng-touched ng-empty'
                />
                <label for='BannerType2'>
                  <img src={inactive} alt='' srcset='' />
                </label>
              </p>
              <p className='male'>{t('signup.label6.2')}</p>
            </div>
          </div>

          <button type='submit' className='btn btn_login w-100 mt-3'>
            {isLoading ? (
              <CircularProgress color='secondary' size={20} />
            ) : (
              t('signup.button')
            )}
          </button>
        </form>

        <div className='text-center'>
          <p className='policy_para'>
            {t('login.T&C.content1')} <a href='#!'> {t('login.T&C.link1')} </a> ,{" "}
            <a href='#!'> {t('login.T&C.link2')} </a> {t('login.T&C.content2')} <a href='#!'> {t('login.T&C.link3')} </a>
            {t('login.T&C.content3')}
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
