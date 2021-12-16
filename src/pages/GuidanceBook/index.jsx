import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GuidanceSelect from "./Select";

import Book_img from "../../assets/images/Guidance/Book_img.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import User2 from "../../assets/icons/user2.png";
import User from "../../assets/icons/user.png";
import "./index.scss";
import "../LoginPage/LoginForm/LoginTabs/index.scss";
import { TextareaAutosize } from "@mui/material";

const GuidancePage = () => {
  return (
    <div>
      <Header loginPage={true} page='guidance' />
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
              </div>
            </Col>

            <Col md={7} xs={12}>
              <div className='guidance_book_form'>
                <form action=''>
                  <div className='form-group mzero'>
                    <GuidanceSelect title='User' icon={true} />
                  </div>

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
                    className="textarea_set"
                      aria-label='minimum height'
                      minRows={7}
                      placeholder='Enter Your Message'
                    />
                  </div>

                  <button className="book_sess_btn">Book a Session</button>
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
