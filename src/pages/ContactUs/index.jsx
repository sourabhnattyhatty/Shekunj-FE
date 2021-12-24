import React from "react";
import "./index.scss";
import { Header, Footer, Carousel, ScrollToTop, SEO } from "../../components";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/material";
import mail2 from "../../assets/icons/mail2.png";

function ContactUs() {
  return (
    <div>
      <Header loginPage={false} page='home' />
      <div className='main_div_conUs'>
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div className='conUs_tit'>
                <h3>Contact us</h3>
                <h2>How can we help you?</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='add_main'>
        <div className='add_set'>
          <Container>
            <Row>
              <Col md={6} xs={12}>
                <div className='add_con'>
                  <h3>For Information</h3>
                  <Row>
                    <Col md={6} xs={12}>
                      <p>
                        <img src={mail2} alt='' /> Info@shekunj.com
                      </p>
                    </Col>

                    <Col md={6} xs={12}>
                      <p>
                        <img src={mail2} alt='' /> Support@shekunj.com
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col md={6} xs={12}>
                <div className='ConUs_form'>
                  <p>Any query or Suggestion? Feel free to contact us </p>

                  <form action=''>
                    <div className='form-group'>
                      <TextField
                        name='name'
                        type='text'
                        placeholder='Enter First Name'
                        autoComplete='off'
                      />

                      <TextField
                        name='name'
                        type='text'
                        placeholder='Enter First Name'
                        autoComplete='off'
                      />

                      <TextField
                        name='name'
                        type='text'
                        placeholder='Enter First Name'
                        autoComplete='off'
                      />

                      <TextareaAutosize
                        className='textarea_set'
                        aria-label='minimum height'
                        minRows={3}
                        placeholder='Enter Your Message'
                      />
                    </div>

                    <button class='send_btn'>Send</button>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <ScrollToTop />

      <Footer loginPage={false} />
    </div>
  );
}

export default ContactUs;
