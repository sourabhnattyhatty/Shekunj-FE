import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { constants } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { allCourses } from "../../store/courses/action";
import { Link } from "react-router-dom";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./index.scss";

import Pro1 from "../../assets/images/P-1.png";
import Profile from "../../assets/images/testimonial/1.png";
import star from "../../assets/images/Star 2.png";
import timer from "../../assets/images/timer.png";
import list from "../../assets/images/list.png";
import level from "../../assets/images/level.png";
import collage1 from "../../assets/images/Courses/collage1.png";
import collage2 from "../../assets/images/Courses/collage2.png";
import collage3 from "../../assets/images/Courses/collage3.png";
import school1 from "../../assets/images/Courses/school1.png";
import school2 from "../../assets/images/Courses/school2.png";
import school3 from "../../assets/images/Courses/school3.png";

function Carousel(props) {
  const divRef = React.useRef();
  const { courses, tests } = useSelector((state) => state.coursesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCourses());
  }, [dispatch]);

  const collagesArr = [
    {
      img: collage1,
      title: "University of Delhi",
    },
    {
      img: collage2,
      title: "Indian Institute of Technology - Kharagpur",
    },
    {
      img: collage3,
      title: "Narsee Monjee Institute of Management Studies",
    },
  ];

  const schoolsArr = [
    {
      img: school1,
      title: "St. Xavier's Collegiate School, Kolkata",
    },
    {
      img: school2,
      title: "The Asian School, Dehradun",
    },
    {
      img: school3,
      title: "Delhi Public School, Vasant Kunj, Delhi",
    },
  ];

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
    } else if (props.type === constants.carouselConstant.COLLEGES) {
      divRef.current.innerHTML = `${
        carousel.relative(carousel.current()) + 1
      }/3`;
    } else if (props.type === constants.carouselConstant.SCHOOLS) {
      divRef.current.innerHTML = `${
        carousel.relative(carousel.current()) + 1
      }/3`;
    }
  };

  return (
    <>
      <div className='container Our_text'>
        <p>{props.title1}</p>
        <h2>{props.title2}</h2>
      </div>
      <div className='set'>
        <div className='abc_box'>
          <div className='abc' ref={divRef}></div>
        </div>

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
              items: props.page === "courseDetail" ? 1.4 : 1.4,
              nav: true,
              loop: true,
            },
            1200: {
              items: props.page === "courseDetail" ? 1.4 : 4,
              nav: true,
              loop: true,
            },
          }}
        >
          {props.page === "courseDetail" && (
            <>
              <div className='boxnew'>
                <div className='slide-img1'>
                  <img alt='' src={Pro1} />
                  <div className='overlay'></div>
                </div>

                <div className='tag_btn'>
                  <p>Adobe photoshop training:From beginner to PRO</p>
                </div>
              </div>
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
                    <div className='detail-box'>
                      <div className='type'>
                        <span className='span2'>
                          4.5 <img src={star} alt='' />{" "}
                          <span>({obj?.no_of_student_review})</span>
                        </span>
                        <span className='std'>36,995 Students</span>
                      </div>
                      <div className='time'>
                        <p>
                          <img src={timer} alt='' /> 08 hr 20 mins
                        </p>
                        <p>
                          <img src={list} alt='' /> {obj?.no_of_lectures}{" "}
                          lecture{obj?.no_of_lectures.length > 1 ? "s" : ""}
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

          {props.type === constants.carouselConstant.COLLEGES && (
            <>
              {collagesArr?.map((obj, ind) => (
                <div className='item' key={ind}>
                  <div className='box'>
                    <div className='slide-img'>
                      <img alt='' src={obj.img} />
                      <div className='overlay'></div>
                    </div>

                    <>
                      <div className='collage_name'>
                        <h2>{obj.title}</h2>
                      </div>
                    </>
                  </div>
                </div>
              ))}
            </>
          )}

          {props.type === constants.carouselConstant.SCHOOLS && (
            <>
              {schoolsArr?.map((obj, ind) => (
                <div className='item' key={ind}>
                  <div className='box'>
                    <div className='slide-img'>
                      <img alt='' src={obj.img} />
                      <div className='overlay'></div>
                    </div>

                    <>
                      <div className='collage_name'>
                        <h2>{obj.title}</h2>
                      </div>
                    </>
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
