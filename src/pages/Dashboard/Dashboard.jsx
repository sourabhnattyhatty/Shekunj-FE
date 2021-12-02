import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aos from "aos";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allCourses } from "../../store/courses/action";
import { constants } from "../../utils";
import Calendar from "../../assets/icons/calendar.png";
import Clock from "../../assets/icons/clock.png";

import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Carousel, Header, Footer, ScrollToTop, SEO } from "../../components";

import "./Dashboard.scss";

const Dashboard = () => {
  const { t } = useTranslation();
  const { courses } = useSelector((state) => state.coursesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCourses());
  }, [dispatch]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <SEO title='Sheकुंज - Courses' />
      <Header loginPage={true} page='courses' />

      <div className="dashboard_main pt-5 pb-5">
          <Container>
                <Row>
                    <Col md={12}>
                        <h1>
                            Hello Name!
                        </h1>
                        <p className="dashboard_back">
                        Good to see you back!
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={6} xs={12}>
                    </Col>

                    <Col md={6} xs={12}>
                        <div className="current_course">
                            <h3>
                            Current Course
                            </h3>

                            <div className="course_explore">
                                <Row>
                                    <Col md={3} xs={3}>
                                        <h6>
                                        Adobe
Photoshop
                                        </h6>
                                    </Col>

                                    <Col md={2} xs={3}>
                                        <div>
                                            CIrcular progress bar
                                        </div>
                                    </Col>
                                    
                                    <Col md={4} xs={3}>
                                        <ul className="p-0">
                                            <li>
                                                <img src={Calendar} alt="Image" /> May 20, 2021
                                            </li>

                                            <li>
                                            <img src={Calendar} alt="Image" /> 6h 30 min
                                                </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
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

export default Dashboard;
