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

const CareerPage2 = () => {
  const CATEGORIES = {
    name: "CATEGORIES",
    rows: [
      {
        id: 1,
        name: "Railways",
        isChecked: false,
      },
      {
        id: 2,
        name: "Banking & Insurance",
        isChecked: false,
      },
      {
        id: 3,
        name: "Teaching",
        isChecked: false,
      },
      {
        id: 4,
        name: "Defence",
        isChecked: false,
      },
      {
        id: 5,
        name: "SSC (Staff Selection Commision)",
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
            <h2>Government Exams</h2>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <AccordionComponent
                type='governmentExams'
                categories={CATEGORIES}
              />
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
