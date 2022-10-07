import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import ReactModal from "react-modal-resizable-draggable";

import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Nav,
  NavDropdown,
  Navbar,
  Modal,
  Button,
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
// import { Document, Page,pdfjs } from 'react-pdf';

import axios from "axios";
import { color } from "@mui/system";

function MagzinePage(props) {
  //  const oncontextmenu=(e)=>{
  //    e.preventDefault
  //     return false;
  // };
    // const Buttons = [{text:"Read Pdf"}]
  const [show, setShow] = useState(false);
  const [disabled, setdisabled] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {

  //   setNumPages(numPages);
  // }
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

  // window.onload = function () {
  //   const iframe = document.getElementById("iframe");
  //   const body = iframe.contentWindow.document.body;

  //   body.style.pointerEvents = "none";
  //   body.style.userSelect = "none";
  // };

  const showPdf = (m) => {
    // let url ="https://shekunj.s3.amazonaws.com/media/E-magazine/august.pdf";
    // try{
    // let url = `${c?.pdf}`
    // console.log("urllll",url)
    //  let win = window.open(url, "myWindow");
    //  let win = window.open(url,"user-select=none","_self","resizable=yes","scrollbars=yes","height=600,height=600");
    //   win.focus();
    // }catch(error){
    //   console.log("error",error)
    // <embed class="noselect" width="500" height="200" src={c?.pdf} type="application/pdf"/>
    // }
    // <Document   options={{ cMapUrl: 'cmaps/', cMapPacked: true }} file={c?.pdf} onLoadSuccess={onDocumentLoadSuccess}>
    // {[...Array(c?.pdf?.total_pages)]?.map((page, index) => {
    //   return (
    //     <Page pageNumber={index + 1} />
    //   )
    // }
    // )}
    // </Document>
  };
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

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
        {magzines["magazine_list"]?.length > 0 ? (
          magzines["magazine_list"]?.map((m, index) => {
            console.log("magM", m.id);
            console.log("magMpdf", m.pdf);
            return (
              <>
                <div className='MagzineCard'>
                  <Card style={{ width: "67rem" }} key={m?.id}>
                    <Card.Body className='magzineCardBody'>
                      {/* <Card.Text className="createdText">Created_at: {c?.created_at} </Card.Text> */}
                      <Card.Text className='createdText'>
                        Created_at:
                        <Moment format='D MMM YYYY' withTitle>
                          {m?.created_at}
                        </Moment>
                      </Card.Text>

                      <Card.Title>{m.title}</Card.Title>
                      <Card.Subtitle className='mb-2 text-muted'>
                        {" "}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `<div>${m.about_magazine}</div>`,
                          }}
                        />
                      </Card.Subtitle>
                      {/* <Card.Link class="react-pdf__Page__textContent"
                        //  href={c?.pdf}
                          className='magzinePdf' id="wrap" > */}
                      {/* <button 
                        onClick={()=>
                        showPdf(c)}
                       
                         style={{backgroundColor:"#fad0c4",width:"100px",marginTop:"10px"}}>Read</button> */}

                      {/* <embed class="noselect" width="500" height="200" src={c?.pdf} type="application/pdf"/> */}
                      {/* <iframe src={c.pdf} id="target"  width="500" height="200"></iframe> */}
                      {/* <iframe src={c.pdf} id="scaled-frame"  width="500" height="200"></iframe> */}

                      <Button
                        key={m?.id}
                        style={{ backgroundColor: "#a63d67" }}
                        // disabled={disabled.includes(index)}
                        onClick={handleShow}
                      >
                        Read Pdf
                      </Button>

                      <Modal
                        key={m?.id}
                        class='modal-dialog'
                        show={show}
                        onHide={handleClose}
                      >
                        <Modal.Header closeButton>
                          {/* <Modal.Title>Pdf</Modal.Title> */}
                          <Button variant='secondary' onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Header>
                        <Modal.Body key={m?.id} style={{ userSelect: "none" }}>
                          <iframe
                            id='iframe'
                            // key={m?.id}
                            // oncontextmenu={(e)=>oncontextmenu()}
                            src={m?.pdf + "#toolbar=0&navpanes=0&scrollbar=0"}
                            frameBorder='0'
                            scrolling='auto'
                            height='100%'
                            width='100%'
                          ></iframe>
                          <Modal.Footer></Modal.Footer>
                        </Modal.Body>
                      </Modal>

                      {/* </Card.Link> */}
                      <Card.Text className='updatedText'>
                        Updated_at :
                        <Moment format='D MMM YYYY' withTitle>
                          {m?.updated_at}
                        </Moment>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })
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
