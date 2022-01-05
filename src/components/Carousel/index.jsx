import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { allHomeCourses } from "../../store/courses/action";
import { constants } from "../../utils";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./index.scss";
import { routingConstants } from "../../utils/constants";

function Carousel(props) {
  const divRef = React.useRef(null);
  const { courses, course, tests, similarCourses } = useSelector(
    (state) => state.coursesReducer,
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(allHomeCourses());
  }, [dispatch, course?.category_id]);

  const handleChange = (e) => {
    const carousel = e?.relatedTarget;
    if (props.type === constants.carouselConstant.COURSES) {
      divRef.current.innerHTML = `${
        carousel.relative(carousel.current()) + 1 || 0
      }/${courses?.length || 0}`;
    } else if (props.type === constants.carouselConstant.TEST) {
      divRef.current.innerHTML = `${
        carousel.relative(carousel.current()) + 1 || 0
      }/${tests?.length || 0}`;
    }
  };

  return (
    <>
      <div className='container Our_text'>
        <p>{props.title1}</p>
        <h2>{props.title2}</h2>
      </div>
      <div className='set'>
        {props.page === constants.carouselConstant.HOMEPAGE && (
          <div className='abc_box'>
            <div className='abc' ref={divRef}></div>
          </div>
        )}

        <OwlCarousel
          className={
            props.page === constants.carouselConstant.COURSE_DETAIL
              ? "similar-coursesslider"
              : "owl-theme"
          }
          loop={courses?.length > 5}
          margin={
            props.page === constants.carouselConstant.COURSE_DETAIL ? 10 : 210
          }
          nav={
            props.page === constants.carouselConstant.COURSE_DETAIL
              ? false
              : true
          }
          items={
            props.page === constants.carouselConstant.COURSE_DETAIL ? 1.4 : 4
          }
          dots={false}
          autoPlay={true}
          smartSpeed='800'
          onChanged={(e) => handleChange(e)}
          responsive={{
            0: {
              items: 1,
              nav: true,
            },
            768: {
              items: 2,
              nav: true,
            },
            375: {
              items: 1.5,
              nav: true,
              margin: 50,
            },
            1024: {
              items:
                props.page === constants.carouselConstant.COURSE_DETAIL
                  ? 1.4
                  : 3,
              nav: true,
            },
            1200: {
              items:
                props.page === constants.carouselConstant.COURSE_DETAIL
                  ? 1.4
                  : 4,
              nav: true,
            },
            1920: {
              items: 5,
              margin: 250,
            },
          }}
        >
          {props.page === constants.carouselConstant.COURSE_DETAIL && (
            <>
              {similarCourses?.map((course, ind) => {
                if (course?.id === Number(id)) {
                  return null;
                }
                return (
                  <Link
                  to = {routingConstants.COURSE_DETAILS + course?.id}
                    className='item'
                    key={ind}
                  >
                    <div key={course?.id} className='boxnew'>
                      <div className='slide-img1'>
                        <img alt='...' src={course?.image} />
                        <div className='overlay'></div>
                      </div>
                      <div className='tag_btn'>
                        <p>{course?.name}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>
          )}
          {props.type === constants.carouselConstant.COURSES && (
            <>
              {courses?.map((obj, ind) => (
                <Link
                  to={routingConstants.COURSE_DETAILS +  obj?.id}
                  className='item'
                  key={ind}
                >
                  <div className='box'>
                    <div className='slide-img'>
                      <img alt='' src={obj?.image} />
                      <div className='overlay'></div>
                    </div>
                    <div className='tag_btn'>
                      <button className='btn btn-info'>
                        {obj?.category_name}
                      </button>
                      <h2>{obj?.name}</h2>
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
                      <img alt='' src={obj?.image} />
                      <div className='overlay'></div>
                    </div>
                    <div className='tag_btn'>
                      <h2>{obj?.name}</h2>
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
