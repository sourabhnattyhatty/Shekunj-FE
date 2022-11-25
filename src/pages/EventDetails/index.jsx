import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AccordionComponent, Footer, Header, SEO } from "../../components";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import Moment from "react-moment";
import axios from "axios";
import { Error } from "../../components";
import TextField from "@mui/material/TextField";
import { useFormik, } from "formik";
import Form from "react-bootstrap/Form";
import GuidanceSelect from "./Select";
// import { withFormik } from "formik";
import { routingConstants } from "../../utils/constants";
import { CircularProgress, TextareaAutosize } from "@mui/material";
import { bookEvent } from "../../store/events/action";
import moment from "moment";
import InputAdornment from "@mui/material/InputAdornment";
import User2 from "../../assets/icons/user2.png";
import User3 from "../../assets/icons/user3.png";
import mail2 from "../../assets/icons/mail2.png";
import phone from "../../assets/icons/phone2.png";
import { getAllEvents, singleEventDetails } from "../../store/events/action";
import { getUserProfile } from "../../store/auth/action";
import "../HomePage/index.scss";
import "./index.scss";
import noImageIcon from "../../assets/images/no-image.jpeg";
import { adsList } from "../../store/ads";

const EventDetails = () => {
  const { id } = useParams();
  // console.log("EventIdddd",events.extra_info)
  const history = useHistory();
  const { events } = useSelector((state) => state.eventsReducer);
  const { user } = useSelector((state) => state.authReducer);
  console.log("usertype", typeof user);
  console.log("userdata ---->", user);
  const dispatch = useDispatch();

  console.log("Eventsssssss", events);
  // const { isLoading } = useSelector((state) => state.eventReducer);
  const { lan } = useSelector((state) => state.languageReducer);
  const { t } = useTranslation();
  const extraInfoCopy = events;

  const [image, setImage] = useState("NA");
  const [adds, setAdds] = useState([]);
  const [eventDetailsBoxAds, setEventDetailsBoxAds] = useState([]);
  const [extraInfo, setExtraInfo] = useState([]);
  const [name, setName] = useState([]);
  console.log("EventExtraInfo", events?.extra_info);

  const highEducation = ["10th", "12th", "Graduation", "Post Graduation"];
  const GenderCategory = ["male", "female"];
  const GuidancePurpose = [
    "Career Guidance",
    "Business Support",
    "Medical Guidance",
    "Personal issues",
    "other",
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required(t("login.form1.firstNameError.required")),
    last_name: Yup.string().required(t("login.form1.lastNameError.required")),
    city: Yup.string().required("city is required"),
    email: Yup.string()
      .required(t("login.form1.emailError.required"))
      .email(t("login.form1.emailError.invalid")),
    contact: Yup.number().positive().required("contact number is required"),
    // gender: Yup.string().required("gender is required"),
    // extra_info_reg:Yup.mixed().required("please enter value")
  });

// let myName = user?.name;
// let myNameLast = user?.last_name;
// let myEmail= user?.email;

//   let valueObj = {
//     firstName: myName,
//     lastName: myNameLast,
//     email: myEmail,
//   };

//   console.log("valueObj",valueObj)
 
