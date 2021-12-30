import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getSimilarCourses,
  singleCourseDetails,
} from "../../store/courses/action";
import { Row, Col } from "react-bootstrap";
import Check from "../../assets/icons/check1.png";
import monitor from "../../assets/icons/monitor.png";
import lifetime1 from "../../assets/icons/lifetime1.png";
import certificate1 from "../../assets/icons/certificate1.png";
import clipboard from "../../assets/icons/clipboard.png";
import flexible1 from "../../assets/icons/flexible1.png";
import Language1 from "../../assets/icons/Language1.png";

import {
  Header,
  Footer,
  ScrollToTop,
  SEO,
  Carousel,
  SocialShare,
} from "../../components";

// import Device from "../../assets/images/CoursesDetails/Device.png";
// import clock from "../../assets/images/CoursesDetails/clock.png";
// import certificate from "../../assets/images/CoursesDetails/certificate.png";
// import Support from "../../assets/images/CoursesDetails/Support.png";
// import forum from "../../assets/images/CoursesDetails/forum.png";

import "./index.scss";

const CourseDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { course } = useSelector((state) => state.coursesReducer);

  useEffect(() => {
    dispatch(singleCourseDetails(id));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, id]);

  useEffect(() => {
    if (course?.category_id) {
      dispatch(getSimilarCourses(course?.category_id));
    }
  }, [dispatch, course]);

  return (
    <div>
      <SEO title='Sheकुंज - Course Detail' />
      <Header loginPage={true} page='courses' />
      <section className='CouDtl_ban'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <div className='CouDtl_con'>
                <h2>{course?.category_name}</h2>
                <h5>{course?.name}</h5>
                <div className='ban_rat'></div>
                <h4>
                  Created by <span>SheKunj</span>
                </h4>
              </div>
            </div>

            <div className='col-md-5'>
              <div className='CouDtl'>
                <img src={course?.image} alt='' srcSet='' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='Coutl_sec1 mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <div className='sec1_des'>
                <h2>Description</h2>
                <p>{course?.description}</p>
              </div>
              <div className='mt-2 mb-2'>
                {/* <SocialShare /> */}
              </div>
              <div className='sec1_con2 con_setSec1'>
                <h2>What you’ll learn</h2>
                <Row>
                  {course?.What_you_will_learn?.map((item) => {
                    return (
                      <Col md={6} xs={12} key={item.id}>
                        <div className='features_box'>
                          <div>
                            <img src={Check} alt='' srcSet='' />
                          </div>
                          <div>
                            <p>{item?.name}</p>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>

              <div className='sec1_con2'>
                <h2>Features:</h2>

                <Row>
                  <Col md={6} xs={12}>
                    <div className='features_box'>
                      <div>
                        <img src={monitor} alt='' srcSet='' />
                      </div>
                      <div>
                        <h6>100% Online</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vel ipsum netus semper feugiat.
                        </p>
                      </div>
                    </div>
                    <div className='features_box'>
                      <div>
                        <img src={lifetime1} alt='' srcSet='' />
                      </div>
                      <div>
                        <h6>Lifetime Access</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vel ipsum netus semper feugiat eget.
                        </p>
                      </div>
                    </div>
                    <div className='features_box'>
                      <div>
                        <img src={certificate1} alt='' srcSet='' />
                      </div>
                      <div>
                        <h6>Shareable Certificate</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vel ipsum netus semper feugiat eget.
                        </p>
                      </div>
                    </div>
                  </Col>

                  <Col md={6} xs={12}>
                    <div className='features_box'>
                      <div>
                        <img src={clipboard} alt='' srcSet='' />
                      </div>
                      <div>
                        <h6>Assignments</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vel ipsum netus semper.
                        </p>
                      </div>
                    </div>

                    <div className='features_box'>
                      <div>
                        <img src={flexible1} alt='' srcSet='' />
                      </div>
                      <div>
                        <h6>Flexible Deadline</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vel ipsum netus semper.
                        </p>
                      </div>
                    </div>

                    <div className='features_box'>
                      <div>
                        <img src={Language1} alt='' srcSet='' />
                      </div>
                      <div>
                        <h6>Language</h6>
                        <p>Hindi, English</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>

            <div className='col-md-5'>
              <div className='sec2_right'>
                <Link to={`/CoursesModule/${id}`} className='btn btn_str_Cor'>
                  Start Course
                </Link>
                <h3 className='similar-coursestext'>Similar Courses</h3>
                <div className='cou_set_similer'>
                  <Carousel page='courseDetail' />
                </div>
                <Link to='/courses' className='btn_view'>
                  View More Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer loginPage={false} />
    </div>
  );
};

export default CourseDetails;
