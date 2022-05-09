import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { routingConstants } from "../../utils/constants";

import { AccordionComponent, Footer, Header, SEO } from "../../components";
import {
  getTopCollages,
  reSetFilterValue,
  toggleCollapseValue,
} from "../../store/career";
import TopCollage from "../../assets/images/Career/clg.jpg"
import add from "../../assets/images/add.png";
import "../HomePage/index.scss";
import "./index.scss";
import { Link } from "react-router-dom";

const CareerPage = () => {
  const dispatch = useDispatch();
  const { topCollages, courseSector } = useSelector(
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

  const STREAM = {
    name: t("careerTopColleges.listItems.1"),
    rows: topCollages?.collage_stream_list || [],
  };

  const handleCollapse = (id, checked) => {
    dispatch(toggleCollapseValue(id, checked ? false : true, "topCollages"));
  };

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' subPage='colleges' />

      <Container>
        <Row>
          <div className='col-md-12'>
            <img src={add} alt='Image' className='google_add' />
          </div>
        </Row>
      </Container>

      <div className='mainDiv_career'>


        <Container>
          <div className='career_tit noselect'>
            <h2>{t("careerTopColleges.heading.1")}</h2>
            <p>
              {t("careerTopColleges.other.2")}{" "}
              {topCollages?.collage_list?.length || 0}{" "}
              {t("careerTopColleges.other.3")}
            </p>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <AccordionComponent
                type='colleges'
                stream={STREAM}
                ownership={courseSector}
              />
            </Col>

            <Col md={8} xs={12}>
              {topCollages?.collage_list?.length > 0 ? (
                topCollages.collage_list.map(
                  (c, index) =>
                    c &&
                    c.name && (
                      <>
                        <div
                          className='career_box noselect'
                          style={{ height: "auto" }}
                          key={c?.id}
                        >
                          <Row>

                            <Col md={3} xs={12}>
                              <div className='career_img'>
                                <img src={transformImg(c?.image)} alt='...' />
                              </div>
                            </Col>


                            <Col md={9} xs={12}>
                              <div className='top_col_content'>
                                <h3>
                                  <Link
                                    to={routingConstants.TOP_COLLEGE + c.id}
                                    className='col-md-6'
                                    key={c?.id}
                                  >
                                    {c && c.name ? c.name : t("common.n/a")}
                                  </Link>
                                </h3>

                                <ul class="list-inline list-unstyled">
                                  <li><span><i class="glyphicon glyphicon-calendar"></i>
                                    2 days, 8 hours </span></li>
                                  <li>|</li>
                                  <span><i class="glyphicon glyphicon-comment"></i> 2 comments</span>
                                  <li>|</li>
                                  <span><i class="glyphicon glyphicon-comment"></i> Fees: ₹ 8.19 Lakh </span>
                                  <li>|</li>
                                  <span><i class="glyphicon glyphicon-comment"></i> Salary : ₹ 16.00 Lakh </span>


                                </ul>
                                <p>
                                  {c && c.city ? c.city : t("common.n/a")},{" "}
                                  {c && c.state ? c?.state : t("common.n/a")} •{" "}
                                  <span style={{ textTransform: "capitalize" }}>
                                    {c && c.collage_type
                                      ? c?.collage_type
                                      : t("common.n/a")}
                                  </span>
                                </p>

                                <ul>
                                  <li>
                                    <span>{t("careerTopColleges.other.4")}</span>{" "}
                                    : {/* {transformPrice(c?.fees)}{" "} */}
                                    {c && c.contact_no
                                      ? c?.contact_no
                                      : t("common.n/a")}
                                  </li>
                                  <li>
                                    <span>{t("careerTopColleges.other.5")}</span>:{" "}
                                    {/* <Link
                                    to={{ pathname: c?.website.match('^http://') || c?.website.match('^https://')?`${c?.website.trim()}`:`http://${c?.website.trim()}`}}
                                    target='_blank'
                                    rel='noreferrer'
                                  >
                                    {c && c.website
                                      ? c.website
                                      : t("common.n/a")}
                                  </Link> */}
                                  </li>

                                  {c?.is_collapse && (
                                    <>
                                      <li>
                                        <span>
                                          {t("careerTopColleges.other.9")}
                                        </span>{" "}
                                        :{" "}
                                        {c && c.email
                                          ? c?.email
                                          : t("common.n/a")}
                                      </li>
                                      <li>
                                        <span>
                                          {t("careerTopColleges.other.10")}
                                        </span>{" "}
                                        :{" "}
                                        {c && c.established_year
                                          ? c?.established_year
                                          : t("common.n/a")}
                                      </li>
                                      <li>
                                        <span>
                                          {t("careerTopColleges.other.7")}
                                        </span>{" "}
                                        :{" "}
                                        {c && c.accreditation
                                          ? c?.accreditation
                                          : t("common.n/a")}
                                      </li>
                                      <li>
                                        <span>
                                          {t("careerTopColleges.other.6")}
                                        </span>{" "}
                                        :{" "}
                                        {/* {c && c.about_college
                                        ? c?.about_college.replace(/<br\s*[\/]?>/gi,'\n').replace(/<p\s*[\/]?>/gi,'\n')
                                        : t("common.n/a")} */}
                                        <div dangerouslySetInnerHTML={{ __html: `<div>${c.about_college}</div>` }} />
                                      </li>
                                      <li>
                                        <span>
                                          {t("careerTopColleges.other.8")}
                                        </span>
                                        :
                                        {/* {c && c.courses_offered
                                        ? paragraph(c.courses_offered).map(
                                            (o) => <p>{o.replace(/<br\s*[\/]?>/gi,'\n').replace(/<p\s*[\/]?>/gi,'\n')}</p>,
                                          )
                                        : t("common.n/a")} */}
                                        <div dangerouslySetInnerHTML={{ __html: `<div>${c.courses_offered}</div>` }} />
                                      </li>
                                      <li>
                                        <span>
                                          {t("careerTopColleges.other.11")}
                                        </span>{" "}
                                        :{" "}
                                        {c && c.gender_intech
                                          ? c?.gender_intech
                                          : t("common.n/a")}
                                      </li>
                                    </>
                                  )}
                                </ul>

                              </div>
                            </Col>


                          </Row>



                        </div>
                        <Row>
                          {(index % 4 == 3) ? <> <div className='career_box_add'>
                            <img src={add} alt='Image'
                              className='google_add_right' /> </div></> : ''}
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

export default CareerPage;