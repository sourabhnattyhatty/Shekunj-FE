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
import { TextareaAutosize } from "@mui/material";
import "aos/dist/aos.css";
import "animate.css";
import Aos from "aos";

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
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [gender, setGender] = useState();
  const [qualification, setQualification] = useState();

  const handleSetDay = (val) => {
    setDay(val);
  };
  const handleSetMonth = (val) => {
    setMonth(val);
  };
  const handleSetYear = (val) => {
    setYear(val);
  };
  const handleSetGender = (val) => {
    setGender(val);
  }
  const handleSetQualification = (val) => {
    setQualification(val);
  }


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
                <h2>Book a Session</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit.
                </p>
                <img src={Book_img} alt='' />

                <div className='g_book_img'>
                  <img src={Polygon1} alt='' data-aos='slide-right' />
                  <img src={Polygon2} alt='' data-aos='slide-left' />
                </div>
              </div>
            </Col>

            <Col md={7} xs={12}>
              <div className='guidance_book_form'>
                <form action=''>
                  <div className='form-group'>
                    <TextField
                      name='name'
                      type='text'
                      placeholder='Enter First Name'
                      autoComplete='off'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img src={User2} alt='...' />
                          </InputAdornment>
                        ),
                      }}
                      />
                  </div>

                  <div className='form-group'>
                    <TextField
                      name='name'
                      type='text'
                      placeholder='Enter Last Name'
                      autoComplete='off'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img src={User2} alt='...' />
                          </InputAdornment>
                        ),
                      }}
                      />
                  </div>

                  <div className='form-group'>
                    <TextField
                      name='name'
                      type='text'
                      placeholder='Enter Your Email'
                      autoComplete='off'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img src={User2} alt='...' />
                          </InputAdornment>
                        ),
                      }}
                      />
                  </div>

                  <div className='form-group'>
                    <TextField
                      name='name'
                      type='text'
                      placeholder='Enter Mobile Number'
                      autoComplete='off'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img src={User2} alt='...' />
                          </InputAdornment>
                        ),
                      }}
                      />
                  </div>

                  <div className='form-group'>
                    <TextField
                      name='name'
                      type='text'
                      placeholder='Enter Alternate Number'
                      autoComplete='off'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img src={User2} alt='...' />
                          </InputAdornment>
                        ),
                      }}
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
                      array={["Female", "Male"]}
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
                    />
                  </div>
                  <div className='form-group mzero'>
                    <TextareaAutosize
                      className='textarea_set'
                      aria-label='minimum height'
                      minRows={7}
                      placeholder='Enter Your Message'
                    />
                  </div>

                  <button className='book_sess_btn'>Book a Session</button>
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
