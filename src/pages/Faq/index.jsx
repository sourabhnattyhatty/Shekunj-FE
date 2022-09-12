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
import { getFaq  as fetchFaq}  from "../../store/faq/action";


function Faq() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { faq } = useSelector((state) => {
    console.log("state",state)
    return state.faqReducer;  
  });
  console.log("faq",faq)
 
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

      <div className='FaqContainer'>
        <Container>
        <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand className="NavHeading">Frequently Asked Question</Navbar.Brand>
          <img
              src="/static/media/logo.de3c6070.svg"
              width="90"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
        </Container>
      </Navbar>
          <Row>
            <Col md={12}>
              {faq?.Faqs_list?.length > 0 ? (
                faq?.Faqs_list?.map(
                  (c,index) =>
                  c&&
                    (
                      <>
              <div className='FaqAccordion'>
                <Accordion flush>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                      {/* Accordion ques */}
                      {c.question}
                     {/* <img src="src\assets\icons\down1.png"/>
                      <img src="src\assets\icons\up.png"/> */}
                    </Accordion.Header>
                    <Accordion.Body className='Faq_Accordion_body'>
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. */}
                      
                      <div dangerouslySetInnerHTML={{__html:`<div>${c.answer}</div>`}}/>

                    </Accordion.Body>
                  </Accordion.Item>
                  {/* <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                      Accordion ques
                      <i class='arrow'></i>
                    </Accordion.Header>
                    <Accordion.Body className='Faq_Accordion_body'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>
                      Accordion ques
                      <i class='arrow'></i>
                    </Accordion.Header>
                    <Accordion.Body className='Faq_Accordion_body'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>*/}
                </Accordion> 
              </div>
              </>
                    )
                )
              ) : (
                <div className='text-center'>{t("common.noDataFound")}</div>
              )}
            </Col>
          </Row>
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
export default Faq;
