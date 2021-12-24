import { InputAdornment, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import GuidanceSelect from "../../../GuidanceBook/Select";
import User from "../../../../assets/images/MyProfile/user.png";
import phone from "../../../../assets/images/MyProfile/phone.png";
import education from "../../../../assets/images/MyProfile/education.png";
import * as Yup from "yup";
import DateBirth from "../../Date_Birth";
import { useDispatch, useSelector } from "react-redux";
import { noImage } from "../../../../store/courses/action";
import "./index.scss";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import moment from "moment";
import { updateProfile } from "../../../../store/auth/action";
import statesCities from "../../../../utils/statesCities.json";
import { Error } from "../../../../components";

const highEducation = ["10th", "12th", "Graduation", "Post Graduation"];

function EditProfile(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.authReducer);
  const [cities, setCities] = useState([]);

  const validationSchema = Yup.object({
    name: Yup.string().required(t("login.form1.firstNameError.required")),
    last_name: Yup.string().required(t("login.form1.lastNameError.required")),
    email: Yup.string().email(t("login.form1.emailError.invalid")),
    highest_education: Yup.string(),
    dob: Yup.string(),
    state: Yup.string(),
    city: Yup.string(),
    stream: Yup.string(),
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
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
    if (user?.city) {
      const cities = filterCities(values.state);
      if (cities) setCities(cities);
    }
  }, [user]);

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
            <div className='myProfile_img'>
              <img
                src={user?.profile_pic || noImage}
                style={{ width: "-webkit-fill-available" }}
                alt={user?.name || "N/A"}
              />
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className='edit_profile'>
              <div className='form-group'>
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

              <div className='form-group'>
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

              <div className='form-group mzero'>
                <label htmlFor=''>Highest Education</label>
                <TextField
                  name='highest_education'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.highest_education}
                  className='form-control'
                  autoComplete='off'
                  placeholder=''
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <img src={education} alt='...' />
                      </InputAdornment>
                    ),
                  }}
                />
                <Error
                  error={errors.highest_education}
                  touched={touched.highest_education}
                />
              </div>

              <div className='form-group'>
                <label htmlFor=''>Date of birth</label>
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

              <div className='form-group'>
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
              <div className='form-group'>
                <label htmlFor=''>Last Name</label>
                <TextField
                  name='last_name'
                  type='text'
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
              </div>
            </div>
            <div className='edit_profile'>
              <div className='form-group'>
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

              <div className='form-group'>
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

              <div className='form-group'>
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
                <label htmlFor=''>State</label>
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

          <Col md={8} className='offset-md-3'>
            <button type='submit' className='Save_profile_btn'>
              Save
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
}

export default EditProfile;
