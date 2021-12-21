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
import christian_collage from "../../assets/images/Career/christian_collage.png";
import pune_college from "../../assets/images/Career/pune_college.png";

import "../HomePage/index.scss";
import "./index.scss";

const CareerPage = () => {
  const STREAM = {
    name: "STREAM",
    rows: [
      {
        id: 1,
        name: "Computer Application",
        isChecked: false,
      },
      {
        id: 2,
        name: "Sciences",
        isChecked: false,
      },
      {
        id: 3,
        name: "Engineering And Architecture",
        isChecked: false,
      },
      {
        id: 4,
        name: "Id",
        isChecked: false,
      },
      {
        id: 5,
        name: "Civil",
        isChecked: false,
      },
    ],
  };

  const COURSE_LENGTH = {
    name: "COURSE LENGTH",
    rows: [
      {
        id: 1,
        name: "Private",
        isChecked: false,
      },
      {
        id: 2,
        name: "Public/Government",
        isChecked: false,
      },
    ],
  };

  const COURSE_DIFFICULTY = {
    name: "COURSE DIFICULTY",
    rows: [
      {
        id: 1,
        name: "JEE Main",
        isChecked: false,
      },
      {
        id: 2,
        name: "NEET",
        isChecked: false,
      },
      {
        id: 3,
        name: "CAT",
        isChecked: false,
      },
      {
        id: 4,
        name: "GATE",
        isChecked: false,
      },
      {
        id: 5,
        name: "MATE",
        isChecked: false,
      },
      {
        id: 6,
        name: "CMAT",
        isChecked: false,
      },
      {
        id: 7,
        name: "CET",
        isChecked: false,
      },
      {
        id: 8,
        name: "PSC",
        isChecked: false,
      },
      {
        id: 9,
        name: "NIT",
        isChecked: false,
      },
      {
        id: 10,
        name: "AIMS",
        isChecked: false,
      },
      {
        id: 11,
        name: "PAT",
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
            <h2>Top Colleges in India</h2>
            <p>Showing 5 Colleges</p>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <AccordionComponent
                type='colleges'
                stream={STREAM}
                courseLength={COURSE_LENGTH}
                courseDifficulty={COURSE_DIFFICULTY}
              />
            </Col>

            <Col md={8} xs={12}>
              <div className='career_box'>
                <Row>
                  <Col md={7} xs={12}>
                    <h3>CMC Vellore - Christian Medical College</h3>
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
                      <img src={christian_collage} alt='' />
                    </div>
                  </Col>
                </Row>
              </div>

              <div className='career_box'>
                <Row>
                  <Col md={7} xs={12}>
                    <h3>KMC Mangalore - Kasturba Medical College</h3>
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
                    <h3>KMC Mangalore - Kasturba Medical College</h3>
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
                    <h3>
                      SRM University Chennai - SRM Institute of Science and
                      Technology
                    </h3>
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
                    <h3>JMI New Delhi - Jamia Millia Islamia College</h3>
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

export default CareerPage;
