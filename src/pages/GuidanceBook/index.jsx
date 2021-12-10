import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Book_img from "../../assets/images/Guidance/Book_img.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import User from "../../assets/icons/user.png";
import "./index.scss";
import '../LoginPage/LoginForm/LoginTabs/index.scss'

const GuidancePage = () => {
  return (
    <div>
      <Header loginPage={true} page='guidance' />
      <div className='guidance_book'>
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div className='guidance_con'>
                <h2>Book a Session</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit.
                </p>
                <img src={Book_img} alt='' />
              </div>
            </Col>

            <Col md={6} xs={12}>
              <div className='guidance_book_form'>
              <TextField
              name='name'
              type='text'
              // className='form-control'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <img src={User} alt='...' />
                  </InputAdornment>
                ),
              }}
            />
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
