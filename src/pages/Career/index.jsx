import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { routingConstants } from "../../utils/constants";
import ContentLoader, { Facebook } from 'react-content-loader';
import { AccordionComponent, Footer, Header, SEO } from "../../components";
import {
  getTopCollages,
  reSetFilterValue,
  toggleCollapseValue,
  allTopcollegeBySearch,
} from "../../store/career";
import TopCollage from "../../assets/images/Career/clg.jpg"
import "../HomePage/index.scss";
import "./index.scss";
import Cross from "../../assets/icons/cross.png";
import Search from "../../assets/icons/search1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import test from "../../assets/images/test.jpg"
// import { Link,Route } from "react-router-dom";

const CareerPage = () => {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   },2000);
  // }, []);

  const dispatch = useDispatch();
  const { topCollages, courseSector,ownership } = useSelector(
    (state) => state.careerReducer,
  );

  const { lan } = useSelector((state) => state.languageReducer);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(reSetFilterValue());
    dispatch(getTopCollages());
  }, [dispatch, lan]);

  // const transformPrice = (price) => {
  //   let nf = new Intl.NumberFormat("en-US");
  //   return nf.format(
  //     Number.isNaN(parseInt(price, 10)) ? 0 : parseInt(price, 10) || 0,
  //   );
  // };

  const transformImg = (image) => {
    return image ? image : TopCollage;
  };

  // const STREAM = {
  //   name: t("careerTopColleges.listItems.1"),
  //   rows: topCollages?.collage_stream_list || [],
  // };

  const STATE = {
    name: t("careerTopColleges.listItems.2"),
    rows: topCollages?.state_list || [],
  };
  const CITY = {
    name: t("careerTopColleges.listItems.3"),
    rows: topCollages?.city_list || [],
  };

  // const ownership = {
  //   name: t("careerTopColleges.listItems.4"),
  //   rows: topCollages?.college_type || [],
  // };

