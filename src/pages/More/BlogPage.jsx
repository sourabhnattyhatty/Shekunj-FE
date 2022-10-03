import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  NavDropdown,
  Navbar,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { routingConstants } from "../../utils/constants";

import {
  setCollapseBlogs,
  getAllBlogs as fetchBlogs,
} from "../../store/blogs/action";
import { getAllBlogs } from "../../store/blogs";
import { Header, Footer } from "../../components";
import down1 from "../../assets/icons/down1.png";
import up from "../../assets/icons/up.png";
import double_quote from "../../assets/icons/double_quote.png";
import global from "../../assets/images/Success/global.png";
import "./index.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";

function BlogPage() {
  const history = useHistory();
  const { blogs } = useSelector((state) => state.blogsReducer);
  const dispatch = useDispatch();

  console.log("Blogssssss", blogs);
  const { lan } = useSelector((state) => state.languageReducer);
  console.log("langggggg", lan);
  const { t } = useTranslation();

  React.useEffect(() => {
    dispatch(fetchBlogs());
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, lan]);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch, lan]);

  const handleSetCollapse = (id, is_collapse) => {
    dispatch(setCollapseBlogs(id, is_collapse ? false : true));
  };

  const [storiesBannerAds, setStoriesBannerAds] = useState([]);
  const [storiesBoxAds, setStoriesBoxAds] = useState([]);

  useEffect(() => {
    axios
      .get("/private_adds/private_add?image_type=success_stories_banner")
      .then((response) => {
        setStoriesBannerAds(response.data.results);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/private_adds/private_add?image_type=success_stories_box")
      .then((response) => {
        setStoriesBoxAds(response.data.results);
      });
  }, []);

  return (
    <div>
      <Header loginPage={true} page='more' subPage='moreblog' />
      <div className='SuccStory_banner'>
        <Container>
          <Row>
            <Col md={1}>
              <div className='global_img'>
                <img src={global} alt='' className='vert-move' />
              </div>
            </Col>
            <Col md={6} data-aos='slide-up'>
              <h2> {t("successStoriesPage.heading.1")}</h2>
              <p className='sucess_first_p'>
                {t("successStoriesPage.content.1")}
              </p>
              <p>{t("successStoriesPage.content.4")}</p>
            </Col>
          </Row>
        </Container>
      </div>
      {/* google add */}
      <Container>
        <Row>
          <div className='col-md-12'>
            <div className='ads_story_cover'>
              <a href={storiesBannerAds[0]?.url_adds} target='_blank'>
                <img
                  src={storiesBannerAds[0]?.image}
                  alt='Image'
                  className='ads_story_cover_img'
                />
              </a>
            </div>
          </div>
        </Row>
      </Container>

      <Container>
        {blogs?.blog_list?.length > 0 &&
          blogs?.blog_list
            ?.slice(0)
            .reverse()
            .map((s, idx) => {
              console.log("s", s)
              return(
              <>
                <div className='suc_box' key={s?.id}>
                  <Row>
                    {idx % 2 === 0 ? (
                      <>
                        <Col md={8} xs={12}>
                          <h2>
                            <img
                              className='quote_img'
                              src={double_quote}
                              alt=''
                            />
                            {s?.title || t("common.n/a")}{" "}
                          </h2>
                          <h6 class='card-subtitle mb-2 text-muted'>
                            <Moment format='D MMM YYYY' withTitle>
                              {s?.created_at}
                            </Moment>
                          </h6>
                          <p className='noselect'>
                            {/* {(s?.is_collapse
                              ? paragraph(s?.description.replace(/<br\s*[\/]?>/gi,'\n').replace(/<p\s*[\/]?>/gi,'\n'))
                              : sliceString(s?.description.replace(/<br\s*[\/]?>/gi,'\n').replace(/<p\s*[\/]?>/gi,'\n'))) || t("common.n/a")} */}
                            {s?.is_collapse === true ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: `<div>${s.about_blog}</div>`,
                                }}
                              />
                            ) : (
                              <div
                                style={{
                                  maxHeight: "120px",
                                  overflow: "hidden",
                                }}
                                dangerouslySetInnerHTML={{
                                  __html: `<div>${s.about_blog}</div>`,
                                }}
                              />
                            )}
                                 <Link to={"/blogs/"+s.id}
                                  className="BlogReadMore"
                                    key={s?.id}>    
                                    
                                    Read More
                                    </Link>
                          </p>

                          {/* {s?.about_blog?.length >= 300 && (
                            <div className='suc_btn'>
                              <hr />

                              <button
                                onClick={() =>
                                  handleSetCollapse(s?.id, s?.is_collapse)
                                }
                              >
                                {console.log(
                                  "id & is_collapse",
                                  s?.id,
                                  s?.is_collapse,
                                )}
                                {t("successStoriesPage.button.1")}{" "}
                                {s?.is_collapse
                                  ? t("common.less1")
                                  : t("common.more1")}{" "}
                                <img src={s?.is_collapse ? up : down1} alt='' />
                              </button>
                              <hr />
                            </div>
                          )} */}
                        </Col>

                        <Col md={4} xs={12}>
                          <img src={s?.image} alt='' />
                        </Col>
                      </>
                    ) : (
                      <>
                        <Col md={4} xs={12}>
                          <img src={s?.image} alt='' />
                        </Col>
                        <Col md={8} xs={12}>
                          <h2>
                            <img
                              className='quote_img'
                              src={double_quote}
                              alt=''
                            />
                            {s?.title || t("common.n/a")}{" "}
                          </h2>
                          <h6 class='card-subtitle mb-2 text-muted'>
                            <Moment format='D MMM YYYY' withTitle>
                              {s?.created_at}
                            </Moment>
                          </h6>

                          <p className='noselect' key={s?.id}>
                            {/* {(s?.is_collapse
                              ? paragraph(s?.description)
                              : sliceString(s?.description)) || t("common.n/a")} */}
                            {s?.is_collapse === true ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: `<div>${s.about_blog}</div>`,
                                }}
                              />
                              
                            ) : (
                              <div
                                style={{
                                  maxHeight: "120px",
                                  overflow: "hidden",
                                }}
                                dangerouslySetInnerHTML={{
                                  __html: `<div>${s.about_blog}</div>`,
                                }}
                                key={s?.id} 
                              />
                              
                            )}
                             <Link to={routingConstants.MORE_BLOG+s.id}
                                  className="BlogReadMore"
                                    key={s?.id}>    
                                    
                                    Read More
                                    </Link>
                          </p>

                          {/* {s?.about_blog?.length >= 300 && (
                            <div className='suc_btn'>
                              <hr />
                              <button
                                onClick={() =>
                                  handleSetCollapse(s?.id, s?.is_collapse)
                                }
                              >
                                {t("successStoriesPage.button.1")}{" "}
                                {s?.is_collapse
                                  ? t("common.less1")
                                  : t("common.more1")}{" "}
                                <img src={s?.is_collapse ? up : down1} alt='' />
                              </button>
                              <hr />
                            </div>
                          )} */}
                        </Col>
                      </>
                    )}
                  </Row>

                  {idx % 2 == 1 ? (
                    <a href={storiesBoxAds[0]?.url_adds} target='_blank'>
                      <div className='ads_story_cover'>
                        <img
                          src={storiesBoxAds[1]?.image}
                          alt='Image'
                          className='ads_succ_story'
                        />
                      </div>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </>
            )})}
        {blogs?.blog_list?.length === 0 && (
          <div className='text-center mt-5'>{t("common.noDataFound")}</div>
        )}
      </Container>

      <div className='want'>
        <Container>
          <h2>{t("successStoriesPage.content.2")}</h2>
          <button onClick={() => history.push("/courses")} className='want_btn'>
            {t("successStoriesPage.button.2")}
          </button>
        </Container>
      </div>

      <Footer loginPage={false} />
    </div>
  );
}

export default BlogPage;
