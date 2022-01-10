import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GuidanceSelect from "./Select";

import Book_img from "../../assets/images/Guidance/Book_img.png";
import Polygon1 from "../../assets/images/Guidance/Polygon1.png";
import Polygon2 from "../../assets/images/Guidance/Polygon2.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import User2 from "../../assets/icons/user2.png";
import User3 from "../../assets/icons/user3.png";
import mail2 from "../../assets/icons/mail2.png";
import phone from "../../assets/icons/phone2.png";
import "./index.scss";
import "../LoginPage/LoginForm/LoginTabs/index.scss";
import { CircularProgress, TextareaAutosize } from "@mui/material";
import "aos/dist/aos.css";
import "animate.css";
import Aos from "aos";
import * as Yup from "yup";

import { useFormik } from "formik";
import { Error } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { bookCounseller } from "../../store/guidance/action";
import moment from "moment";
import { useTranslation } from "react-i18next";

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

const days = range(1, 31);
const years = range(1970, 2021);
const highEducation = ["10th", "12th", "Graduation", "Post Graduation"];
const courseLookingFor = ["Java", "Python", "JavaScript", ".Net"];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const GuidancePage = () => {
  const { isLoading } = useSelector((state) => state.guidanceReducer);  
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    first_name: Yup.string().required(t("login.form1.firstNameError.required")),
    last_name: Yup.string().required(t("login.form1.lastNameError.required")),
    email_address: Yup.string()
      .required(t("login.form1.emailError.required"))
      .email(t("login.form1.emailError.invalid")),
    mobile_number: Yup.number().positive(),
    alternate_number: Yup.number().positive(),
    message: Yup.string().required(t("login.form1.message.required")),
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
    initialValues: {
      first_name: "",
      last_name: "",
      email_address: "",
      mobile_number: "",
      alternate_number: "",
      day: "",
      month: "",
      year: "",
      date_of_birth: "",
      gender: "",
      qualifications: "",
      course_looking_for: "",
      message: "",
    },
    validationSchema,
    onSubmit(values) {
      const dateOfBirth = moment(
        `${values?.year}-${values.month}-${values?.day}`,
      ).format("YYYY-MM-DD");
      values = {
        ...values,
        date_of_birth: dateOfBirth,
        gender: values?.gender,
        qualifications: values?.qualifications,
        course_looking_for: values?.course_looking_for,
      };
      dispatch(bookCounseller(values));
    },
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Header loginPage={true} page='guidance' subPage='bookCounsller' />
      <div className='guidance_book noselect'>
        <Container>
          <Row>
            <Col md={5} xs={12}>
              <div className='guidance_con'>
                <div className='book_sec_content mob_hide'>
                  <h2 data-aos='slide-up'>{t("guidanceBookPage.heading.1")}</h2>
                  <p data-aos='slide-up'>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit.
                  </p>
                </div>

                <div className='book_sec_imgs'>
                  <img src={Book_img} alt='' />

                  <div className='g_book_img'>
                    <img src={Polygon1} alt='' className='vert-move' />
                    <img src={Polygon2} alt='' className='vert-move' />
                  </div>
                </div>
              </div>
            </Col>

            <Col md={7} xs={12}>
              <div className='book_sec_content mob_show'>
                <h2>{t("guidanceBookPage.heading.1")}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit.
                </p>
              </div>
              <div className='guidance_book_form'>
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <TextField
                      name='first_name'
                      type='text'
                      placeholder={t("common.placeHolders.fname")}
                      autoComplete='off'
                      onChange={handleChange}
                      value={values.first_name}
                      onBlur={handleBlur}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img src={User2} alt='...' />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Error
                      error={errors.first_name}
                      touched={touched.first_name}
                    />
                  </div>

                  <div className='form-group'>
                    <TextField
                      name='last_name'
                      type='text'
                      placeholder={t("common.placeHolders.lname")}
                      autoComplete='off'
                      onChange={handleChange}
                      value={values.last_name}
                      onBlur={handleBlur}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img src={User3} alt='...' />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Error
                      error={errors.last_name}
                      touched={touched.last_name}
                    />
                  </div>

                  <div className='form-group'>
                    <TextField
                      name='email_address'
                      type='email'
                      placeholder={t("common.placeHolders.email")}
                      autoComplete='off'
                      onChange={handleChange}
                      value={values.email_address}
                      onBlur={handleBlur}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img src={mail2} alt='...' />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Error
                      error={errors.email_address}
                      touched={touched.email_address}
                    />
                  </div>

                  <div className='form-group'>
                    <TextField
                      name='mobile_number'
                      type='number'
                      placeholder={t("common.placeHolders.mobile")}
                      autoComplete='off'
                      value={values.mobile_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img src={phone} alt='...' />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Error
                      error={errors.mobile_number}
                      touched={touched.mobile_number}
                    />
                  </div>

                  <div className='form-group'>
                    <TextField
                      name='alternate_number'
                      type='number'
                      placeholder={t("common.placeHolders.alternateMobile")}
                      autoComplete='off'
                      value={values.alternate_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img src={phone} alt='...' />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Error
                      error={errors.alternate_number}
                      touched={touched.alternate_number}
                    />
                  </div>

                  <Row>
                    <Col md={4} xs={12}>
                      <div className='form-group mzero'>
                        <GuidanceSelect
                          title={t("common.time.3")}
                          icon={false}
                          listItem={days}
                          defaultValue=''
                          updateValues={(value) => setFieldValue("day", value)}
                        />
                      </div>
                    </Col>
                    <Col md={4} xs={12}>
                      <div className='form-group mzero'>
                        <GuidanceSelect
                          title={t("common.time.4")}
                          icon={false}
                          listItem={months}
                          defaultValue=''
                          updateValues={(value) =>
                            setFieldValue("month", value)
                          }
                        />
                      </div>
                    </Col>
                    <Col md={4} xs={12}>
                      <div className='form-group mzero'>
                        <GuidanceSelect
                          title={t("common.time.1")}
                          icon={false}
                          listItem={years}
                          defaultValue=''
                          updateValues={(value) => setFieldValue("year", value)}
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className='form-group mzero'>
                    <GuidanceSelect
                      title={t("common.formHeadings.gender")}
                      icon={true}
                      listItem={["female", "male"]}
                      defaultValue=''
                      updateValues={(value) => setFieldValue("gender", value)}
                    />
                  </div>
                  <div className='form-group mzero'>
                    <GuidanceSelect
                      title={t("common.formHeadings.qualification")}
                      icon={true}
                      listItem={highEducation}
                      defaultValue=''
                      updateValues={(value) =>
                        setFieldValue("qualifications", value)
                      }
                    />
                  </div>
                  <div className='form-group mzero'>
                    <GuidanceSelect
                      title={t("common.formHeadings.coursesLooking")}
                      icon={true}
                      listItem={courseLookingFor}
                      defaultValue=''
                      updateValues={(value) =>
                        setFieldValue("course_looking_for", value)
                      }
                    />
                  </div>
                  <div className='form-group mzero'>
                    <TextareaAutosize
                      name='message'
                      className='textarea_set'
                      aria-label='minimum height'
                      minRows={7}
                      placeholder={t("common.placeHolders.message")}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Error error={errors.message} touched={touched.message} />
                  </div>

                  <button type='submit' className='book_sess_btn'>
                    {isLoading ? (
                      <CircularProgress color='secondary' size={20} />
                    ) : (
                      t("guidanceBookPage.heading.1")
                    )}
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer loginPage={false} />
    </div>
  );
};

export default GuidancePage;