//  const ownership={
//   name: t("careerTopColleges.listItems.4"),
//   rows: topCollages?.state_list || [],
//  }

  const [collegeBannerAds, setCollegeBannerAds] = useState([]);
  const [collegeBoxAds, setCollegeBoxAds] = useState([]);

  useEffect(() => {
    axios.get('/private_adds/private_add?image_type=top_college_banner')
      .then((response) => {
        setCollegeBannerAds(response.data.results);
      });
  }, [])
  useEffect(() => {
    axios.get('/private_adds/private_add?image_type=top_college_box')
      .then((response) => {
        setCollegeBoxAds(response.data.results);
      });
  }, [])

  const [searchInput, setSearchInput] = useState('');
  const SearchFilterHandle = (e) => {
    e.preventDefault();
    dispatch(getTopCollages(`?search=${searchInput}`));
  }
  const handleResetSearch = () => {
    dispatch(getTopCollages());
    setSearchInput('');
  }

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' subPage='colleges' />

      <Container>
        <Row>
          <div className='col-md-12'>
            <div className="add_college_cover">
              <a href={collegeBannerAds[0]?.url_adds} target='_blank'>
                <img src={collegeBannerAds[0]?.image} alt='Image' className=' google_add_college' />
              </a>
            </div>
          </div>
        </Row>
      </Container>

      <div className='mainDiv_college'>
        <Container>
          <div className='career_tit noselect'>
            <Row>
              <Col md={6} xs={12}>
                <h2>{t("careerTopColleges.heading.1")}</h2>
                <p>
                  {t("careerTopColleges.other.2")}{" "}
                  {topCollages?.collage_list?.length || 0}{" "}
                  {t("careerTopColleges.other.3")}
                </p>
              </Col>
              <Col md={6} xs={12}>
                <div className="input-group searchSection">
                  <form onSubmit={SearchFilterHandle}>
                    <div className="d-flex">
                      <div className="wraper ">
                        <input type="text" onChange={e => setSearchInput(e.target.value)} value={searchInput}
                          name="searchInput" class="form-control searchInput"
                          placeholder="Search here..." />
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
                </div>
              </Col>
            </Row>

          </div>

          <Row>
            <Col md={4} xs={12}>
              <AccordionComponent
                type='colleges'
                //stream={STREAM}
                stream={courseSector}
                ownership={ownership}
                state={STATE}
                city={CITY}
              />
            </Col>

            <Col md={8} xs={12} className="top_collages_add_g">
              {topCollages?.collage_list?.length > 0 ? (
                topCollages.collage_list.map(
                  (c, index) =>
                    c &&
                    c.name && (
                      <>
                        {/* {console.log("c",c)}
                           {loading ? (
                      <div className="loader-container">
      	              <div className="spinner"></div>
                      </div>
                      ) : ( */}

                        <div className='career_box noselect'
                          style={{ height: "auto" }} key={c?.id} >
                          <Row>
                            <Col md={3} xs={12}>
                              <div className='college_logo_box'>
                                <Link
                                  to={routingConstants.TOP_COLLEGES + c.id}
                                  className='col-md-6'
                                  key={c?.id}>
                                  <div className=" career_logo_box">
                                    <img src={transformImg(c?.logo)} alt='...' className='career_logo_img' />
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={9} xs={12}>
                              <div className='top_col_content'>
                                <h3>
                                  <Link
                                    to={routingConstants.TOP_COLLEGES + c.id}
                                    className=''
                                    key={c?.id} >
                                    {c && c.name}
                                  </Link>
                                </h3>
                                <ul class="list-inline list-unstyled">
                                  {c.collage_type && (
                                    <li>
                                      <span style={{ textTransform: "capitalize" }}>
                                        {c && c.collage_type}
                                      </span>
                                    </li>
                                  )}

                                  {c.collage_type && (
                                    <li>|</li>
                                  )}

                                  {c.established_year && (
                                    <li><span>
                                      {t("careerTopColleges.other.10")}
                                    </span>{" "}
                                      :{" "}
                                      {c && c.established_year}
                                    </li>
                                  )}

                                  {c.established_year && (
                                    <li>|</li>
                                  )}
                                  {c.gender_intech && (
                                    <li>
                                      <span>
                                        {t("careerTopColleges.other.12")}
                                      </span>{" "}
                                      :{" "}
                                      {c && c.gender_intech}
                                    </li>
                                  )}
                                </ul>

                                <ul>

                                  <li>
                                    <span>
                                      {c && c.city}{" "}
                                      {c && c.state}
                                    </span>
                                  </li>


                                </ul>

                                <ul className="mt-1">
                                  {c.contact_no && (
                                    <li>
                                      <p>
                                        <span>{t("careerTopColleges.other.4")}</span>{" "}
                                        :
                                        {c && c.contact_no}
                                      </p>
                                    </li>
                                  )}

                                  {c.website && (
                                    <li>
                                      <span>{t("careerTopColleges.other.5")}</span>:{" "}
                                      {/* <Link
                                        to={{ pathname: c?.website }}
                                        target='_blank'
                                        rel='noreferrer'>
                                        {c && c.website}
                                      </Link> */}
                                      <a
                                        rel='noreferrer'
                                        target='_blank'
                                        href={`https:/${c?.website}`}
                                      >
                                        {c && c?.website}
                                      </a>
                                    </li>

                                  )}
                                </ul>
                              </div>

                            </Col>

                          </Row>
                        </div>

                        <div className="top_clg_add_img">
                          {(index % 4 == 3) ? <>
                            <a href={collegeBoxAds[0]?.url_adds} target='_blank'>
                              <img src={collegeBoxAds[0]?.image} alt='Image'
                                className='college_ads_box' />
                            </a> </> : ''}
                        </div>
                      </>
                    ),
                )
              ) :
                //  (
                //   <div className='text-center'>{t("common.noDataFound")}</div>
                // )
                //  (
                //   <div className="loader-container">
                //     <div className="spinner"></div>
                //   </div>
                // ) 

                (
                  <ContentLoader viewBox="0 0 380 70">
                    {/* Only SVG shapes */}
                    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                  </ContentLoader>
                )
              }

            </Col>

          </Row>
        </Container>
      </div>
      <Footer loginPage={false} />
    </div>
  );
};

export default CareerPage;