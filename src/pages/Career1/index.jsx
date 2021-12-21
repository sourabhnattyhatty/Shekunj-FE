import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImageListItem, ImageListItemBar } from "@mui/material";

import {
  AccordionComponent,
  Footer,
  Header,
  ScrollToTop,
  SEO,
} from "../../components";

import pune_college from "../../assets/images/Career/pune_college.png";
import "../HomePage/index.scss";
import "./index.scss";

const CareerPage1 = () => {
  const STATES = {
    name: "STATES",
    rows: [
      {
        id: 1,
        name: "Madhya Pardesh",
        isChecked: false,
      },
      {
        id: 2,
        name: "Maharashtra",
        isChecked: false,
      },
      {
        id: 3,
        name: "Bihar",
        isChecked: false,
      },
      {
        id: 4,
        name: "Goa",
        isChecked: false,
      },
      {
        id: 5,
        name: "Punjab",
        isChecked: false,
      },
    ],
  };

  const OWNERSHIP = {
    name: "OWNERSHIP",
    rows: [
      {
        id: 1,
        name: "Private",
        isChecked: false,
      },
      {
        id: 2,
        name: "Public",
        isChecked: false,
      },
    ],
  };

  const EDUCATION_BOARD = {
    name: "EDUCATION_BOARD",
    rows: [
      {
        id: 1,
        name: "Madhya Pradesh Board Of\n Secondary Education (MPBSE)",
        isChecked: false,
      },
      {
        id: 2,
        name: "Central Board Of Secondary\n Education (CBSE)",
        isChecked: false,
      },
      {
        id: 3,
        name: "National Institute Of Open\n Schooling (NIOS)",
        isChecked: false,
      },
      {
        id: 4,
        name: "Indian School Certificate (ISC)",
        isChecked: false,
      },
      {
        id: 5,
        name: "Board Of High School And\n Intermediate Education\n Uttar Pradesh (UP Board)",
        isChecked: false,
      },
      {
        id: 6,
        name: "Bihar School Examination Board (BSEB)",
        isChecked: false,
      },
      {
        id: 7,
        name: "Madhya Pradesh Board Of\n Secondary Education (MPBSE)",
        isChecked: false,
      },
      {
        id: 8,
        name: "Central Board Of Secondary\n Education (CBSE)",
        isChecked: false,
      },
      {
        id: 9,
        name: "National Institute Of Open\n Schooling (NIOS)",
        isChecked: false,
      },
      {
        id: 10,
        name: "Indian School Certificate (ISC)",
        isChecked: false,
      },
      {
        id: 11,
        name: "Board Of High School And\n Intermediate Education\n Uttar Pradesh (UP Board)",
        isChecked: false,
      },
    ],
  };

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' />

      <div className='mainDiv_career'>
        <Container>
          <div className='career_tit'>
            <h2>Top Schools in India</h2>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <AccordionComponent
                type='schools'
                states={STATES}
                ownership={OWNERSHIP}
                educationBoard={EDUCATION_BOARD}
              />
            </Col>

            <Col md={8} xs={12}>
              <div className='career_box'>
                <Row>
                  <Col md={7} xs={12}>
                    <h3>Delhi Public School, Indore</h3>
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
                    <h3>St. Mary's School, Pune</h3>
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
                    <h3>Carmel High School, Patna</h3>
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
                    <h3>Modern High School, Kolkata</h3>
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
                    <h3>Bharatiya Vidya Bhavan, Chennai</h3>
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

export default CareerPage1;
