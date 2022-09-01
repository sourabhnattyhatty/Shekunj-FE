import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { routingConstants } from "../../utils/constants";

import { AccordionComponent, Footer, Header, SEO } from "../../components";
import {
  getGovernmentExams,
  reSetFilterValue,
  toggleCollapseValue,
} from "../../store/career";
import { noImage } from "../../utils/ApiServices";

import "../HomePage/index.scss";
import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const CareerPage2 = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { governmentExams } = useSelector((state) => state.careerReducer);
  const { lan } = useSelector((state) => state.languageReducer);

  useEffect(() => {
    dispatch(reSetFilterValue());
    dispatch(getGovernmentExams());
  }, [dispatch, lan]);

  const transformPrice = (price) => {
    let nf = new Intl.NumberFormat("en-US");
    return nf.format(
      Number.isNaN(parseInt(price, 10)) ? 0 : parseInt(price, 10) || 0,
    );
  };

  const transformImg = (image) => {
    return image ? image : noImage;
  };

  const handleCollapse = (id, checked) => {
    dispatch(
      toggleCollapseValue(id, checked ? false : true, "governmentExams"),
    );
  };

  const [govBannerAds, setGovBannerAds] = useState([]);
  const [govBoxAds, setGovBoxAds] = useState([]);
  useEffect(() => {
    axios.get('/private_adds/private_add?image_type=govt_scm_cover')
      .then((response) => {
        setGovBannerAds(response.data.results);
      });
  }, [])
  useEffect(() => {
    axios.get('/private_adds/private_add?image_type=govt_scm_box')
      .then((response) => {
        setGovBoxAds(response.data.results);
      });
  }, [])

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' subPage='govExams' />
      <Container>
        <Row>
          <div className='col-md-12 ads_gov_cover'>
            <a href={govBannerAds[0]?.url_adds} target='_blank'>
              <img src={govBannerAds[0]?.image} alt='Image' className='ads_gov' />
            </a>
          </div>
        </Row>
      </Container>

      <div className='mainDiv_gov'>
        <Container>
          <div className='career_tit noselect'>
            <h2>{t("careerGovExams.heading.1")}</h2>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <AccordionComponent
                type='governmentExams'
                categories={{
                  name: t("careerGovExams.listItems.1"),
                  rows: governmentExams?.govt_category || [],
                }}
              />
            </Col>

            <Col md={8} xs={12}>

              {governmentExams?.govt_list?.length > 0 ? (
                governmentExams?.govt_list?.map(
                  (c, index) =>
                    c?.name && (
                      <>
                        <div
                          className='career_box noselect'
                          style={{ height: "auto" }}
                        >
                          <Row>
                            <Col md={3} xs={12}>
                              <div className='gov_logo_box'>
                                <Link
                                  to={routingConstants.GOVERNMENT_SCHEMES + c.id}
                                  className='col-md-6'
                                  key={c?.id}
                                >
                                  <div className="career_logo_box">
                                    <img srcSet={transformImg(c?.logo)} alt='...' className='career_logo_img' />
                                  </div>
                                </Link>
                              </div>
                            </Col>
                            <Col md={9} xs={12}>
                              <div className='top_col_content'>
                                <h3>
                                  <Link
                                    to={routingConstants.GOVERNMENT_SCHEMES + c.id}
                                    className=''
                                    key={c?.id}
                                  >
                                    {c && c.name}
                                  </Link></h3>

                                <ul class="list-inline list-unstyled">
                                  {c.state && (
                                    <li>
                                      <span>{t("careerGovExams.other.8")}</span> : {" "}
                                      {c && c.state}
                                    </li>
                                  )}
                                  {c.state && (
                                    <li>|</li>
                                  )}
                                  {c.scheme_level && (
                                    <li>
                                      <span>{t("careerGovExams.other.4")}</span> : {" "}
                                      {c && c.scheme_level}
                                    </li>
                                  )}

                                  {c.scheme_level && (
                                    <li>|</li>
                                  )}

                                  {c.age_criteria && (
                                    <li>
                                      <span>{t("careerGovExams.other.6")}</span> : {" "}
                                      {c && c.age_criteria}
                                    </li>
                                  )}
                                </ul>

                                <Row>
                                  {c.whom_this_scheme_for && (
                                    <Col md={12} xs={12}>
                                      <span className="gov_scm_heading">{t("careerGovExams.other.5")}</span> : {" "}
                                      {c && c.whom_this_scheme_for}
                                    </Col>
                                  )}
                                  {c.benefits && (
                                    <Col md={12} xs={12}>
                                      <span className="gov_scm_heading">{t("careerGovExams.other.7")}</span> : {" "}
                                      {c && c.benefits}
                                    </Col>
                                  )}
                                  {c.official_link && (
                                    <Col md={12} xs={12}>
                                      <span className="gov_scm_heading">{t("careerGovExams.other.9")}</span> : {" "}
                                      <Link
                                        to={{ pathname: c?.official_link }}
                                        target='_blank'
                                        rel='noreferrer'>
                                        {c && c.official_link}
                                      </Link>
                                    </Col>
                                  )}
                                </Row>

                              </div>
                            </Col>
                          </Row>
                        </div>
                        <Row>
                          {(index % 4 == 3) ? <> <div className='career_box_add'>
                            <a href={govBoxAds[0]?.url_adds} target='_blank'>
                              <img src={govBoxAds[0]?.image} alt='Image'
                                className='ads_gov_box' />
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

export default CareerPage2;
