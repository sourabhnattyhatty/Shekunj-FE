import React, { useState, useEffect } from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import ReactModal from "react-modal-resizable-draggable";
import { Document, Page, pdfjs } from "react-pdf";
// import {PDFtoIMG} from 'react-pdf-to-image';
// import {file} from "./pdf-sample.pdf"
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import HTMLFlipBook from "react-pageflip";

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
import { routingConstants } from "../../utils/constants";
import Moment from "react-moment";
import { getAllMagzines } from "../../store/magzine";
import {
  setCollapseMagzines,
  getAllMagzines as fetchMagzines,
} from "../../store/magzine/action";
import { Header, Footer } from "../../components";
import img1 from "../../assets/images/shekunj_magzine.jpg";
import down1 from "../../assets/icons/down1.png";
import up from "../../assets/icons/up.png";
import double_quote from "../../assets/icons/double_quote.png";
import global from "../../assets/images/Success/global.png";
import "./index.scss";
import { useTranslation } from "react-i18next";
// import { Document, Page,pdfjs } from 'react-pdf';

import axios from "axios";
import { adsList } from "../../store/ads";
import { color } from "@mui/system";
// import { DocViewerRenderers } from "react-doc-viewer";
import { Typography } from '@mui/material';

function MagzinePage(m) {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  const [image, setImage] = useState("NA");
  const [magzineBoxAdds, setMagzineBoxAdds] = useState([]);
  const [adds, setAdds] = useState([]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const url = `https://cors-anywhere.herokuapp.com/${m?.pdf}`;

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const [show, setShow] = useState(false);
  const [docs, setDocs] = useState([]);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>code below>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
  //             return item.image_type == "magazine_index";
  //           });
  //           let findImage =
  //             filterArray.length > 0 ? filterArray[0].image : "NA";
  //           setImage(findImage);
  //           setMagzineBoxAdds(filterArray);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //     })
  //   });
  //   // dispatch(adsList());
  // }, []);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>latest code below >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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

              return item.image_type == "magazine_index";

            });
            setMagzineBoxAdds(filterArray1);
            // console.log("filterArray1magazine_index",filterArray1)
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
                return item.image_type == "magazine_index";
              });
              setMagzineBoxAdds(filterArray1);
              // console.log("filterArray1coursebox",filterArray1) 
            }
          })
      }
    )
  }, [])


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
          console.log("addEmailresponse", response);
        })
        .catch((error) => {
          console.log(error);
        })
    });
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (index) => {
    setShow(index);
  };

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

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  return (
    <div>
      <Header loginPage={true} page='more' subPage='moreblog' />
      <div className='SuccStory_banner noselect'>
        
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
        {/* <Row>
          <div className='col-md-12'>
            <div
              className='ads_story_cover'
              onClick={() => addEmail(magzineBoxAdds[0]?.add_email)}
            >
              <a href={magzineBoxAdds[0]?.url_adds} target='_blank'>
                <img
                  src={magzineBoxAdds[0]?.image}
                  alt='Image'
                  className='ads_story_cover_img'
                />
              </a>
            </div>
          </div>
        </Row> */}
      </Container>

      <Container>
        {magzines["magazine_list"]?.length > 0 ? (
          magzines["magazine_list"]?.map((m, index) => {
            console.log("magM", m.id);
            console.log("magMpdf", m.pdf);
            return (
              <>
                <div className='Magzine noselect' key={m.id}>
                  <Row>
                    {/* <Col sm={3} md={12}> */}
                    <Col>
                      <Card.Link
                        style={{ color: "#a63d67 " }}
                      // href={routingConstants.MORE_MAGAZINE + m.id}
                      // href={m && m?.form_link}
                      >
                        <Card
                          // style={{ width: "300px", height: "500px" }}
                          className='MagzineCard'
                          key={m?.id}
                          href={m && m.form_link}
                        >
                          <Link
                            to={routingConstants.MORE_MAGAZINE + m?.id} key={m?.id}>
                            <Card.Img
                              className='magzineImage'
                              variant='top'
                              src={m?.image}
                              alt=''
                              srcSet=''
                            />
                            <Card.Body className='magzineCardBody'>
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
                              {/* <Button
                        key={m?.id}
                        onClick={() => handleShow(m?.pdf)}
                        style={{ backgroundColor: "#a63d67" }}
                      >
                        Read Pdf
                      </Button> */}

                              {/* <Button
                        key={m?.id}
                        onClick={(m) => handleShow(index)}
                        style={{ backgroundColor: "#a63d67" }}
                      >
                        Read Pdf
                      </Button>  */}

                              {/* <Modal
                        key={index}
                        class='modal-dialog'
                        show={show=== index}
                        toggle={handleClose}
                      >
                        <Modal.Header>
                          <Button variant='secondary' onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Header>
                        <Modal.Body key={m?.id} style={{ userSelect: "none" }}>
                           */}
                              {/* <iframe
                            id='iframe'
                            src={m?.pdf + "#toolbar=0&navpanes=0&scrollbar=0"}
                            frameBorder='0'
                            scrolling='auto'
                            height='100%'
                            width='100%'
                          ></iframe> */}

                              {/* <HTMLFlipBook width={300} height={500}>
      <div className="demoPage"><Document   options={{ cMapUrl: 'cmaps/', cMapPacked: true }} file={m?.pdf} onLoadSuccess={onDocumentLoadSuccess}>
      {[...Array(m?.pdf?.total_pages)]?.map((page, index) => {

        return (
          <Page pageNumber={index + 1} />

        )

      }
      )}
      </Document></div>

    </HTMLFlipBook> */}
                              {/* <Document class="center" 
                          
                          key={m?.id}
        file={m?.pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
        <div className="pagec">
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </div>
        <div className="buttonc">
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className="Pre"
            
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
           
        >
          Next
        </button>
        </div> */}

                              {/* <Modal.Footer></Modal.Footer>
                        </Modal.Body>
                      </Modal> */}

                              {/* Read Pdf */}

                              {/* </Card.Link>  */}

                              {/* <PDFtoIMG file={ m?.pdf }>
            {({pages}) => {
                if (!pages.length) return 'Loading...';
                return pages.map((page, index)=>
                    <img key={index} src={page}/>
                );
            }}
        </PDFtoIMG> */}

                              <Card.Text className='updatedText'>
                                Updated_at :
                                <Moment format='D MMM YYYY' withTitle>
                                  {m?.updated_at}
                                </Moment>
                              </Card.Text>
                            </Card.Body>
                          </Link>
                        </Card>
                      </Card.Link>
                    </Col>

                    {(index % 2 == 1)
                      ?
                      <>
                        <Col>
                          <Card className='MagzineCardAdd'>
                            {/* <Card > */}
                            {magzineBoxAdds.length > 0 && (
                              <div
                                // className='slide-img-mag-add'
                                className='slide-imgAdd'
                                onClick={() =>
                                  addEmail(magzineBoxAdds[0]?.add_email)
                                }
                              >
                                <a
                                  href={magzineBoxAdds[0]?.url_adds}
                                  target='_blank'
                                >
                                  <img
                                    src={magzineBoxAdds[0]?.image}
                                    alt='Image'
                                    // className='google_add_box_img_mag'
                                    className='magzineImageAdd'
                                  />
                                </a>
                                <div className='overlay'></div>
                              </div>
                            )}
                          </Card>

                        </Col>
                      </>
                      : ''

                    }
                  </Row>
                </div>
              </>
            );
          })
        ) : (
          <div className='text-center'>{t("common.noDataFound")}</div>
        )}

        <DocViewer
          documents={docs}
          pluginRenderers={DocViewerRenderers}
          sandboxed='allow-scripts'
        />

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
