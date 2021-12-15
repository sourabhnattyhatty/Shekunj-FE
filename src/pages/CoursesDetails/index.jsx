import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSimilarCourses, singleCourseDetails } from "../../store/courses/action";

import { Header, Footer, ScrollToTop, SEO, Carousel } from "../../components";

import banimg from "../../assets/images/CoursesDetails/ban_img.png";
import star from "../../assets/images/CoursesDetails/star.png";
import check from "../../assets/images/CoursesDetails/check.png";
import Device from "../../assets/images/CoursesDetails/Device.png";
import certi from "../../assets/images/CoursesDetails/certi.png";
import textImg from "../../assets/images/CoursesDetails/text.png";

import "./index.scss";

const CourseDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { course, similarCourses } = useSelector((state) => state.coursesReducer);

  useEffect(() => {
    dispatch(singleCourseDetails(id));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id, dispatch]);

  useEffect(() => {
    if (course?.category_id) {
      dispatch(getSimilarCourses(course?.category_id));
    }
  }, [course, dispatch]);

  return (
    <div>
      <SEO title='Sheकुंज - Course Detail' />
      <Header loginPage={true} page='courses' />
      <section className='CouDtl_ban'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <div className='CouDtl_con'>
                <h2>{course?.name}</h2>
                <h3>Speak English Clearly</h3>
                <div className='ban_rat'>
                  <p>
                    4.5 <img src={star} alt='' srcSet='' /> (104,716)
                  </p>
                  <p>36,995 Students</p>
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
              <div className='sec1_con'>
                <h2>What you'll learn</h2>
                <div className='row'>
                  <div className='col-xl-6 col-md-12'>
                    <ul>
                      <li>
                        <span>
                          <img src={check} alt='' srcSet='' />
                        </span>{" "}
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li>
                        <span>
                          <img src={check} alt='' srcSet='' />
                        </span>{" "}
                        Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                  </div>
                  <div className='col-xl-6 col-md-12'>
                    <ul>
                      <li>
                        <span>
                          <img src={check} alt='' srcSet='' />
                        </span>{" "}
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li>
                        <span>
                          <img src={check} alt='' srcSet='' />
                        </span>{" "}
                        Lorem ipsum dolor sit amet.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='sec1_con2'>
                <h2>Features:</h2>
                <ul className='list-style-none'>
                  <li>
                    <img src={Device} alt='' srcSet='' /> 2 hours on-demand
                    video
                  </li>
                  <li>
                    <img src={textImg} alt='' srcSet='' /> 1 article
                  </li>
                  <li>
                    <img src={certi} alt='' srcSet='' /> Certificate of
                    completion
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-5'>
              <div className='sec2_right'>
                <Link to={`/CoursesModule/${id}`} className='btn btn_str_Cor'>
                  Start Course
                </Link>

                <h3 className='similar-coursestext'>Similar Courses</h3>

                <Carousel page='courseDetail' />

                <button className='btn_view'>View More Courses</button>
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
