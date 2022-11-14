import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aos from "aos";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allCourses, setFilter } from "../../store/courses/action";
import { Header, Footer, SEO } from "../../components";
import one from "../../assets/images/Courses/01.png";
import two from "../../assets/images/Courses/02.png";
import three from "../../assets/images/Courses/03.png";
import img1 from "../../assets/images/Courses/img1.png";
import img2 from "../../assets/images/Courses/img2.png";
import img3 from "../../assets/images/Courses/img3.png";
import Cross from "../../assets/icons/cross.png";
import Search from "../../assets/icons/search1.png";
import Reset from "../../assets/icons/reset.png";
import add1 from "../../assets/images/add1.png";
import "./index.scss";
import "../../pages/HomePage/index.scss";
import SimpleAccordion from "./Accordian";
import { routingConstants } from "../../utils/constants";
import Pagination from "../../components/Pagination";
import axios from "axios";


const Courses = () => {
  const { t } = useTranslation();
  const state = useSelector((state) => state.coursesReducer);
  const [isSubSelected, setIsSubSelected] = useState(false);
  const [resetState, setResetState] = useState(false);
  const [categoryId, setCategoryId] = useState(null);

  const [pageLimit] = useState(5);

  const [pageCount, setPageCount] = useState(0);
  const [categoryPageCount, setCategoryPageCount] = useState(0);

  const dispatch = useDispatch();

  const { lan } = useSelector((state) => state.languageReducer);

  useEffect(() => {
    dispatch(allCourses());
    // dispatch(allCourses(`?limit=${pageLimit}`));
  }, [dispatch, pageLimit, lan]);

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2000 });
  }, []);

  const handleResetFilter = () => {
    if (state?.selectedFilter) {
      dispatch(allCourses(`?limit=${pageLimit}&offset=0`));
      setPageCount(0);
    }
    dispatch(setFilter(null));
    setCategoryId(null);
    setCategoryPageCount(0);
  };

  const handleResetFilterDemo = (s, obj) => {
    dispatch(allCourses(`?category_id=${s.category_id}&limit=${pageLimit}`));
    dispatch(setFilter([obj]));
    setIsSubSelected(false);
    setResetState(true);
  };

  const checkFunction = () => {
    return state?.allCourses?.results?.map((obj, index) => {
      return (
        <>
          <Link
            to={routingConstants.COURSE_DETAILS + obj.id}
            className='col-md-6'
            key={obj?.id}
          >
            <div className='box box_hov'>
              <div className='slide-img'>
                <img alt='' src={obj?.image} />
                <div className='overlay'></div>
              </div>

              <div className='tag_btn'>
                <button className='btn btn-info'>{obj?.category_name}</button>
                <h6>{obj?.name}</h6>
              </div>
            </div>

          </Link>
          {(index % 5 == 4)
            ?
            <>
              <div className='col-md-6'>
                <div className='google_add_box box_hov'>
                  <div className='slide-img'>
                    <a href={coursesBoxAds[0]?.url_adds} target='_blank'>
                      <img src={coursesBoxAds[0]?.image} alt='Image' className='google_add_box_img' />
                    </a>
                    <div className='overlay'></div>
                  </div>
                </div>
              </div>
            </>
            : ''
          }

        </>
      )
    });
  };

  const paginationBack = () => {
    if (categoryId) {
      setCategoryPageCount(categoryPageCount - pageLimit);
      dispatch(
        allCourses(
          `?category_id=${categoryId}&limit=${pageLimit}&offset=${categoryPageCount - pageLimit
          }`,
        ),
      );
    } else {
      setPageCount(pageCount - pageLimit);
      dispatch(
        allCourses(`?limit=${pageLimit}&offset=${pageCount - pageLimit}`),
      );
    }
    window.scrollTo(0, 1000);

  };
  const paginationNext = () => {
    if (categoryId) {
      setCategoryPageCount(categoryPageCount + pageLimit);
      dispatch(
        allCourses(
          `?category_id=${categoryId}&limit=${pageLimit}&offset=${categoryPageCount + pageLimit
          }`,
        ),
      );
    } else {
      setPageCount(pageCount + pageLimit);
      dispatch(
        allCourses(`?limit=${pageLimit}&offset=${pageCount + pageLimit}`),
      );
    }
    window.scrollTo(0, 1000);
  };


  const [coursesBoxAds, setCoursesBoxAds] = useState([]);
  const [coursesSideAds, setCoursesSideAds] = useState([]);

  useEffect(() => {
    axios.get('/private_adds/private_add?image_type=courses_box')
      .then((response) => {
        setCoursesBoxAds(response.data.results);

      });
  }, [])
  useEffect(() => {
    axios.get('/private_adds/private_add?image_type=courses_side_ads')
      .then((response) => {
        setCoursesSideAds(response.data.results);
      });
  }, [])



  const [searchInput, setSearchInput] = useState("");

  console.log("mjjjjjjj", searchInput)

  const SearchFilterHandle = (e) => {
    e.preventDefault();
    dispatch(allCourses(`?search=${searchInput}`));
  }
  const handleResetSearch = () => {
    dispatch(allCourses());
    setSearchInput('');
  }

  const [suggestion, setSuggestion] = useState([]);
  useEffect(() => {
    if (searchInput === "") {
      setSuggestion([]);
    } else {
      axios.get('/course/suggested_course')
        .then((response) => {
          setSuggestion(response.data.suggested_course);
        });
    }
  }, [searchInput]);

  const hasSuggestion = suggestion.length > 0;

  const searchFieldChanged = (e) => {
    const value = e.target.value;
    if (value === "") {
      setSearchInput([]);
    }
    setSearchInput(value);
  }

  const suggestionClicked = (suggestion) => {

    console.log("dhiv", suggestion)
    setSearchInput(suggestion)
  }

  return (
    <div>
      <SEO 
      title={`Best Free Online Courses
      & Certifications in India - Shekunj.
        com`}

  description={`Advance your career with the free Online
  Professional development courses and
  certifications with the most in-demand skills
  specially curated for women.`}
  keywords={`free online courses in india
  best online certificate programs
  free online courses for girls in india
  online certification courses in india
  free online courses for women`}
  />
      <Header loginPage={true} page='courses' />
      <section className='Cors_sec noselect'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 col-md-9'>
              <div className='cors_con'>
                <h2>{t("coursesPage.banner.heading")}</h2>
                <div className='cour_box'>
                  <ul className="num">
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
                      <li> {t("coursesPage.banner.1")} <br /> {t("coursesPage.banner.4")}</li>

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
                      <li style={{ marginTop: '-25px' }}> {t("coursesPage.banner.3")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='Srch_sec mb-5 noselect'>
        <div className='container'>
          <Row>
            <Col md={12} xs={12}>
              <div className="course_para">
                <h1>{t("coursesPage.heading.1")}</h1>
                <p className='courses_para mb-3'>{t("coursesPage.heading.2")}</p>
                <Row className="search_box_row">
                  <Col md={6} xs={12}>
                    <Link className="shekunj_a" to="/login">{t("coursesPage.heading.3")}</Link>
                  </Col>

                  <Col md={6} xs={12}>
                  <form onSubmit={SearchFilterHandle}>
                          <div className="d-flex">
                          <div className="wraper ">
                            <input type="text" onChange={searchFieldChanged} value={searchInput}
                              name="searchInput" class="form-control searchInput" 
                              placeholder="What do you want to learn ?" />
                            {hasSuggestion && (
                              <div className="suggestions">
                                {suggestion.map((item) => (
                                  <div onClick={() => suggestionClicked(item)} className="suggList">{item}</div>
                                ))}
                              </div>
                            )}
                            </div>
                            <div className="d-flex">
                              <button type="submit" className="searchBtn1">
                                <img src={Search} alt='Image' className='searchIcon'
                                /></button>
                              <img src={Cross} alt='Image' className='searchclose'
                                onClick={() => handleResetSearch()} />
                            </div>
                          </div>
                      </form>
                  </Col>





                </Row>
              </div>
            </Col>
          </Row>

          <div className='row'>

            <div className='col-md-4 col-sm-4'>
              <h5><b>{t("coursesPage.accordion.1.heading")}</b></h5>
              <SimpleAccordion
                isSubSelected={(val) => {
                  setIsSubSelected(val);
                }}
                isResetPressed={resetState}
                changeResetAgain={(val) => {
                  setResetState(val);
                }}
                categoryId={(val) => {
                  setCategoryId(val);
                  setPageCount(0);
                  setCategoryPageCount(0);
                }}
              />

              {/* google add */}
              <div className='row'>
                <div className='col-md-12'>
                  <a href={coursesSideAds[0]?.url_adds} target='_blank'>
                    <img src={coursesSideAds[0]?.image} alt='Image' className='google_add_courses' />
                  </a>

                </div>
              </div>

            </div>
            <div className='col-md-8 col-sm-8'>
              <div className='content_right'>
                <h3 className='result_head'>
                  {t("coursesPage.other.1.1")} {state?.allCourses?.count || 0}{" "}
                  {t("coursesPage.other.1.2")}
                </h3>

                <Row>
                  <Col xl={9} lg={8} md={8} xs={12}>
                    <div className='filter_added mb-5'>
                      {state?.selectedFilter?.length > 0 &&
                        isSubSelected &&
                        state?.allCourses?.results?.map((s) => {
                          return (
                            <div key={s.id} className='filter_content'>
                              {s.name}{" "}
                              <img
                                src={Cross}
                                onClick={() =>
                                  handleResetFilterDemo(
                                    s,
                                    state?.selectedFilter[0],
                                  )
                                }
                                className='ml-3'
                                alt='...'
                              />
                            </div>
                          );
                        })}
                    </div>
                  </Col>

                  <Col xl={3} lg={4} md={4} xs={12}>
                    <div className='reset_content pt-2'>
                      {state?.allCourses && (
                        <p onClick={() => handleResetFilter()}>
                          <img src={Reset} className='mr-2' alt='...' />{" "}
                          {t("coursesPage.other.2")}
                        </p>
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
              <div className='filter_right_content'>
                <div className='row'>
                  {state?.allCourses?.results?.length > 0 ? (
                    checkFunction()

                  ) : (
                    <div className='text-center mt-2'>
                      {t("common.noDataFound")}
                    </div>
                  )}
                </div>
                <div className='paginationDiv'>
                  {state?.allCourses?.count > pageLimit && (
                    <Pagination
                      finalCount={state?.allCourses?.count / pageLimit}
                      nextPage={paginationNext}
                      backPage={paginationBack}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer loginPage={false} />
    </div>
  );
};

export default Courses;
