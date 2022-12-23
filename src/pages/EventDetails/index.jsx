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
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import GuidanceSelect from "./Select";
// import { withFormik } from "formik";
import { routingConstants } from "../../utils/constants";
import { CircularProgress, TextareaAutosize } from "@mui/material";
import { bookEvent, localStData } from "../../store/events/action";
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
import City from "../../assets/icons/city.png";
import { Button, Typography, Modal } from "@mui/material";

const EventDetails = () => {
  let a = JSON.parse(localStorage.getItem('login_data'))
  let eventData = JSON.parse(localStorage.getItem('event_data'))
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = useState(getModalStyle);
  // const [modalData, setData] = useState();

  const history = useHistory();
  const { events } = useSelector((state) => state.eventsReducer);
  const { bookEvents } = useSelector((state) => state.eventsReducer);
  const { user } = useSelector((state) => state.authReducer);
  const { registerData } = useSelector((state) => state.eventsReducer);

  const dispatch = useDispatch();


  // const { isLoading } = useSelector((state) => state.eventReducer);
  const { lan } = useSelector((state) => state.languageReducer);
  const { t } = useTranslation();
  const extraInfoCopy = events;
  useEffect(() => {
  }, [user])

  const handleOpen = (index) => {
    if (bookEvents == 200) {
      setOpen(true);
    }
    // setData(data[index]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [image, setImage] = useState("NA");
  const [localData, setLocalData] = useState();
  const [adds, setAdds] = useState([]);
  const [eventDetailsBoxAds, setEventDetailsBoxAds] = useState([]);
  const [extraInfo, setExtraInfo] = useState([]);
  const [name, setName] = useState([]);
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
    gender: Yup.string().required("Select Gender").oneOf(["Male", "Female"]),
    // extra_info_reg:Yup.string().required("enter the value")
  });
  useEffect(() => {

  }, [registerData])
  const initialValues = {
    name: "",
    last_name: "",
    email: "",
    contact: "",
    city: "",
    gender: "",
  };

  useEffect(() => {
    dispatch(localStData());
    getProfileInfo();
    let a = JSON.parse(localStorage.getItem('login_data'));
    setLocalData(a)
  }, []);
  useEffect(() => {
    let d = localStorage.setItem('null_Data', JSON.stringify(user))
  }, [!registerData])
  const getProfileInfo = () => {
    formik.setValues({
      name: eventData == null ? a?.name : eventData?.name,
      last_name: eventData == null ? a?.last_name : eventData?.last_name,
      email: eventData == null ? a?.email : eventData?.email,
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,

    onSubmit: (values, setFieldValue) => {
      let finalObj = {};
      for (let i = 0; i < extraInfo.length; i++) {
        Object.assign(finalObj, extraInfo[i]);
      }
      values = {
        name: values.name,
        last_name: values.last_name,
        email: values.email,
        event_id: parseInt(id),
        qualifications: values?.qualifications,
        gender: values?.gender,
        extra_info_reg: finalObj,
      };
      dispatch(bookEvent(values));
    },
  });

  // const {
  //   values,
  //   errors,
  //   touched,
  //   formik.handleChange,
  //   formik.handleBlur,
  //   handleSubmit,
  //   setFieldValue,
  //   setFieldTouched,
  //   initialValues,
  // } = useFormik({
  //   initialValues: {
  //     name: user?.name || "",
  //     last_name: user?.last_name || "",
  //     email: user?.email || "",
  //     contact: "",
  //     city: "",
  //     gender: "",
  //     // extra_info_reg:""
  //   },
  //   validationSchema,

  //   onSubmit(values, actions) {
  //     const date_of_birth = moment(`${values.date_of_birth}`).format(
  //       "YYYY-MM-DD",
  //     );
  //     let finalObj = {};
  //     for (let i = 0; i < extraInfo.length; i++) {
  //       Object.assign(finalObj, extraInfo[i]);
  //     }

  //     values = {
  //       ...values,
  //       // date_of_birth: dateOfBirth,
  //       event_id: parseInt(id),
  //       qualifications: values?.qualifications,
  //       gender: values?.gender,
  //       extra_info_reg: finalObj,
  //     };

  //     setLocalData(values)
  //     dispatch(bookEvent(values));
  //   },
  // });
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
          }
        });
      },
    );
  }, []);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  const addEmail = (email) => {
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

  useEffect(() => {
    handleOpen();
  }, [bookEvents]);

  let evalData = eval(events.extra_info);

  const whatsAppModal = () => {
    if (events && events?.whatsapp_group_link?.join_group && bookEvents == 200) {
      return (
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={open}
          onClose={handleClose}
          className='ModalBoxEvent'
        >
          <div className='ModalBodyBoxEvent'>
            <div className='ModalHeadEvent'>
              <Typography variant='h6' id='modal-title'>
                Congratulations... you have been registered!
              </Typography>
            </div>
            <div className='ModalMiddleEvent'>
              <Typography variant='h6' id='simple-modal-description'>
                You can join our whatsapp group.
              </Typography>
              <a href='https://api.whatsapp.com/send?text=%20http%3A%2F%2Flocalhost%3A3000'
                target="_blank"
              >
                <Button variant='contained' className='ModalButtonEvent'>
                  JOIN WHATSAPP GROUP
                </Button>
              </a>
              <divider />
              <Typography variant='h4'>
                Want to learn more? <br />
                Checkout our other events
              </Typography>
              <div className='ModalLinkEvent'>
                <Link to={routingConstants.MORE_EVENT}>
                  <strong>Lets have a look... Shekunj Events!</strong>
                </Link>
              </div>
            </div>
            <div className='ModalBottomEvent'>
              <Typography variant='h6' id='modal-title'>
                are you excited to learn ? <br />
                see you soon !
              </Typography>
            </div>
          </div>
        </Modal>
      )
    }
    else if (events && events?.whatsapp_group_link?.join_group == false && bookEvents == 200) {
      return (
        <Modal
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
          open={open}
          onClose={handleClose}
          className='ModalBoxEvent'
        >
          <div className='ModalBodyBoxEvent2'>
            <div className='ModalHeadEvent'>
              <Typography variant='h6' id='modal-title'>
                Congratulations... you have been registered!
              </Typography>
            </div>
            <div className='ModalMiddleEvent'>
              <Typography variant='h3' id='simple-modal-description'>
                Thank You !
              </Typography>
              <br />
              <divider />
              <Typography variant='h4'>
                Want to learn more? <br />
                Checkout our other events
              </Typography>
              <div className='ModalLinkEvent'>
                <Link to={routingConstants.MORE_EVENT}>
                  <strong>Lets have a look... Shekunj Events!</strong>
                </Link>
              </div>
            </div>
            <div className='ModalBottomEvent'>
              <Typography variant='h6' id='modal-title'>
                are you excited to learn ? <br />
                see you soon !
              </Typography>
            </div>
          </div>
        </Modal>
      )
    }

  }

  return (
    <div>
      {/* <SEO title='Sheकुंज - Career' /> */}
      <Header loginPage={true} page='more' />

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
                  <form onSubmit={formik.handleSubmit}
                  >
                    <Row>
                      <Col md={6} xs={12}>
                        <div className='form-group'>
                          <TextField
                            name='name'
                            type='text'
                            // placeholder={user?.name}
                            placeholder='Name'
                            autoComplete='off'
                            onChange={formik.handleChange}
                            // value={values.name}
                            // value={user?.name ? user?.name : values.name}
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position='start'>
                                  <img src={User2} alt='...' />
                                </InputAdornment>
                              ),
                            }}
                          />
                          {formik.touched.name && formik.errors.name && (
                            <div className="fv-plugins-message-container">
                              <div className="fv-help-block text-danger">
                                {formik.errors.name}
                              </div>
                            </div>
                          )}
                          {/* <Error error={errors.name} touched={touched.name} /> */}
                        </div>
                      </Col>

                      <Col md={6} xs={12}>
                        <div className='form-group'>
                          <TextField
                            name='last_name'
                            type='text'
                            // placeholder={user?.last_name}
                            placeholder='Lastname'
                            autoComplete='off'
                            onChange={formik.handleChange}
                            value={formik.values.last_name}
                            onBlur={formik.handleBlur}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position='start'>
                                  <img src={User3} alt='...' />
                                </InputAdornment>
                              ),
                            }}
                          />
                          {formik.touched.last_name && formik.errors.last_name && (
                            <div className="fv-plugins-message-container">
                              <div className="fv-help-block text-danger">
                                {formik.errors.name}
                              </div>
                            </div>
                          )}
                          {/* <Error
                            error={errors.last_name}
                            touched={touched.last_name}
                          /> */}
                        </div>
                      </Col>
                    </Row>

                    <div className='form-group'>
                      <TextField
                        name='email'
                        type='email'
                        // placeholder={user?.email}
                        placeholder='Email'
                        autoComplete='off'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='start'>
                              <img src={mail2} alt='...' />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block text-danger">
                            {formik.errors.email}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className='form-group'>
                      <TextField
                        name='contact'
                        type='number'
                        placeholder={"Contact"}
                        autoComplete='off'
                        value={formik.values.contact}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='start'>
                              <img src={phone} alt='...' />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {formik.touched.contact && formik.errors.contact && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block text-danger">
                            {formik.errors.contact}
                          </div>
                        </div>
                      )}
                    </div>
                    <Row>
                      <Col md={6} xs={12}>
                        <div className='form-group mzero'>
                          <Form.Group controlId='validationFormik04'>
                            <GuidanceSelect
                              title={"Gender"}
                              icon={true}
                              listItem={["Female", "Male"]}
                              defaultValue=''
                              updateValues={(value) =>
                                formik.setFieldValue("gender", value)
                              }
                            />
                            {formik.touched.gender && formik.errors.gender && (
                              <div className="fv-plugins-message-container">
                                <div className="fv-help-block text-danger">
                                  {formik.errors.gender}
                                </div>
                              </div>
                            )}
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
                            onChange={formik.handleChange}
                            value={formik.values.city}
                            onBlur={formik.handleBlur}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position='start'>
                                  <img src={City} alt='...' />
                                </InputAdornment>
                              ),
                            }}
                          />
                          {formik.touched.city && formik.errors.city && (
                            <div className="fv-plugins-message-container">
                              <div className="fv-help-block text-danger">
                                {formik.errors.city}
                              </div>
                            </div>
                          )}
                        </div>
                      </Col>
                    </Row>

                    {events.id &&
                      Object.entries(events.extra_info).map((key, index) => {

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

                                    let newIndex = extraInfo.findIndex(
                                      (item) => {

                                        return Object.keys(item)[0] == key[0];
                                      },
                                    );

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
                                onBlur={formik.handleBlur}
                              />
                              {formik.touched.extra_info_reg && formik.errors.extra_info_reg && (
                                <div className="fv-plugins-message-container">
                                  <div className="fv-help-block text-danger">
                                    {formik.errors.extra_info_reg}
                                  </div>
                                </div>
                              )}
                            </div>
                            {/* </Col>
                            </Row> */}
                          </div>
                        );
                      })}
                    <button
                      type='submit'
                      className='book_event_btn'
                      onClick={() => {
                        {
                          bookEvents == 200 && handleOpen();
                        }
                      }}
                    >
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
      {/* <Button
            onClick={() => {
              handleOpen();
            }}
          >
            Open
          </Button> */}
      {
        whatsAppModal()
      }
      <Footer loginPage={false} />
    </div>
  );
};

export default EventDetails;
