import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AccordionComponent, Footer, Header, SEO } from "../../components";
import { routingConstants } from "../../utils/constants";
import {
  getTopSchools,
  reSetFilterValue,
  toggleCollapseValue,
} from "../../store/career";
import "../HomePage/index.scss";
import "./index.scss";

import { useTranslation } from "react-i18next";
import TopSchool from "../../assets/images/Career/scl.jpg";
import Cross from "../../assets/icons/cross.png";
import Search from "../../assets/icons/search1.png";
import { Link } from "react-router-dom";
import axios from "axios";

const CareerPage1 = () => {
  const dispatch = useDispatch();
  const { topSchools, courseSector } = useSelector(
    (state) => state.careerReducer,
  );


  const { t } = useTranslation();
  const { lan } = useSelector((state) => state.languageReducer);


  useEffect(() => {
    dispatch(reSetFilterValue());
    dispatch(getTopSchools());
  }, [dispatch, lan]);

  const transformImg = (image) => {
    return image ? image : TopSchool;
  };

  const handleCollapse = (id, checked) => {
    dispatch(toggleCollapseValue(id, checked ? false : true, "topSchools"));
  };

  const [schoolBannerAds, setSchoolBannerAds] = useState([]);
  const [schoolBoxAds, setSchoolBoxAds] = useState([]);

  useEffect(() => {
    axios.get('/private_adds/private_add?image_type=top_school_banner')
      .then((response) => {
        setSchoolBannerAds(response.data.results);
      });
  }, [])
  useEffect(() => {
    axios.get('/private_adds/private_add?image_type=top_school_box')
      .then((response) => {
        setSchoolBoxAds(response.data.results);
      });
  }, [])

  const [searchInput, setSearchInput] = useState('');
  const SearchFilterHandle = (e) => {
    e.preventDefault();
    dispatch(getTopSchools(`?search=${searchInput}`));
  }
  const handleResetSearch = () => {
    dispatch(getTopSchools());
    setSearchInput('');
  }

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' subPage='schools' />

      <Container>
        <Row>
          <div className='col-md-12'>
            <div className="ads_school_cover">
            <a href={schoolBannerAds[0]?.url_adds} target='_blank'>
              <img src={schoolBannerAds[0]?.image} alt='Image' className='ads_school' />
            </a>
            </div>
          </div>
        </Row>
      </Container>

      <div className='mainDiv_school'>
        <Container>
          <div className='career_tit noselect'>
            <Row>
              <Col md={6} xs={12}>
                <h2>{t("careerTopSchools.heading.1")}</h2>
                <p>
                  {t("careerTopSchools.other.12")}{" "}
                  {topSchools?.result?.length || 0}{" "}
                  {t("careerTopSchools.other.11")}
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
                type='schools'
                states={{
                  name: t("careerTopSchools.listItems.1"),
                  rows: topSchools?.state_list,
                }}
                cities={{
                  name: t("careerTopSchools.listItems.3"),
                  rows: topSchools?.city_list || [],
                }}
                ownership={{
                  name: t("careerTopSchools.listItems.5"),
                  rows: topSchools?.school_type,
                }}
                educationBoard={{
                  name: t("careerTopSchools.listItems.2"),
                  rows: topSchools?.board_list || [],
                }}
                category={{
                  name: t("careerTopSchools.listItems.4"),
                  rows: topSchools?.gender_intech,
                }}
              />
              {console.log("citiessss",topSchools?.city_list)}
            </Col>

            <Col md={8} xs={12}>
              {topSchools?.result?.length > 0 ? (
                topSchools?.result?.map(
                  (c, index) =>
                    c?.name && (
                      <>
                        <div
                          className='career_box noselect'
                          style={{ height: "auto" }} >
                          <Row>
                            <Col md={3} xs={12}>
                              <div className='school_logo_box'>
                                <Link
                                  to={routingConstants.TOP_SCHOOL + c.id}
                                  className='col-md-6' key={c?.id} >
                                  <div className="career_logo_box">
                                    <img src={transformImg(c?.logo)} className="career_logo_img" />
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={9} xs={12}>
                              <div className='top_col_content'>
                                <h3>
                                  <Link
                                    to={routingConstants.TOP_SCHOOL + c.id}
                                    className='col-md-6'
                                    key={c?.id} >
                                    {c && c.name}
                                  </Link>
                                </h3>
                                <ul class="list-inline list-unstyled">
                                  {c.board_type && (
                                    <li>
                                      <span>{t("careerTopSchools.other.1")}</span> :{" "}
                                      {c && c.board_type}
                                    </li>
                                  )}
                                  {c.board_type && (
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
                                        <span>{t("careerTopSchools.other.10")}</span> :{" "}
                                        {c?.gender_intech }
                                      </span>
                                    </li>
                                  )}
                                </ul>

                                <ul><li>
                                  <span>
                                    {c && c.city},{" "}
                                    {c && c.state }
                                  </span>
                                </li></ul>

                                <ul className="mt-1">
                                  {c.contact_no && (
                                    <li>
                                      <p>
                                        <span>
                                          <span>{t("careerTopSchools.other.2")}</span> :{" "}
                                          {c?.contact_no}{" "}
                                        </span>
                                      </p>
                                    </li>
                                  )}

                                  {c.website && (
                                    <li>
                                      <span>{t("careerTopSchools.other.3")}</span> :{" "}
                                      <Link
                                        to={{ pathname: c?.website }}
                                        target='_blank'
                                        rel='noreferrer'>
                                        {c && c.website}
                                      </Link>
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <Row>
                          {(index % 4 == 3) ? <> <div>
                            <a href={schoolBoxAds[0]?.url_adds} target='_blank'>
                              <img src={schoolBoxAds[0]?.image} alt='Image'
                                className='ads_school_box' />
                            </a> </div></> : ''}
                        </Row>
                      </>

                    ),
                )
              ) : (
                <div className='text-center'>{t("common.noDataFound")}</div>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      <Footer loginPage={false} />
    </div>
  );
};

export default CareerPage1;
