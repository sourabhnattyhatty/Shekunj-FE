import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StyledEngineProvider } from "@mui/material/styles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GuidanceSelect from "./Select";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
// import "react/datepicker/dist/react-datepicker.css"
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Calendar from '../../assets/images/MyProfile/calendar.png';
// import Gender from "../../assets/icons/gender.png";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
import { withFormik } from "formik";
import { Error } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { bookCounseller } from "../../store/guidance/action";
import moment from "moment";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useTranslation } from "react-i18next";
import axios from "axios";
import add2 from "../../assets/images/add2.jpg";
import { adsList } from "../../store/ads";
import City from "../../assets/icons/city.png";
import Edit from "../../assets/icons/edit.png";
// import Calendar from "../../../assets/icons/calendar.png";
function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

// const today = new Date();

const days = range(1, 31);
const years = range(1970, 2021);
const highEducation = ["10th", "12th", "Graduation", "Post Graduation"];
const GenderCategory = ["male", "female"];
const GuidancePurpose = [
  "Career Guidance",
  "Business Support",
  "Medical Guidance",
  "Personal issues",
  "other",
];
// const courseLookingFor = ["Java", "Python", "JavaScript", ".Net"];

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

const GuidancePage = () => {
  const { isLoading } = useSelector((state) => state.guidanceReducer);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    first_name: Yup.string().required(t("login.form1.firstNameError.required")),
    last_name: Yup.string().required(t("login.form1.lastNameError.required")),
    // City: Yup.string().required(t("login.form1.CityError.required")),
    email_address: Yup.string()
      .required(t("login.form1.emailError.required"))
      .email(t("login.form1.emailError.invalid")),
    mobile_number: Yup.number().positive(),
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
    setFieldTouched,
  } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email_address: "",
      mobile_number: "",
      city: "",
      // day: "",
      // month: "",
      // year: "",
      date_of_birth: "",
      qualifications: "",
      gender: "",
      guidance_purpose: "",
      // course_looking_for: "",
      message: "",
      // date:"",
      // value:""
    },
    validationSchema,
    onSubmit(values) {
      // const dateOfBirth = moment(
      //   `${values?.year}-${values.month}-${values?.day}`,
      // ).format("YYYY-MM-DD");
      // const date_of_birth = moment(values.date_of_birth, 'DD-MM-YYYY').format('YYYY-MM-DD')
      const date_of_birth = moment(`${values.date_of_birth}`).format(
        "YYYY-MM-DD",
      );
      values = {
        ...values,
        // date_of_birth: dateOfBirth,
        date_of_birth: date_of_birth,
        qualifications: values?.qualifications,
        gender: values?.gender,
      };
      dispatch(bookCounseller(values));
    },
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const ValidatedForm = withFormik({
    mapPropsToValues: () => ({
      date: null,
    }),

    validate: (values) => {
      const errors = {};

      if (!values.date) {
        errors.date = "please select a date";
      }
      return errors;
    },
  });

  const [bookCounsellorAds, setBookCounsellorAds] = useState([]);
  const [image, setImage] = useState("NA");
  // const [value,setValue]= React.useState(null);
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  // useEffect(() => {
  // 	axios.get('/private_adds/private_add?image_type=book_counsellor')
  // 		.then((response) => {
  // 			setBookCounsellorAds(response.data.results);
  // 		});
  // }, [])

  const addEmail = (email) => {
    console.log("addEmail", email);
    navigator.geolocation.getCurrentPosition(async function (position, values) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      let params = {
        latitude: latitude.toString(),
        longitude: longitude.toString(),
      };
      axios
        .post("/private_adds/click_add/", {
          // add_email:`${adds[0]?.add_email}`
          add_email: email,
          latitude: params.latitude.toString(),
          longitude: params.longitude.toString(),
        })
        .then((response) => {
          // setAdds(response.data.results);
          console.log("addEmailresponse", response);
        });
    });
  };
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>code below>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(async function (position, values) {
  //     const latitude = position.coords.latitude;
  //     const longitude = position.coords.longitude;

  //     let params = {
  //       latitude: latitude.toString(),
  //       longitude: longitude.toString(),
  //     };
  //     axios
  //       .get(
  //         `/private_adds/private_add?latitude=${latitude}&longitude=${longitude}`,
  //       )
  //       .then((response) => {
  //         if (response.data.results.length > 0) {
  //           let filterArray = response.data.results.filter((item, index) => {
  //             return item.image_type == "book_counsellor";
  //           });
  //           let findImage =
  //             filterArray.length > 0 ? filterArray[0].image : "NA";
  //           setImage(findImage);
  //           setBookCounsellorAds(filterArray);
  //         }
  //       })   .catch((error) => {
  //         // setMessage("No data found");
  //         console.log(error);
  //     })
  //   });
  //   dispatch(adsList());
  // }, [dispatch]);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>latest code below>>>>>>>>>>>>>>>>>>>>>>>>>>

useEffect(() => {
  dispatch(adsList())
  navigator.geolocation.getCurrentPosition(async function (position, values) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    let params = {
      latitude: latitude.toString(),
      longitude: longitude.toString(),
    } 
    axios
    .get(
      `/private_adds/private_add?latitude=${latitude}&longitude=${longitude}`,
    )
    .then((response) => {
      if (response && response.data.results.length > 0) {
        let filterArray1 = response.data.results.filter((item, index) => {
         
          return item.image_type == "book_counsellor";

        });
        setBookCounsellorAds(filterArray1);
        // console.log("filterArray1book_counsellor",filterArray1)
          }
        })   
  } ,
  function(error) {
    console.error("Error Code = " + error.code + " - " + error.message);
    // alert("Your location is blocked")    
  axios
  .get(
    `/private_adds/private_add`,
  )
  .then((response) => {
    if (response && response.data.results.length > 0) {
        let filterArray1 = response.data.results.filter((item, index) => {   
          return item.image_type == "book_counsellor";
        });
        setBookCounsellorAds(filterArray1);
        // console.log("filterArray1coursebox",filterArray1) 
        }
      })
 }
)
},[])


  return (
    <div>
      <Header loginPage={true} page='guidance' subPage='bookCounsller' />
      <div className='guidance_book noselect'>
        <Container>
          <Row>
            <Col md={4} xs={12}>
              <div className='guidance_con'>
                <div className='book_sec_content mob_hide'>
                  <h2 data-aos='slide-up'>{t("guidanceBookPage.heading.1")}</h2>
                  <p data-aos='slide-up'>{t("guidanceBookPage.heading.2")}</p>
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

            <Col md={6} xs={12}>
              <div className='book_sec_content mob_show'>
                <h2>{t("guidanceBookPage.heading.1")}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit.
                </p>
              </div>
              <div className='guidance_book_form'>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} xs={12}>
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
                    </Col>

                    <Col md={6} xs={12}>
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
                    </Col>
                  </Row>

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

                  {/* <Row>
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
                  </Row> */}

                  <Row>
                    <Col md={12} xs={12}>
                      {/* <div className='form-group Calendar'>
                        <Form.Group controlId='validationFormik03'>
                          <DatePicker
                            selected={values.date_of_birth}
                            title='date_of_birth'
                            onChange={(e) => {
                              setFieldValue("date_of_birth", e);
                              setFieldTouched("date_of_birth");
                            }}
                            icon={true}
                            className='form-control'
                            placeholderText='date_of_birth'
                            customInput={
                              <input
                                type='text'
                                id='date_of_birth'
                                placeholder='date_of_birth'
                              />
                              
                            }
                          />
                          {console.log(
                            "values.date_of_birth",
                            values.date_of_birth,
                          )}
                         
                          {touched.date_of_birth &&
                            !!errors.date_of_birth &&
                            errors.date_of_birth}
                        </Form.Group>
                      </div> */}
                        {/* <div className='form-group'> */}
                {/* <label htmlFor=''>{t('common.formHeadings.dob')}</label> */}
                <div className='form-group mzero'>
                <Form.Group controlId='validationFormik03'>
                  <img className='calendar_icon_guidance' src={Calendar} alt='...' />
                  <DatePicker
                    selected={
                      values?.date_of_birth && typeof values?.date_of_birth !== 'undefined'
                        ? new Date(values.date_of_birth)
                        : null
                    }
                    placeholderText={('Enter DOB')}
                    title="date_of_birth"
                    icon={true}
                    className='form-control'
                    maxDate={new Date()}
                    dateFormat='dd-MM-yyyy'
                    onChange={date =>
                      setFieldValue(
                        'date_of_birth',
                        moment(date, 'DD-MM-YYYY').format('YYYY-MM-DD'),
                      )
                    }
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode='select'
                  />
                  <Error error={errors.date_of_birth} touched={touched.date_of_birth} />
                  </Form.Group>
                </div>
              {/* </div> */}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} xs={12}>
                      <div className='form-group mzero'>
                        <Form.Group controlId='validationFormik04'>

                        {/* <img className='calendar_icon' src={Gender} alt='...' /> */}
                          <GuidanceSelect
                            title={t("common.formHeadings.gender")}
                            icon={true}
                            listItem={["female", "male"]}
                            defaultValue=''
                            updateValues={(value) =>
                              setFieldValue("gender", value)
                            }
                          />
                        </Form.Group>
                      </div>
                    </Col>
                    {/* <Col md={6} xs={12}>
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
                    </Col> */}

                    <Col md={6} xs={12}>
                      <div className='form-group'>
                        <TextField
                          name='city'
                          type='text'
                          icon={true}
                          placeholder={"City"}
                          autoComplete='off'
                          onChange={handleChange}
                          value={values.city}
                          onBlur={handleBlur}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <img src={City} alt='...' />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Error error={errors.city} touched={touched.city} />
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} xs={12}>
                      <div className='form-group mzero'>
                        <Form.Group controlId='validationFormik04'>
                          <GuidanceSelect
                            title={t("common.formHeadings.qualification")}
                            icon={true}
                            listItem={highEducation}
                            defaultValue=''
                            updateValues={(value) =>
                              setFieldValue("qualifications", value)
                            }
                          />
                        </Form.Group>
                      </div>
                    </Col>

                    <Col md={6} xs={12}>
                      <div className='form-group mzero'>
                        <Form.Group controlId='validationFormik04'>
                          {/* <Form.Label>Select-Gender</Form.Label> */}
                          <GuidanceSelect
                            title='Guidance Purpose'
                            icon={true}
                            listItem={GuidancePurpose}
                            defaultValue=''
                            updateValues={(value) =>
                              setFieldValue("guidance_purpose", value)
                            }
                          />
                        </Form.Group>
                      </div>
                    </Col>
                  </Row>

                  <div className='form-group mzero'>
                  {/* <img className='edit_icon_guidance' src={Edit} alt='...' /> */}
                    <TextareaAutosize
                      name='message'
                      icon={false}
                      className='textarea_set'
                      aria-label='minimum height'
                      minRows={3}
                      placeholder={t("common.placeHolders.message")}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // InputProps={{
                      //   startAdornment: (
                      //     <InputAdornment position='start'>
                      //       <img src={Edit} alt='...' />
                      //     </InputAdornment>
                      //   ),
                      // }}
                    />
                    <Error error={errors.message} touched={touched.message} />
                  </div>

                  <button type='submit' className='book_sess_btn'>
                    {isLoading ? (
                      <CircularProgress color='secondary' size={20} />
                    ) : (
                      t("guidanceBookPage.heading.3")
                    )}
                  </button>
                </form>
              </div>
            </Col>

            <Col md={2} xs={12}>
              <Container>
                {bookCounsellorAds.length > 0 && (
                  <Row>
                    <div
                      onClick={() => addEmail(bookCounsellorAds[0]?.add_email)}
                    >
                      <a
                        href={bookCounsellorAds[0]?.url_adds}
                        className='addimage098'
                        target='_blank'
                      >
                        <img
                          src={bookCounsellorAds[0]?.image}
                          alt='Image'
                          className='ads_guidence'
                        />
                      </a>
                    </div>
                  </Row>
                )}
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer loginPage={false} />
    </div>
  );
};

export default GuidancePage;
