import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { constants } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { allCourses, getSimilarCourses } from "../../store/courses/action";
import { Link } from "react-router-dom";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./index.scss";

import Pro1 from "../../assets/images/P-1.png";
import Profile from "../../assets/images/testimonial/1.png";

function Carousel(props) {
  const divRef = React.useRef();
  const { courses, course, tests, similarCourses } = useSelector(
    (state) => state.coursesReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCourses());
    if (course?.category_id) {
      dispatch(getSimilarCourses(course?.category_id));
    }
  }, [dispatch, course?.category_id]);

  const handleChange = (e) => {
    const carousel = e?.relatedTarget;
    if (props.type === constants.carouselConstant.COURSES) {
      divRef.current.innerHTML = `${
        carousel.relative(carousel.current()) + 1
      }/${courses?.length}`;
    } else if (props.type === constants.carouselConstant.TEST) {
      divRef.current.innerHTML = `${
        carousel.relative(carousel.current()) + 1
      }/${tests?.length}`;
    }
  };

  return (
    <>
      <div className='container Our_text'>
        <p>{props.title1}</p>
        <h2>{props.title2}</h2>
      </div>
      <div className='set'>
        {props.page === "homePage" && (
          <div className='abc_box'>
            <div className='abc' ref={divRef}></div>
          </div>
        )}

        <OwlCarousel
          className={
            props.page === "courseDetail"
              ? "similar-coursesslider"
              : "owl-theme"
          }
          loop
          margin={props.page === "courseDetail" ? 10 : 210}
          nav={props.page === "courseDetail" ? false : true}
          items={props.page === "courseDetail" ? 1.4 : 4}
          dots={false}
          autoPlay={true}
          smartSpeed='800'
          onChanged={(e) => handleChange(e)}
          responsive={{
            0: {
              items: 1,
              nav: true,
            },
            600: {
              items: 1,
              nav: true,
            },
            1000: {
              items: props.page === "courseDetail" ? 1.4 : 3,
              nav: true,
              loop: true,
            },
            1200: {
              items: props.page === "courseDetail" ? 1.4 : 4,
              nav: true,
              loop: true,
            },
            1920: {
              items: 5,
              margin: 250,
            },
          }}
        >
          {props.page === "courseDetail" && (
            <>
              {similarCourses?.map((course) => (
                <>
                  <div key={course?.id} className='boxnew'>
                    <div className='slide-img1'>
                      <img alt='...' src={`http://3.109.195.234${course?.file}`} />
                      <div className='overlay'></div>
                    </div>
                    <div className='tag_btn'>
                      <p>{course?.name}</p>
                    </div>
                  </div>
                </>
              ))}
            </>
          )}
          {props.type === constants.carouselConstant.COURSES && (
            <>
              {courses?.map((obj, ind) => (
                <Link
                  to={`/CoursesDetails/${obj.id}`}
                  className='item'
                  key={ind}
                >
                  <div className='box'>
                    <div className='slide-img'>
                      <img alt='' src={Pro1} />
                      <div className='overlay'></div>
                    </div>

                    <div className='tag_btn'>
                      <button className='btn btn-info'>
                        {obj?.category_name}
                      </button>
                      <h2>{obj?.name}</h2>
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
            </>
          )}

          {props.type === constants.carouselConstant.TEST && (
            <>
              {tests?.map((obj, ind) => (
                <div className='item' key={ind}>
                  <div className='box'>
                    <div className='slide-img'>
                      <img alt='' src={Pro1} />
                      <div className='overlay'></div>
                    </div>

                    <>
                      <div className='tag_btn'>
                        <button className='btn btn-info'>1 Test Set</button>
                        <h2>{obj?.name}</h2>
                      </div>
                    </>

                    <hr className='line' />
                    <div className='names'>
                      <p>
                        <img src={Profile} alt='...' /> Ramadhir Krishna
                      </p>
                      <span>Free</span>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </OwlCarousel>
      </div>
    </>
  );
}

export default Carousel;
