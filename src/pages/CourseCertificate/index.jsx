import { Container } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import { Row, Col } from "react-bootstrap";
import { LinearProgress } from "@mui/material";
import { Header, Footer, ScrollToTop } from "../../components";
import "./index.scss";
import "../CoursesModule/index.scss";
import swati_jain from "../../assets/images/Courses/swati_jain.png";
import check from "../../assets/images/Courses/check.png";
import Certificate from "../../assets/images/Courses/Certificate.png";
import Dawnload from "../../assets/images/Courses/Dawnload.png";
import Share from "../../assets/images/Courses/Share.png";
import fullscreen_icon from "../../assets/images/Courses/fullscreen_icon.png";
import "./index.scss";

function CourseTest() {
  return (
    <div>
      <Header loginPage={true} page='courses' />

      <div className='cou_resultBg'>
        <Container>
          <Row>
            <Col md={5} xs={12}>
              <div className='user_certifi'>
                <div className='user_pro'>
                  <img src={swati_jain} alt='' />
                  <h3>Swati Jain</h3>
                </div>

                <div className='skills'>
                  <h4>Skills Earned</h4>
                  <div className='skill_flex'>
                    <ul>
                      <li>
                        <img src={check} alt='' /> Adobe Photoshop
                      </li>
                      <li>
                        <img src={check} alt='' /> Corel Draw
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img src={check} alt='' /> Adobe Illustrator
                      </li>
                      <li>
                        <img src={check} alt='' /> Figma/Prototype
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6} xs={12} className='offset-lg-1'>
              <p className='cou_tit'>Course & Certificate</p>
              <div className='certi_img'>
                <p>
                  <div class='content'>
                    <a
                      href='#'
                      target='_blank'
                    >
                      <div class='content-overlay'></div>
                      <img src={Certificate} alt='' />
                      <div class='content-details fadeIn-bottom'>
                        <h3 class='content-title'><img src={fullscreen_icon} alt="" /></h3>
                        <p class='content-text'>View Full Certificate</p>
                      </div>
                    </a>
                  </div>
                </p>
                <p>
                  <img src={Dawnload} alt='' />
                  <br />
                  <img src={Share} alt='' />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <ScrollToTop />
      <Footer loginPage={false} />
    </div>
  );
}

export default CourseTest;
