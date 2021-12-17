import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSimilarCourses,
  singleCourseDetails,
} from "../../store/courses/action";
import { Row, Col } from "react-bootstrap";
import { Header, Footer, ScrollToTop, SEO, Carousel } from "../../components";

import banimg from "../../assets/images/CoursesDetails/ban_img.png";
import star from "../../assets/images/CoursesDetails/star.png";
import check from "../../assets/images/CoursesDetails/check.png";
import Device from "../../assets/images/CoursesDetails/Device.png";
import clock from "../../assets/images/CoursesDetails/clock.png";
import certificate from "../../assets/images/CoursesDetails/certificate.png";
import clipboard from "../../assets/images/CoursesDetails/clipboard.png";
import Support from "../../assets/images/CoursesDetails/Support.png";
import forum from "../../assets/images/CoursesDetails/forum.png";

import "./index.scss";

const CourseDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { course } = useSelector((state) => state.coursesReducer);

  useEffect(() => {
    dispatch(singleCourseDetails(id));
    if (course?.category_id) {
      dispatch(getSimilarCourses(course?.category_id));
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, id, course?.category_id]);

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
                <div className='ban_rat'>
                  {/* <p>
                    4.5 <img src={star} alt='' srcSet='' /> (104,716)
                  </p>
                  <p>36,995 Students</p> */}
                </div>
                <h4>
                  Created by <span>SheKunj</span>
                </h4>
              </div>
            </div>

            <div className='col-md-5'>
              <div className='CouDtl'>
                <img src={banimg} alt='' srcSet='' />
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra mauris quam eros, neque lorem tellus. Adipiscing non
                  molestie lacus cras potenti turpis tellus. At enim, malesuada
                  vitae blandit enim congue nibh elit. Arcu cursus elit integer
                  ornare nec enim. Nunc et duis porttitor lorem sit pretium
                  malesuada ultrices. Nulla nibh adipiscing arcu id diam
                  feugiat. Magna nullam amet, ut dui placerat. Non ultricies et,
                  adipiscing est rhoncus, cras fusce. In suscipit netus metus
                  nec convallis nulla laoreet. Mi consectetur leo massa gravida
                  diam id hendrerit posuere sit.
                </p>
              </div>
              
              <div className='sec1_con2'>
                <h2>Features:</h2>

                <Row>
                  <Col md={6} xs={12}>
                    <div className='features_box'>
                      <div>
                        <img src={Device} alt='' srcSet='' />
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
                        <img src={clock} alt='' srcSet='' />
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
                        <img src={certificate} alt='' srcSet='' />
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
                        <img src={Support} alt='' srcSet='' />
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
                        <img src={forum} alt='' srcSet='' />
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

                <Carousel page='courseDetail' />

                <Link to="/courses" className='btn_view'>View More Courses</Link>
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
