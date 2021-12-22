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
import "./index.scss";
import "../LoginPage/LoginForm/LoginTabs/index.scss";
import { TextareaAutosize } from "@mui/material";
import "aos/dist/aos.css";
import "animate.css";
import Aos from "aos";

const GuidancePage = () => {
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
                  <img src={Polygon1} alt='' data-aos="slide-right"/>
                  <img src={Polygon2} alt='' data-aos="slide-left"/>
                </div>
              </div>
            </Col>

            <Col md={7} xs={12}>
              <div className='guidance_book_form'>
                <form action=''>
                  {/* <div className='form-group mzero'>
                    <GuidanceSelect title='User' icon={true} />
                  </div> */}

                  <div className='form-group'>
                    <TextField
                      name='name'
                      type='text'
                      placeholder='Enter First Name'
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
                        <GuidanceSelect title='Day' icon={false} />
                      </div>
                    </Col>
                    <Col md={4} xs={12}>
                      <div className='form-group mzero'>
                        <GuidanceSelect title='Month' icon={false} />
                      </div>
                    </Col>
                    <Col md={4} xs={12}>
                      <div className='form-group mzero'>
                        <GuidanceSelect title='Year' icon={false} />
                      </div>
                    </Col>
                  </Row>
                  <div className='form-group mzero'>
                    <GuidanceSelect title='Gender' icon={true} />
                  </div>
                  <div className='form-group mzero'>
                    <GuidanceSelect title='Qualifications' icon={true} />
                  </div>
                  <div className='form-group mzero'>
                    <GuidanceSelect title='Course Looking For' icon={true} />
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
