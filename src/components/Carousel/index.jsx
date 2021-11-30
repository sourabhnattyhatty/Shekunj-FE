import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { constants } from "../../utils";

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
import { useDispatch, useSelector } from "react-redux";
import { allCourses } from "../../store/courses/action";
import { Link } from "react-router-dom";

function Carousel(props) {
  const divRef = React.useRef();
  const {courses} = useSelector(state => state.coursesReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCourses())
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
      title: "St. Xavier’s Collegiate School, Kolkata",
    },
    {
      img: school2,
      title: "The Asian School, Dehradun",
    },
    {
      img: school3,
      title: "Delhi Public School, Vasant Kunj, Delhi",
    },
  ]

  const coursesArray = [
    {
      img: Pro1,
      title: "Design",
      subTitle: "Adobe photoshop training: From beginner to PRO",
      rating: "4.5",
      people: "104,716",
      students: "46,995",
      time: "11 hr 20 mins",
      lectures: "20",
    },
    {
      img: Pro1,
      title: "Life Style",
      subTitle: "Cat behaviour, Psychology and Care training to Pro",
      rating: "4.5",
      people: "104,716",
      students: "46,995",
      time: "11 hr 20 mins",
      lectures: "20",
    },
    {
      img: Pro1,
      title: "Development",
      subTitle: "Python Programming Masterclass Beginner to Advanced",
      rating: "4.5",
      people: "104,716",
      students: "36,995",
      time: "08 hr 20 mins",
      lectures: "32",
    },
  ];

  const handleChange = (e) => {
    const carousel = e?.relatedTarget;
    divRef.current.innerHTML = `${carousel.relative(carousel.current()) + 1}/${
      courses.length
    }`;
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
          className='owl-theme'
          loop
          margin={210}
          nav={true}
          items={4}
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
              items: 2,
              nav: true,
            },
            1000: {
              items: 3,
              nav: true,
              loop: true,
            },
            1200: {
              items: 4,
              nav: true,
              loop: true,
            },
          }}
        >
          {props.type === constants.carouselConstant.COURSES && (
            <>
              {courses.map((obj, ind) => (
                <Link to={`/CoursesDetails/${obj.id}`} className='item' key={ind}>
                  <div className='box'>
                    <div className='slide-img'>
                      <img alt='' src={Pro1} />
                      <div className='overlay'></div>
                    </div>

                    <div className='tag_btn'>
                      <button className='btn btn-info'>Design</button>
                      <h2>{obj?.name}</h2>
                    </div>
                    <div className='detail-box'>
                      <div className='type'>
                        <span className="span2">
                        4.5 <img src={star} alt='' />{" "}
                          <span>(104,716)</span>
                        </span>
                        <span className='std'>36,995 Students</span>
                      </div>
                      <div className='time'>
                        <p>
                          <img src={timer} alt='' /> 08 hr 20 mins
                        </p>
                        <p>
                          <img src={list} alt='' /> 32 lectures
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
              {coursesArray.map((obj, ind) => (
                <div className='item' key={ind}>
                  <div className='box'>
                    <div className='slide-img'>
                      <img alt='' src={Pro1} />
                      <div className='overlay'></div>
                    </div>

                    <>
                      <div className='tag_btn'>
                        <button className='btn btn-info'>1 Test Set</button>
                        <h2>Banking and Insurance</h2>
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
              {collagesArr.map((obj, ind) => (
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
              {schoolsArr.map((obj, ind) => (
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
