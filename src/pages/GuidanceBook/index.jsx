import React, { useEffect, useState } from "react";
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

const validationSchema = Yup.object({
  first_name: Yup.string().required("Name is required"),
  last_name: Yup.string().required("Surname is required"),
  email_address: Yup.string()
    .required("Email is required")
    .email("Invalid email"),
  mobile_number: Yup.number().positive(),
  alternate_number: Yup.number().positive(),
  message: Yup.string().required("Message is required"),
});

const GuidancePage = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [gender, setGender] = useState();
  const [qualification, setQualification] = useState();
  const [courseLooking, setCourseLooking] = useState();

  const { isLoading } = useSelector((state) => state.guidanceReducer);

  const dispatch = useDispatch();

  const handleSetDay = (val) => {
    setDay(val);
    handleChange(val);
  };
  const handleSetMonth = (val) => {
    setMonth(val);
  };
  const handleSetYear = (val) => {
    setYear(val);
  };
  const handleSetGender = (val) => {
    setGender(val);
  };
  const handleSetQualification = (val) => {
    setQualification(val);
  };
  const handleCourseLookingFor = (val) => {
    setCourseLooking(val);
  };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email_address: "",
        mobile_number: "",
        alternate_number: "",
        date_of_birth: "",
        gender: "female",
        qualifications: "",
        course_looking_for: "",
        message: "",
      },
      validationSchema,
      onSubmit(values) {
        const dateOfBirth = moment(`${year}-${month}-${day}`).format(
          "YYYY-MM-DD",
        );
        values = {
          ...values,
          date_of_birth: dateOfBirth,
          gender,
          qualifications: qualification,
          course_looking_for: courseLooking,
        };
        dispatch(bookCounseller(values));
        values = {};
      },
    });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Header loginPage={true} page='guidance' subPage='bookCounsller' />
      <div className='guidance_book'>
        <Container>
          <Row>
            <Col md={5} xs={12}>
              <div className='guidance_con'>
                <div className='book_sec_content'>
                  <h2 data-aos='slide-up'>Book a Session</h2>
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
              <div className='guidance_book_form'>
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <TextField
                      name='first_name'
                      type='text'
                      placeholder='Enter First Name'
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
                      placeholder='Enter Last Name'
                      autoComplete='off'
                      onChange={handleChange}
                      value={values.last_name}
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
                      error={errors.last_name}
                      touched={touched.last_name}
                    />
                  </div>

                  <div className='form-group'>
                    <TextField
                      name='email_address'
                      type='text'
                      placeholder='Enter Your Email'
                      autoComplete='off'
                      onChange={handleChange}
                      value={values.email_address}
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
                      error={errors.email_address}
                      touched={touched.email_address}
                    />
                  </div>

                  <div className='form-group'>
                    <TextField
                      name='mobile_number'
                      type='text'
                      placeholder='Enter Mobile Number'
                      autoComplete='off'
                      value={values.mobile_number}
                      onChange={handleChange}
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
                      error={errors.mobile_number}
                      touched={touched.mobile_number}
                    />
                  </div>

                  <div className='form-group'>
                    <TextField
                      name='alternate_number'
                      type='text'
                      placeholder='Enter Alternate Number'
                      autoComplete='off'
                      value={values.alternate_number}
                      onChange={handleChange}
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
                      error={errors.alternate_number}
                      touched={touched.alternate_number}
                    />
                  </div>

                  <Row>
                    <Col md={4} xs={12}>
                      <div className='form-group mzero'>
                        <GuidanceSelect
                          title='Day'
                          icon={false}
                          array={days}
                          setValue={handleSetDay}
                        />
                      </div>
                    </Col>
                    <Col md={4} xs={12}>
                      <div className='form-group mzero'>
                        <GuidanceSelect
                          title='Month'
                          icon={false}
                          array={months}
                          setValue={handleSetMonth}
                        />
                      </div>
                    </Col>
                    <Col md={4} xs={12}>
                      <div className='form-group mzero'>
                        <GuidanceSelect
                          title='Year'
                          icon={false}
                          array={years}
                          setValue={handleSetYear}
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className='form-group mzero'>
                    <GuidanceSelect
                      title='Gender'
                      icon={true}
                      array={["female", "male"]}
                      setValue={handleSetGender}
                    />
                  </div>
                  <div className='form-group mzero'>
                    <GuidanceSelect
                      title='Qualifications'
                      icon={true}
                      array={highEducation}
                      setValue={handleSetQualification}
                    />
                  </div>
                  <div className='form-group mzero'>
                    <GuidanceSelect
                      title='Course Looking For'
                      icon={true}
                      array={courseLookingFor}
                      setValue={handleCourseLookingFor}
                    />
                  </div>
                  <div className='form-group mzero'>
                    <TextareaAutosize
                      name='message'
                      className='textarea_set'
                      aria-label='minimum height'
                      minRows={7}
                      placeholder='Enter Your Message'
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
                      "Book a Session"
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
