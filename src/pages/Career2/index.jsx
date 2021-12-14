import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel, Footer, Header, ScrollToTop, SEO } from "../../components";
import christian_collage from "../../assets/images/Career/christian_collage.png";
import pune_college from "../../assets/images/Career/pune_college.png";
import Acoordian from "../../pages/Courses/Accordian/index";
import "../HomePage/index.scss";
import "./index.scss";
import { constants } from "../../utils";
import { ImageListItem, ImageListItemBar } from "@mui/material";

const CareerPage2 = () => {
  const { t } = useTranslation();

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' />

      <div className='mainDiv_career'>
        <Container>
          <div className='career_tit'>
            <h2>Government Exams</h2>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <Acoordian />
            </Col>

            <Col md={8} xs={12}>
              <div className='career_box'>
                <Row>
                  <Col md={7} xs={12}>
                    <h3>RRB NTPC 2021</h3>
                    <p>
                      Vellore, Tamil Nadu • <span>Private</span>
                    </p>
                    <ul>
                      <li>
                        <span>Fees</span> : ₹ 1,53,200{" "}
                      </li>
                      <li>
                        <span>Exam</span> : NEET
                      </li>
                    </ul>
                    <button className='btn_viewCour'>View all Courses</button>
                  </Col>

                  <Col md={5} xs={12}>
                    <div className='career_img'>
                      <ImageListItem>
                        <img srcSet={pune_college} alt='...' loading='lazy' />
                        <ImageListItemBar title='+9' subtitle=' Photos' />
                      </ImageListItem>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className='career_box'>
                <Row>
                  <Col md={7} xs={12}>
                    <h3>RRB ALP 2021</h3>
                    <p>
                      Vellore, Tamil Nadu • <span>Private</span>
                    </p>
                    <ul>
                      <li>
                        <span>Fees</span> : ₹ 1,53,200{" "}
                      </li>
                      <li>
                        <span>Exam</span> : NEET
                      </li>
                    </ul>
                    <button className='btn_viewCour'>View all Courses</button>
                  </Col>

                  <Col md={5} xs={12}>
                    <div className='career_img'>
                      <ImageListItem>
                        <img srcSet={pune_college} alt='...' loading='lazy' />
                        <ImageListItemBar title='+9' subtitle=' Photos' />
                      </ImageListItem>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className='career_box'>
                <Row>
                  <Col md={7} xs={12}>
                    <h3>RPSF 2021</h3>
                    <p>
                      Vellore, Tamil Nadu • <span>Private</span>
                    </p>
                    <ul>
                      <li>
                        <span>Fees</span> : ₹ 1,53,200{" "}
                      </li>
                      <li>
                        <span>Exam</span> : NEET
                      </li>
                    </ul>
                    <button className='btn_viewCour'>View all Courses</button>
                  </Col>

                  <Col md={5} xs={12}>
                    <div className='career_img'>
                      <ImageListItem>
                        <img srcSet={pune_college} alt='...' loading='lazy' />
                        <ImageListItemBar title='+9' subtitle=' Photos' />
                      </ImageListItem>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className='career_box'>
                <Row>
                  <Col md={7} xs={12}>
                    <h3>Railway Tier-I </h3>
                    <p>
                      Vellore, Tamil Nadu • <span>Private</span>
                    </p>
                    <ul>
                      <li>
                        <span>Fees</span> : ₹ 1,53,200{" "}
                      </li>
                      <li>
                        <span>Exam</span> : NEET
                      </li>
                    </ul>
                    <button className='btn_viewCour'>View all Courses</button>
                  </Col>

                  <Col md={5} xs={12}>
                    <div className='career_img'>
                      <ImageListItem>
                        <img srcSet={pune_college} alt='...' loading='lazy' />
                        <ImageListItemBar title='+9' subtitle=' Photos' />
                      </ImageListItem>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className='career_box'>
                <Row>
                  <Col md={7} xs={12}>
                    <h3>Railway Group D</h3>
                    <p>
                      Vellore, Tamil Nadu • <span>Private</span>
                    </p>
                    <ul>
                      <li>
                        <span>Fees</span> : ₹ 1,53,200{" "}
                      </li>
                      <li>
                        <span>Exam</span> : NEET
                      </li>
                    </ul>
                    <button className='btn_viewCour'>View all Courses</button>
                  </Col>

                  <Col md={5} xs={12}>
                    <div className='career_img'>
                      <ImageListItem>
                        <img srcSet={pune_college} alt='...' loading='lazy' />
                        <ImageListItemBar title='+9' subtitle=' Photos' />
                      </ImageListItem>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <ScrollToTop />

      <Footer loginPage={false} />
    </div>
  );
};

export default CareerPage2;
