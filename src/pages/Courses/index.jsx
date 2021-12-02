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

import { Carousel, Header, Footer, ScrollToTop, SEO } from "../../components";

import one from "../../assets/images/Courses/01.png";
import two from "../../assets/images/Courses/02.png";
import three from "../../assets/images/Courses/03.png";
import img1 from "../../assets/images/Courses/img1.png";
import img2 from "../../assets/images/Courses/img2.png";
import img3 from "../../assets/images/Courses/img3.png";
import Search from "../../assets/icons/search.png";
import Profile from "../../assets/images/testimonial/1.png";
import level from "../../assets/images/level.png";
import list from "../../assets/images/list.png";
import star from "../../assets/images/Star 2.png";
import timer from "../../assets/images/timer.png";
import Dropdown from "./Dropdown/index";
import Pro1 from "../../assets/images/P-1.png";

import Cross from "../../assets/icons/cross.png";
import Reset from "../../assets/icons/reset.png";


import "./index.scss";
import "../../pages/HomePage/index.scss";
import SimpleAccordion from "./Accordian";

const Courses = (props) => {
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
      <section className='Cors_sec'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <div className='cors_con'>
                <h2>{t("coursesPage.banner.heading")}</h2>
                <div className='cour_box'>
                  <ul>
                    <li>
                      <img src={one} alt='' srcSet='' />
                    </li>
                    <li>
                      <img src={two} alt='' srcSet='' />
                    </li>
                    <li>
                      <img src={three} alt='' srcSet='' />
                    </li>
                  </ul>
                  <div className='rig_ul'>
                    <ul className='ulcont'>
                      <li>
                        <img src={img1} alt='' />
                      </li>
                      <li> {t("coursesPage.banner.1")}</li>
                    </ul>

                    <ul className='ulcont'>
                      <li>
                        <img src={img2} alt='' />
                      </li>
                      <li>
                        {" "}
                        {t("coursesPage.banner.2.1")} <br />
                        {t("coursesPage.banner.2.2")}
                      </li>
                    </ul>

                    <ul className='ulcont'>
                      <li>
                        <img src={img3} alt='' />
                      </li>
                      <li> {t("coursesPage.banner.3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='Srch_sec mb-5'>
        <div className='container'>
          {/* <h2>{t("coursesPage.searchHeading")}</h2> */}
          {/* <div className='Serc_type'>
            <div className='inp_ser'>
              <img src={Search} alt='...' />
              <input
                type='search'
                name=''
                id=''
                placeholder={t("coursesPage.placeholder")}
              />
            </div>
            <button className='btn btn-info'>Search</button>
          </div> */}

          {/* <div className='row'>
            <div className='col-md-2'>
              <Dropdown title={t("coursesPage.dropdownTitle.1")} />
            </div>
            <div className='col-md-2'>
              <Dropdown title={t("coursesPage.dropdownTitle.2")} />
            </div>
            <div className='col-md-2'>
              <Dropdown title={t("coursesPage.dropdownTitle.3")} />
            </div>
          </div>

          <h4>{t("coursesPage.heading.1")}</h4>
          <h3>{t("coursesPage.heading.2")}</h3> */}

          <div className='container'>
            <Row>
              <Col md={7} xs={12}>
              <h1>
            Online Courses
            </h1>
            <p className="courses_para mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget pretium nisl vitae porttitor aliquet id posuere tortor. Id turpis neque urna elit pellentesque est curabitur. Tincidunt fringilla viverra ut feugiat leo porta. Ridiculus viverra cum aliquam curabitur.
            </p>
              </Col>
            </Row>
           

            <div className='row'>
              <div className='col-md-4 col-sm-4'>
                <SimpleAccordion />
              </div>
              <div className='col-md-8 col-sm-8'>
                <div className="content_right">

                
                <h3 className="result_head">
                Results: 32 Courses
                </h3>

                <Row>
                  <Col md={9} xs={12}>
                    <div className="filter_added">
                        <div className="filter_content">
                        Graphic Design <img src={Cross} className="ml-3" alt="Image" />
                        </div>

                        <div className="filter_content">
                        web development <img src={Cross} className="ml-3" alt="Image" />
                        </div>
                    </div>
                  </Col>

                  <Col md={3} xs={12}>
                    <div className="reset_content pt-2">
                        <p>
                          <img src={Reset} className="mr-2" alt="Image" /> Reset filters
                        </p>
                    </div>
                  </Col>
                </Row>
                </div>
                <div className='row'>
                  {courses?.map((obj) => (
                    <Link
                      to={`/CoursesDetails/${obj.id}`}
                      className='col-md-6'
                      key={obj.id}
                    >
                      <div className='box box_hov'>
                        <div className='slide-img'>
                          <img alt='' src={Pro1} />
                          <div className='overlay'></div>
                        </div>

                        <div className='tag_btn'>
                          <button className='btn btn-info'>Design</button>
                          <h6>{obj.name}</h6>
                        </div>
                        <div className='detail-box'>
                          <div className='type'>
                            <span className='span1'>
                              4.0 <img src={star} alt='' /> <span>104,567</span>
                            </span>
                            <span className='std'>5600 Students</span>
                          </div>
                          <div className='time'>
                            <p>
                              <img src={timer} alt='' /> 11h 40min
                            </p>
                            <p>
                              <img src={list} alt='' /> 20 lectures
                            </p>
                            <p>
                              <img src={level} alt='' /> All level
                            </p>
                          </div>
                        </div>

                        <hr className='line' />
                        <div className='names'>
                          <p>
                            <img src={Profile} alt='...' /> Ramadhir Krishna
                          </p>
                          <span>Free</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider 2 */}
      {/* <Carousel
        items={5}
        details={false}
        title1={t("homePage.carousel2.heading.1")}
        title2={t("homePage.carousel2.heading.2")}
        type={constants.carouselConstant.TEST}
      /> */}

      <ScrollToTop />

      <Footer loginPage={false} />
    </div>
  );
};

export default Courses;
