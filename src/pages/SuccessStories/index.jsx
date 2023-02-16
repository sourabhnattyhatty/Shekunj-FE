import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import useDeviceDetect from "../../hooks/useDeviceDetect";

import {
  setCollapseSuccessStory,
  successStories as fetchSuccessStories,

} from "../../store/courses/action";
import { Header, Footer } from "../../components";
import down1 from "../../assets/icons/down1.png";
import up from "../../assets/icons/up.png";
import double_quote from "../../assets/icons/double_quote.png";
import global from "../../assets/images/Success/global.png";
import "./index.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { adsList } from "../../store/ads";
import { Helmet } from "react-helmet-async";
import { routingConstants } from "../../utils/constants";
function SuccessStory() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { successStories } = useSelector((state) => {
    return state.coursesReducer;
  });
  const { lan } = useSelector((state) => state.languageReducer);
  const { t } = useTranslation();

  React.useEffect(() => {
    dispatch(fetchSuccessStories());
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, lan]);

  const handleSetCollapse = (id, is_collapse) => {
    dispatch(setCollapseSuccessStory(id, is_collapse ? false : true));
  };

  const [storiesBannerAds, setStoriesBannerAds] = useState([]);
  const [storiesBoxAds, setStoriesBoxAds] = useState([]);
  const [image, setImage] = useState("NA");
  const detect = useDeviceDetect();

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>code below>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(async function (position, values) {
  //     const latitude = position.coords.latitude;
  //     const longitude = position.coords.longitude;

  //     let params = {
  //       latitude: latitude.toString(),
  //       longitude: longitude.toString(),
  //     };
  //     axios
  //       .get(
  //         `/private_adds/private_add?latitude=${latitude}&longitude=${longitude}`,
  //       )
  //       .then((response) => {
  //         if (response.data.results.length > 0) {
  //           let filterArray = response.data.results.filter((item, index) => {
  //             return item.image_type == "success_stories_banner";
  //           });
  //           let findImage =
  //             filterArray.length > 0 ? filterArray[0].image : "NA";
  //           setImage(findImage);
  //           setStoriesBannerAds(filterArray);
  //         }
  //       })   .catch((error) => {
  //         // setMessage("No data found");
  //         console.log(error);
  //     })
  //   });
  //   dispatch(adsList());
  // }, [dispatch]);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>latest code below>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  useEffect(() => {
    dispatch(adsList())
    navigator.geolocation.getCurrentPosition(async function (position, values) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      let params = {
        latitude: latitude.toString(),
        longitude: longitude.toString(),
      }
      axios
        .get(
          `/private_adds/private_add?latitude=${latitude}&longitude=${longitude}`,
        )
        .then((response) => {
          if (response && response.data.results.length > 0) {
            let filterArray1 = response.data.results.filter((item, index) => {

              return item.image_type == "success_stories_banner";

            });
            setStoriesBannerAds(filterArray1);
            // console.log("filterArray1success_stories_banner",filterArray1)
          }
        })
    },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
        // alert("Your location is blocked")    
        axios
          .get(
            `/private_adds/private_add`,
          )
          .then((response) => {
            if (response && response.data.results.length > 0) {
              let filterArray1 = response.data.results.filter((item, index) => {
                return item.image_type == "success_stories_banner";
              });
              setStoriesBannerAds(filterArray1);
              // console.log("filterArray1coursebox",filterArray1) 
            }
          })
      }
    )
  }, [])


  const addEmail = (email) => {
    navigator.geolocation.getCurrentPosition(async function (position, values) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      let params = {
        latitude: latitude.toString(),
        longitude: longitude.toString(),
      };
      axios
        .post("/private_adds/click_add/", {
          // add_email:`${adds[0]?.add_email}`
          add_email: email,
          latitude: params.latitude.toString(),
          longitude: params.longitude.toString(),
        })
        .then((response) => {
          // setAdds(response.data.results);
          console.log("addEmailresponse", response);
        });
    });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position, values) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      let params = {
        latitude: latitude.toString(),
        longitude: longitude.toString(),
      };
      axios
        .get(
          `/private_adds/private_add?latitude=${latitude}&longitude=${longitude}`,
        )
        .then((response) => {
          if (response.data.results.length > 0) {
            let filterArray = response.data.results.filter((item, index) => {
              return item.image_type == "success_stories_box";
            });
            let findImage =
              filterArray.length > 0 ? filterArray[0].image : "NA";
            setImage(findImage);
            setStoriesBoxAds(filterArray);
          }
        }).catch((error) => {
          // setMessage("No data found");
          console.log(error);
        })
    });
    dispatch(adsList());
  }, [dispatch]);

  return (
    <div>
      <Header loginPage={true} page='story' />
      <div className='SuccStory_banner noselect'>

        <Helmet>
          <link rel="canonical" href="https://www.shekunj.com/success-stories/" />
          <title>Inspiring Success Stories of #SheTheChampion - Shekunj.com</title>
          <meta name="description" content="Shekunj.com shares success stories of 
        women across India who have made their dreams come true and achieved sky-high
         success. Read our success stories."/>
          <meta name="keywords" content="women empowerment organizations, success stories, free online courses, free career guidance," />
        </Helmet>

        <Container>
          <Row>
            <Col md={1}>
              <div className='global_img'>
                <img src={global} alt='' className='vert-move' />
              </div>
            </Col>
            <Col md={6} data-aos='slide-up'>
              <h1> {t("successStoriesPage.heading.1")}</h1>
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
            {storiesBannerAds.length > 0 && (
              // <div className="ads_story_cover">

              <div
                className='col-md-12 ads_home_cover'
                onClick={() => addEmail(storiesBannerAds[0]?.add_email)}
              >
                <a href={storiesBannerAds[0]?.url_adds} target='_blank'>
                  {detect.isMobile ? (
                    storiesBannerAds[0]?.image_mobile && (
                      <img src={storiesBannerAds[0]?.image_mobile} alt='Image' className='ads_story_cover_img' />)
                  ) : (
                    storiesBannerAds[0]?.image && (
                      <img src={storiesBannerAds[0]?.image} alt='Image' className='ads_story_cover_img' />
                    ))}
                </a>
              </div>

              // <div
              //   className='ads_story_cover'
              //   onClick={() => addEmail(storiesBannerAds[0]?.add_email)}
              // >
              //   <a href={storiesBannerAds[0]?.url_adds} target='_blank'>
              //     <img
              //     src={  detect.isMobile ? storiesBannerAds[0]?.image_mobile :  storiesBannerAds[0]?.image}
              //       alt='Image'
              //       className='ads_story_cover_img'
              //     />
              //   </a>
              // </div>

            )}
          </div>
        </Row>
      </Container>

      <Container>
        {successStories?.length > 0 &&
          successStories
            ?.slice(0)
            .reverse()
            .map((s, idx) => (
              <>
                <div className='suc_box' key={s?.id}>
                  <Row>
                    {idx % 2 === 0 ? (
                      <>
                        <Col md={8} xs={12}>
                          <h2 className="noselect">
                            <img
                              className='quote_img'
                              src={double_quote}
                              style={{ width: 100, height: 40 }}
                              alt=''
                            />
                            {s?.name || t("common.n/a")}{" "}
                          </h2>
                          <p className='noselect'>
                            {/* {(s?.is_collapse
                              ? paragraph(s?.description.replace(/<br\s*[\/]?>/gi,'\n').replace(/<p\s*[\/]?>/gi,'\n'))
                              : sliceString(s?.description.replace(/<br\s*[\/]?>/gi,'\n').replace(/<p\s*[\/]?>/gi,'\n'))) || t("common.n/a")} */}
                            {s?.is_collapse === true ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: `<div>${s.description}</div>`,
                                }}
                              />
                            ) : (
                              <div
                                className="blog_content1"
                                dangerouslySetInnerHTML={{
                                  __html: `<div>${s.description}</div>`,
                                }}
                              />
                            )}
                          </p>

                          {s?.description?.length >= 300 && (
                            <div className='suc_btn'>
                              <hr />
                              <button
                                onClick={() =>
                                  {
                                    history.push(routingConstants.SUCCESS_STORIES + s?.id)
                                  }
                                }
                              >
                                {t("successStoriesPage.button.1")}{" "}
                                {s?.is_collapse
                                  ? t("common.less1")
                                  : t("common.more1")}{" "}
                                <img src={s?.is_collapse ? up : down1} style={{width:10,height:10}} alt='' />
                              </button>
                              {/* <Link 
                              to={routingConstants.SUCCESS_STORIES + s?.id}
                              className='BlogReadMore noselect'
                              key={s?.id}
                              >
                                {t("successStoriesPage.button.1")}
                              </Link> */}
                              <hr />
                            </div>
                          )}
                        </Col>

                        <Col md={4} xs={12}>
                          <img className='story_image' src={s?.image} alt='' />
                        </Col>
                      </>
                    ) : (
                      <>
                        <Col md={4} xs={12}>
                          <img className='story_image' src={s?.image} alt='' />
                        </Col>
                        <Col md={8} xs={12}>
                          <h2 className="noselect">
                            <img
                              className='quote_img'
                              src={double_quote}
                              style={{ width: 100, height: 40 }}
                              alt=''
                            />
                            {s?.name || t("common.n/a")}{" "}
                          </h2>

                          <p className='noselect'>
                            {/* {(s?.is_collapse
                              ? paragraph(s?.description)
                              : sliceString(s?.description)) || t("common.n/a")} */}
                            {s?.is_collapse === true ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: `<div>${s.description}</div>`,
                                }}
                              />
                            ) : (
                              <div
                                className="blog_content"
                                dangerouslySetInnerHTML={{
                                  __html: `<div>${s.description}</div>`,
                                }}
                              />
                            )}
                          </p>

                          {s?.description?.length >= 300 && (
                            <div className='suc_btn'>
                              <hr />
                              <button
                                onClick={() =>
                                  {
                                    history.push(routingConstants.SUCCESS_STORIES + s?.id)
                                  }
                                  // handleSetCollapse(s?.id, s?.is_collapse)
                                }
                              >
                                {t("successStoriesPage.button.1")}{" "}
                                {s?.is_collapse
                                  ? t("common.less1")
                                  : t("common.more1")}{" "}
                                <img src={s?.is_collapse ? up : down1} style={{ width: 10, height: 10 }} alt='' />
                              </button>
                              <hr />
                            </div>
                          )}
                        </Col>
                      </>
                    )}
                  </Row>

                  {idx % 2 === 1 ? (
                    <a href={storiesBoxAds[0]?.url_adds} target='_blank' rel="noreferrer">
                      {storiesBoxAds.length > 0 && (
                        // <div className="ads_story_cover">

                        <div
                          className='ads_story_cover'
                          onClick={() => addEmail(storiesBoxAds[0]?.add_email)}
                        >
                          {detect.isMobile ? (
                            storiesBoxAds[0]?.image_mobile && (
                              <img src={storiesBoxAds[0]?.image_mobile} alt='Image' className='ads_succ_story' />
                            )) : (
                            storiesBoxAds[0]?.image_mobile && (
                              <img src={storiesBoxAds[0]?.image} alt='Image' className='ads_succ_story' />
                            ))}
                        </div>
                      )}
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </>
            ))}
        {successStories?.length === 0 && (
          <div className='text-center mt-5'>{t("common.noDataFound")}</div>
        )}
      </Container>

      <div className='want'>
        <Container>
          <h2>{t("successStoriesPage.content.2")}</h2>
          <button onClick={() => history.push("/contact-us")} className='want_btn'>
            {t("successStoriesPage.button.2")}
          </button>
        </Container>
      </div>

      <Footer loginPage={false} />
    </div>
  );
}

export default SuccessStory;
