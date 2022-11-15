import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Navbar,
  AccordionButton,
  AccordionCollapse,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
import { getFaq as fetchFaq } from "../../store/faq/action";
import { adsList } from "../../store/ads";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';


function FaqPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { faq } = useSelector((state) => {
    console.log("state", state);
    return state.faqReducer;
  });
  console.log("faq", faq);

  const { lan } = useSelector((state) => state.languageReducer);
  const { t } = useTranslation();

  // React.useEffect(() => {
  //   dispatch(fetchSuccessStories());
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [dispatch, lan]);

  useEffect(() => {
    dispatch(fetchFaq());
  }, [dispatch]);

  // React.useEffect(() => {
  //   dispatch(fetchFaq());
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [dispatch, lan]);

  const handleSetCollapse = (id, is_collapse) => {
    dispatch(setCollapseSuccessStory(id, is_collapse ? false : true));
  };

  const [storiesBannerAds, setStoriesBannerAds] = useState([]);
  const [image, setImage] = useState("NA");
  const [faqBoxAdds, setFaqBoxAdds] = useState([]);
  const [adds, setAdds] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/private_adds/private_add?image_type=success_stories_banner")
  //     .then((response) => {
  //       setStoriesBannerAds(response.data.results);
  //     });
  // }, []);
  // useEffect(() => {
  //   axios
  //     .get("/private_adds/private_add?image_type=success_stories_box")
  //     .then((response) => {
  //       setStoriesBoxAds(response.data.results);
  //     });
  // }, []);

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
              return item.image_type == "Faq_index";
            });
            let findImage =
              filterArray.length > 0 ? filterArray[0].image : "NA";
            setImage(findImage);
            setFaqBoxAdds(filterArray);
          }
        });
    });
    dispatch(adsList());
  }, []);

  const addEmail = (email) => {
    console.log("addEmail", email);
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

  return (
    <div>
      <Header loginPage={true} page='story' />
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
            <div
              className='ads_story_cover'
              onClick={() => addEmail(faqBoxAdds[0]?.add_email)}
            >
              <a href={faqBoxAdds[0]?.url_adds} target='_blank'>
                <img
                  src={faqBoxAdds[0]?.image}
                  alt='Image'
                  className='ads_story_cover_img'
                />
              </a>
            </div>
          </div>
        </Row>
      </Container>

      <div className='FaqContainer'>
        <Container>
          <Navbar expand='lg' variant='light' bg='light'>
            <Container>
              <Navbar.Brand className='NavHeading'>
                Frequently Asked Question
              </Navbar.Brand>
              <img
                src='/static/media/logo.de3c6070.svg'
                width='30'
                height='30'
                // className="d-inline-block align-top"
                alt='logo'
              />
            </Container>
          </Navbar>
          <Row>
            <Col md={12}>
              {faq?.Faqs_list?.length > 0 ? (
                faq?.Faqs_list?.map(
                  (c, index) =>
                    c && (
                      <>
                        <div className='FaqAccordion'>
                          <Accordion flush>
                            <Accordion.Item eventKey='0'>
                              <Accordion.Header>
                                {c.question}
                              </Accordion.Header>
                              {/* <OpenInFullIcon /> */}
                              <Accordion.Body className='Faq_Accordion_body'>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: `<div>${c.answer}</div>`,
                                  }}
                                />
                              </Accordion.Body>
                            </Accordion.Item>
                                                      </Accordion>
                        </div>
                      </>
                    ),
                )
              ) : (
                <div className='text-center'>{t("common.noDataFound")}</div>
              )}
            </Col>
          </Row>
          {/* {idx % 2 == 1 ? (
                    <a href={faqBoxAdds[0]?.url_adds} target='_blank'>
                      <div className='ads_story_cover'>
                        <img
                          src={faqBoxAdds[1]?.image}
                          alt='Image'
                          className='ads_succ_story'
                        />
                      </div>
                    </a>
                  ) : (
                    ""
                  )} */}
        </Container>
      </div>
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
export default FaqPage;
