import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { getAllMagzines } from "../../store/magzine";
import {
  setCollapseMagzines,
  getAllMagzines as fetchMagzines,
} from "../../store/magzine/action";
import { Header, Footer } from "../../components";
import down1 from "../../assets/icons/down1.png";
import up from "../../assets/icons/up.png";
import double_quote from "../../assets/icons/double_quote.png";
import global from "../../assets/images/Success/global.png";
import "./index.scss";
import { useTranslation } from "react-i18next";

import axios from "axios";
import { color } from "@mui/system";

function MagzinePage() {
  const history = useHistory();
  const { magzines } = useSelector((state) => {
    console.log("state", state);
    return state.magzinesReducer;
  });
  const dispatch = useDispatch();

  console.log("magzinesssss", magzines);
  const { lan } = useSelector((state) => state.languageReducer);
  console.log("langggggg", lan);
  const { t } = useTranslation();

  React.useEffect(() => {
    dispatch(fetchMagzines());
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, lan]);

  useEffect(() => {
    dispatch(getAllMagzines());
  }, [dispatch, lan]);

  const handleSetCollapse = (id, is_collapse) => {
    dispatch(setCollapseMagzines(id, is_collapse ? false : true));
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

const showPdf=(c)=>{
    // let url ="https://shekunj.s3.amazonaws.com/media/E-magazine/august.pdf";
    try{
    let url = `${c?.pdf}`
    console.log("urllll",url)
     let win = window.open(url, "myWindow");
      win.focus();
    }catch(error){
      console.log("error",error)
    } 
}
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
        {magzines?.magazine_list?.length > 0 ? (
          magzines?.magazine_list.map(
            (c, index) =>
              c && (
                <>
                  <div className='MagzineCard'>
                    <Card style={{ width: "67rem" }} key={c?.id}>
                      <Card.Body className='magzineCardBody'>
                        {/* <Card.Text className="createdText">Created_at: {c?.created_at} </Card.Text> */}
                        <Card.Text className='createdText'>
                          Created_at:
                          <Moment format='D MMM YYYY' withTitle>
                            {c?.created_at}
                          </Moment>
                        </Card.Text>

                        <Card.Title>{c.title}</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>
                          {" "}
                          <div
                            dangerouslySetInnerHTML={{
                              __html: `<div>${c.about_magazine}</div>`,
                            }}
                          />
                        </Card.Subtitle>
                        <Card.Link href={c?.pdf} className='magzinePdf' >
                        <button onClick={()=>showPdf(c)} style={{backgroundColor:"#fad0c4",width:"100px",marginTop:"10px"}}>Read</button>

                        </Card.Link>
                        <Card.Text className='updatedText'>
                          Updated_at :
                          <Moment format='D MMM YYYY' withTitle>
                            {c?.updated_at}
                          </Moment>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </>
              ),
          )
        ) : (
          <div className='text-center'>{t("common.noDataFound")}</div>
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

export default MagzinePage;
