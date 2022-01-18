import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Footer, Header } from "../../components";
import wrongpassword from "../../assets/images/ForgetPassword/wrong-password 1.png";
import "./index.scss";
import { Button, TextField } from "@mui/material";

function ForgetPassword() {
  return (
    <div className='noselect'>
      <Header loginPage={false} page='home' />
      <div className='main_div_ForPass'></div>
      <div className="container">
      <div className='ForPass_feild'>
      
        <Row>
          <Col lg={6} md={6} xs={12}>
            <img src={wrongpassword} alt='' srcset='' />
          </Col>

          <Col lg={6} md={6} xs={12}>
            <div className='ForPass_text'>
              <h2>Forgot <br /> Password?</h2>
              <p>Enter Your Mobile number associated with your account.</p>
              <input type="text" placeholder="Enter Your  Number"/>
              <h6>Request For Temprary Password</h6>

              <Button variant='outlined'>Login</Button>
            </div>
          </Col>
        </Row>
        </div>
      </div>

      <Footer loginPage={false} />
    </div>
  );
}

export default ForgetPassword;