//   let myArray= Object.values(valueObj)
//   console.log("ObjectDynamic",myArray[0])

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    initialValues,
  } = useFormik({
    initialValues: {
      name: user?.name || "",
      last_name: user?.last_name || "" ,
      email: user?.email || "",
      contact: "",
      city: "",
      gender: "",
      // extra_info_reg:""
    },
    validationSchema,
    onSubmit(values) {
      const date_of_birth = moment(`${values.date_of_birth}`).format(
        "YYYY-MM-DD",
      );
      console.log("extra_info_regetlfsd", extraInfo);
      let finalObj = {};
      for (let i = 0; i < extraInfo.length; i++) {
        Object.assign(finalObj, extraInfo[i]);
      }
      console.log("onChange Event", finalObj);
      values = {
        ...values,
        // date_of_birth: dateOfBirth,
        event_id: parseInt(id),
        qualifications: values?.qualifications,
        gender: values?.gender,
        extra_info_reg: finalObj,
        // obj1:myArray[0].toString(),
        // obj2:myArray[1].toString(),
        // obj3:myArray[2].toString(),
      };
      dispatch(bookEvent(values));
    },
  });

  console.log("initialFormValue",initialValues)

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>code below >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
  //             return item.image_type == "event_detail";
  //           });
  //           let findImage =
  //             filterArray.length > 0 ? filterArray[0].image : "NA";
  //           setImage(findImage);
  //           setEventDetailsBoxAds(filterArray);
  //         }
  //       })   .catch((error) => {
  //         // setMessage("No data found");
  //         console.log(error);
  //     })
  //   });
  //   dispatch(adsList());
  // }, [dispatch]);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Latest code >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  useEffect(() => {
    dispatch(adsList());
    navigator.geolocation.getCurrentPosition(
      async function (position, values) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        let params = {
          latitude: latitude.toString(),
          longitude: longitude.toString(),
        };
        axios
          .get(
            `/private_adds/private_add?latitude=${latitude}&longitude=${longitude}`,
          )
          .then((response) => {
            if (response && response.data.results.length > 0) {
              let filterArray1 = response.data.results.filter((item, index) => {
                return item.image_type == "event_detail";
              });
              setEventDetailsBoxAds(filterArray1);
              // console.log("filterArray1event_detail",filterArray1)
            }
          });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
        // alert("Your location is blocked")
        axios.get(`/private_adds/private_add`).then((response) => {
          if (response && response.data.results.length > 0) {
            let filterArray1 = response.data.results.filter((item, index) => {
              return item.image_type == "event_detail";
            });
            setEventDetailsBoxAds(filterArray1);
            // console.log("filterArray1coursebox",filterArray1)
          }
        });
      },
    );
  }, []);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
          add_email: email,
          latitude: params.latitude.toString(),
          longitude: params.longitude.toString(),
        })
        .then((response) => {
          console.log("addEmailresponse", response);
        });
    });
  };

  useEffect(() => {
    dispatch(singleEventDetails(id));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, id, lan]);

  useEffect(() => {
    dispatch(getUserProfile(id));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, id, lan]);

  let evalData = eval(events.extra_info);

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' subPage='colleges' />

      {console.log("eventss---Detail", events)}
      {/* {events?.event_list?.length > 0 ? (
            events?.event_list?.map((c)=>{
              console.log("c", c);
              return (
                  <> */}
      <div className='DetailMainDiv_career noselect'>
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div className='deatil_box'>
                <img
                  src={events && events.image}
                  class='card-img-top'
                  alt='...'
                ></img>
                <h4 className='mb-3'>{events && events.title}</h4>
                <Row>
                  {events.url && (
                    <Col md={6} xs={12}>
                      <h6>
                        visit link:
                        <Link to={events?.url} target='_blank'>
                          {events && events.url}
                        </Link>
                      </h6>
                    </Col>
                  )}
                </Row>

                {events.about_event && (
                  <p style={{ textAlign: "justify" }} className='mt-3'>
                    <span></span>{" "}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<div>${events.about_event}</div>`,
                      }}
                    />
                  </p>
                )}
              </div>
            </Col>

            <Col md={6} xs={12}>
              <div className='event_con'>
                <p className='event-form-title'>Registration Form</p>
                <div className='Event_book_form'>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} xs={12}>
                        <div className='form-group'>
                          <TextField
                            name='name'
                            type='text'
                            placeholder={user?.name}
                            autoComplete='off'
                            onChange={handleChange}
                            // value={values.name}
                            value={values.name}
                            onBlur={handleBlur}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position='start'>
                                  <img src={User2} alt='...' />
                                </InputAdornment>
                              ),
                            }}
                          />
                          <Error error={errors.name} touched={touched.name} />
                        </div>
                      </Col>

                      <Col md={6} xs={12}>
                        <div className='form-group'>
                          <TextField
                            name='last_name'
                            type='text'
                            placeholder={user?.last_name}
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
                        name='email'
                        type='email'
                        placeholder={user?.email}
                        autoComplete='off'
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='start'>
                              <img src={mail2} alt='...' />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Error error={errors.email} touched={touched.email} />
                    </div>

                    <div className='form-group'>
                      <TextField
                        name='contact'
                        type='number'
                        placeholder={"Contact"}
                        autoComplete='off'
                        value={values.contact}
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
                      <Error error={errors.contact} touched={touched.contact} />
                    </div>
                    <Row>
                      <Col md={6} xs={12}>
                        <div className='form-group mzero'>
                          <Form.Group controlId='validationFormik04'>
                            <GuidanceSelect
                              title={"Gender"}
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

                      <Col md={6} xs={12}>
                        <div className='form-group'>
                          <TextField
                            name='city'
                            type='text'
                            placeholder={"City"}
                            autoComplete='off'
                            onChange={handleChange}
                            value={values.city}
                            onBlur={handleBlur}
                          />
                          <Error error={errors.city} touched={touched.city} />
                        </div>
                      </Col>
                    </Row>

                    {events.id &&
                      Object.entries(events.extra_info).map((key, index) => {
                        console.log(
                          "Object.entries",
                          Object.entries(events?.extra_info),
                        );
                        return (
                          <div>
                            {/* <Row>
                            <Col md={6} xs={12}> */}
                            <div className='form-group'>
                              <TextField
                                name='extra_info_reg'
                                type='text'
                                placeholder={key[0]}
                                autoComplete='off'
                                onChange={(e) => {
                                  if (extraInfo.length < 0) {
                                    extraInfo.push({
                                      [key[0]]: e.target.value,
                                    });
                                  } else {
                                    console.log(
                                      "Object.keys(extraInfo",
                                      extraInfo,
                                    );
                                    let newIndex = extraInfo.findIndex(
                                      (item) => {
                                        console.log(
                                          "item00000",
                                          Object.keys(item),
                                        );
                                        return Object.keys(item)[0] == key[0];
                                      },
                                    );
                                    console.log("index0000", newIndex);
                                    if (newIndex != -1) {
                                      extraInfo[newIndex][key[0]] =
                                        e.target.value;
                                    } else {
                                      extraInfo.push({
                                        [key[0]]: e.target.value,
                                      });
                                    }
                                  }
                                  setExtraInfo([...extraInfo]);
                                }}
                                onBlur={handleBlur}
                              />
                              {/* <Error
                          error={errors.extra_info_reg}
                          touched={touched.extra_info_reg}
                        /> */}
                            </div>
                            {/* </Col>
                            </Row> */}
                          </div>
                        );
                      })}

                    <button type='submit' className='book_event_btn'>
                      Register Here
                    </button>
                  </form>
                </div>
              </div>
            </Col>

            <hr />
          </Row>

          <>
            <div className='Row'>
              {/* <Col md={1} xl={12}> */}
              {eventDetailsBoxAds.length > 0 && (
                <div
                  className='slide-img'
                  onClick={() => addEmail(eventDetailsBoxAds[0]?.add_email)}
                >
                  <a href={eventDetailsBoxAds[0]?.url_adds} target='_blank'>
                    <img
                      src={eventDetailsBoxAds[0]?.image}
                      alt='Image'
                      className='google_add_box_img_Add'
                    />
                  </a>
                  <div className='overlay'></div>
                </div>
              )}
              {/* </Col> */}
            </div>
          </>
        </Container>
      </div>

      <Footer loginPage={false} />
    </div>
  );
};

export default EventDetails;
