import React, { useState, useEffect } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { CircularProgress } from "@mui/material";

import { updateProfile } from "../../../../store/auth/action";
import statesCities from "../../../../utils/statesCities.json";
import GuidanceSelect from "../../../GuidanceBook/Select";
import { Error } from "../../../../components";

import User from "../../../../assets/images/MyProfile/user.png";
import phone from "../../../../assets/images/MyProfile/phone.png";
import DateBirth from "../../Date_Birth";
import ProfileImage from "../ProfileImage";

import "./index.scss";

function EditProfile(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { user, isLoading } = useSelector((state) => state.authReducer);
  const [cities, setCities] = useState([]);

  const validationSchema = Yup.object({
    name: Yup.string().required(t("login.form1.firstNameError.required")),
    last_name: Yup.string().required(t("login.form1.lastNameError.required")),
    email: Yup.string().email(t("login.form1.emailError.invalid")).nullable(),
    highest_education: Yup.string().nullable(),
    dob: Yup.string().nullable(),
    state: Yup.string().nullable(),
    city: Yup.string().nullable(),
    stream: Yup.string().nullable(),
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
    isSubmitting,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user?.name || "",
      email: user?.email || "",
      highest_education: user?.highest_education || "",
      last_name: user?.last_name || "",
      dob: moment(user?.dob, "DD-MM-YYYY").format("YYYY-MM-DD") || "",
      state: user?.state,
      city: user?.city,
      stream: user?.stream,
    },
    validationSchema,
    onSubmit(values) {
      dispatch(updateProfile(user?.id, values));
      props.func();
    },
  });

  useEffect(() => {
    if (user?.state) {
      const cities = filterCities(values.state);
      if (cities) setCities(cities);
    }
  }, [user, values.state]);

  const filterCities = (state) =>
    statesCities?.find((c) => c?.name === state)?.districts || [];

  const handleStateChange = (value) => {
    const foundCities = filterCities(value);
    if (foundCities) setCities(foundCities);
    setFieldValue("city", "");
    setFieldValue("state", value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col md={4} xs={12}>
            <ProfileImage isEditable={true} />
          </Col>
          <Col md={4} xs={12}>
            <div className='edit_profile'>
              <div className='form-group mb-4'>
                <label htmlFor=''>First Name</label>
                <TextField
                  name='name'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className='form-control'
                  autoComplete='off'
                  placeholder=''
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

              <div className='form-group mb-4'>
                <label htmlFor=''>Email</label>
                <TextField
                  name='email'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={"form-control"}
                  autoComplete='off'
                  placeholder=''
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <img src={User} alt='...' />
                      </InputAdornment>
                    ),
                  }}
                />
                <Error error={errors.email} touched={touched.email} />
              </div>

              <div className='form-group'>
                <label htmlFor=''>Highest Education</label>
                <div className='form-group mzero'>
                  <GuidanceSelect
                    listItem={["10th", "12th", "Diploma", "PG", "UG"]}
                    defaultValue={values.highest_education}
                    updateValues={(value) =>
                      setFieldValue("highest_education", value)
                    }
                  />
                  <Error
                    error={errors.highest_education}
                    touched={touched.highest_education}
                  />
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor=''>Date of birth</label>
                <div className='form-group mzero'>
                  <DateBirth
                    defaultValue={values.dob}
                    updatedDate={(value) =>
                      setFieldValue(
                        "dob",
                        moment(value, "DD-MM-YYYY").format("YYYY-MM-DD"),
                      )
                    }
                  />
                  <Error error={errors.dob} touched={touched.dob} />
                </div>
              </div>

              <div className='form-group mb-4'>
                <label htmlFor=''>City</label>
                <div className='form-group mzero'>
                  <GuidanceSelect
                    listItem={cities}
                    defaultValue={values.city}
                    updateValues={(value) => setFieldValue("city", value)}
                  />
                  <Error error={errors.city} touched={touched.city} />
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className='edit_profile'>
              <div className='form-group mb-4'>
                <label htmlFor=''>Last Name</label>
                <TextField
                  name='last_name'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                  className='form-control'
                  autoComplete='off'
                  placeholder=''
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

              <div className='form-group mb-4'>
                <label htmlFor=''>Mobile Number</label>
                <TextField
                  name='contact'
                  type='text'
                  value={user?.contact}
                  disabled
                  className='form-control'
                  autoComplete='off'
                  placeholder=''
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <img src={phone} alt='...' />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div className='form-group mb-3'>
                <label htmlFor=''>Stream</label>
                <div className='form-group mzero'>
                  <GuidanceSelect
                    defaultValue={values.stream}
                    updateValues={(value) => setFieldValue("stream", value)}
                  />
                  <Error error={errors.stream} touched={touched.stream} />
                </div>
              </div>

              <div className='form-group mb-4'>
                <label htmlFor=''>State</label>{" "}
                <div className='form-group mzero'>
                  <GuidanceSelect
                    listItem={statesCities}
                    defaultValue={values?.state}
                    updateValues={handleStateChange}
                  />
                  <Error error={errors.state} touched={touched.state} />
                </div>
              </div>
            </div>
          </Col>

          <Col md={8} className='offset-md-4'>
            <button
              type='submit'
              disabled={isSubmitting || isLoading}
              className='Save_profile_btn'
            >
              {isSubmitting || isLoading ? (
                <CircularProgress color='secondary' size={20} />
              ) : (
                "Save"
              )}
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
}

export default EditProfile;
