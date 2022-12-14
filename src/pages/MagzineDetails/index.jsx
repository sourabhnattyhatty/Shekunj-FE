import React, { useState, useEffect, useRef, useCallback } from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import ReactModal from "react-modal-resizable-draggable";
import { Document, Page, pdfjs } from "react-pdf";
import "./index.scss";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import Fullscreen from 'fullscreen-react';
// import ReactFullscreen from 'react-easyfullscreen';

// import {file} from "./pdf-sample.pdf"
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

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
  getAllMagzines as fetchMagzines
} from "../../store/magzine/action";
import { singleMagzineDetails } from "../../store/magzine/action";
import { Header, Footer } from "../../components";
import down1 from "../../assets/icons/down1.png";
import up from "../../assets/icons/up.png";
import double_quote from "../../assets/icons/double_quote.png";
import global from "../../assets/images/Success/global.png";
import "./index.scss";
import { useTranslation } from "react-i18next";
import { routingConstants } from "../../utils/constants";
import "./index.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";
import { adsList } from "../../store/ads";
import { BiFullscreen } from 'react-icons/bi'
import { BsZoomIn, BsZoomOut } from 'react-icons/bs'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineShareAlt } from 'react-icons/ai'
import { IoMdShareAlt } from 'react-icons/io'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { RWebShare } from "react-web-share";
import Cookies from "js-cookie";
const url = "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf";
// import ReactAudioPlayer from 'react-audio-player';



function MagzineDetails(m) {
  const [isEnter, setIsEnter] = useState(false);

  const [magzineData, setMagzineData] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const { magzines } = useSelector((state) => state.magzinesReducer);
  const dispatch = useDispatch();
  const { lan } = useSelector((state) => state.languageReducer);
  const { t } = useTranslation();
  const book = useRef();
  const screen1 = useFullScreenHandle();
  const screen2 = useFullScreenHandle();
  // const url = `https://cors-anywhere.herokuapp.com/${magzines?.pdf}`;
  // const url = "https://cors-anywhere.herokuapp.com/https://shekunj.s3.amazonaws.com/media/E-magazine/august.pdf";
  const apiBaseUrl = 'https://admin.shekunj.com/';
  pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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

  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  // const [show, setShow] = useState(false);

  // const handleClose = (index) => {
  //   setShow(false);
  // };
  // const handleShow = (index) => {
  //   setShow(index);
  // };

  // React.useEffect(() => {
  //   dispatch(fetchMagzines());
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [dispatch, lan]);

  // useEffect(() => {
  //   dispatch(getAllMagzines());
  // }, [dispatch, lan]);

  useEffect(() => {
    dispatch(singleMagzineDetails(id));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, id, lan]);

  // const singleMagzineDetails = (id) =>{
  //   dispatch(singleMagzineDetails(id));
  // }

  // const handleSetCollapse = (id, is_collapse) => {
  //   dispatch(setCollapseMagzines(id, is_collapse ? false : true));
  // };

  const [storiesBannerAds, setStoriesBannerAds] = useState([]);
  const [storiesBoxAds, setStoriesBoxAds] = useState([]);
  const [image, setImage] = useState("NA");
  const [adds, setAdds] = useState([]);
  const [magzineDetailsBoxAds, setMagzineDetailsBoxAds] = useState([]);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>code below>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
  //             return item.image_type == "magazine_detail";
  //           });
  //           let findImage =
  //             filterArray.length > 0 ? filterArray[0].image : "NA";
  //           setImage(findImage);
  //           setMagzinetDetailsBoxAds(filterArray);
  //         }
  //       })   .catch((error) => {
  //         // setMessage("No data found");
  //         console.log(error);
  //     })
  //   });
  //   dispatch(adsList());
  // }, [dispatch]);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>latest code below >>>>>>>>>>>>>>>>>>>>>

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

              return item.image_type == "magazine_detail";

            });
            setMagzineDetailsBoxAds(filterArray1);
            // console.log("filterArray1magazine_detail",filterArray1)
          }
        })
    },
      function (error) {
        // alert("Your location is blocked")    
        axios
          .get(
            `/private_adds/private_add`,
          )
          .then((response) => {
            if (response && response.data.results.length > 0) {
              let filterArray1 = response.data.results.filter((item, index) => {
                return item.image_type == "magazine_detail";
              });
              setMagzineDetailsBoxAds(filterArray1);
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
        });
    });
  };
  const reportChange = useCallback((state, handle) => {
    if (handle === screen1) {
      console.log('Screen 1 went to', state, handle);
    }
    if (handle === screen2) {
      console.log('Screen 2 went to', state, handle);
    }
  }, [screen1, screen2]);

  useEffect(() => {

    const token = Cookies.get("sheToken");
    axios.get(`more/magazine/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => setMagzineData(response.data.data.magazine_images)
      )

  }, [])

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
            <div
              className='ads_story_cover'
              onClick={() => addEmail(magzineDetailsBoxAds[0]?.add_email)}
            >
              <a href={magzineDetailsBoxAds[0]?.url_adds} target='_blank'>
                <img
                  src={magzineDetailsBoxAds[0]?.image}
                  alt='Image'
                  className='ads_story_cover_img'
                />
              </a>
            </div>
          </div>
        </Row>
      </Container>

      <Container>
        <div>
          <div style={{
            background: 'black',
            width: '100%',
            height: '500px',
            padding: '45px',
            margin: '50px 0px'
          }}>
            <FullScreen handle={screen1} onChange={reportChange}>
              <HTMLFlipBook width={510} height={400}
                ref={book}
                style={{
                  display: `${screen1.active ? 'flex' : ''}`,
                  // justifyContent: `${screen1.active ? 'center' : ''}`,
                  marginTop: `${screen1.active ? '10rem' : ''}`,
                  marginLeft: `${screen1.active ? '12rem' : ''}`
                }}
              >
                {
                  magzineData && magzineData.map(elem => {
                    return <div className="demoPage">
                      <img src={elem.images} width="510px" height="400px" />
                    </div>
                  })
                }
              </HTMLFlipBook>
              <div style={{
                display: 'flex',
                width: '250px',
                paddingTop: '10px',
                marginLeft: `${screen1.active ? '12rem' : ''}`,

              }}>
                <MdArrowBackIosNew onClick={() =>
                  book.current.pageFlip().flipPrev()}
                  style={{ color: 'white', cursor: 'pointer' }} />
                <MdArrowForwardIos onClick={() =>
                  book.current.pageFlip().flipNext()}
                  style={{ color: 'white', marginLeft: '30px', cursor: 'pointer' }} />
                {
                  !screen1.active ?
                    <BsFullscreen onClick={screen1.enter}
                      style={{ color: 'white', marginLeft: '30px', cursor: 'pointer' }} />
                    :
                    <BsFullscreenExit onClick={screen1.exit}
                      style={{ color: 'white', marginLeft: '30px', cursor: 'pointer' }} />

                }
                <div>
                <RWebShare
                  data={{
                    // text: "Web Share - GfG",
                    url: "http://localhost:3000",
                    title: "Share",
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <AiOutlineShareAlt
                    style={{
                      color: 'white',
                      fontSize: '21px',
                      marginLeft: '30px',
                      cursor: 'pointer'
                    }} />
                </RWebShare>

                </div>
              </div>
            </FullScreen>
          </div>
          {/* {magzines["magazine_list"]?.length > 0 ? (
          magzines["magazine_list"]?.map((magzines, index) => {
            console.log("magMDetailPage", magzines.id);
            console.log("magMpdfmagMDetailPage", magzines.pdf);
            return ( */}
          <>
            {/* <div style={{ backgroundColor: 'black', padding: '4rem 9rem', margin: '50px 0px' }}>

            {/* <div className='MagzineCard' key={magzines?.id}> */}
            {/* <Card  key={magzines?.id}>
                    <Card.Body className='magzineCardBody'>
                      <Card.Text className='createdText'>
                        Created_at:
                        <Moment format='D MMM YYYY' withTitle>
                          {magzines?.created_at}
                        </Moment>
                      </Card.Text>

                      <Card.Title>{magzines && magzines?.title}</Card.Title>
                      <Card.Subtitle className='mb-2 text-muted'>
                        {" "}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `<div>${magzines?.about_magazine}</div>`,
                          }}
                        />
                      </Card.Subtitle> */}

            {/* 
            <Button
                        key={magzines?.id}
                        onClick={() => handleShow(index)}
                        style={{ backgroundColor: "#a63d67" }}
                      >
                        Read Pdf
                      </Button>

                      <Modal
                        key={index}
                        class='modal-dialog'
                        show={show=== index}
                        toggle={handleClose}
                      >
                        <Modal.Header closeButton>
                          <Button variant='secondary' onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Header>
                        <Modal.Body key={magzines?.id} style={{ userSelect: "none" }}> */}

            {/* <iframe
                            id='iframe'
                            src={magzines?.pdf + "#toolbar=0&navpanes=0&scrollbar=0"}
                            frameBorder='0'
                            scrolling='auto'
                            height='100%'
                            width='100%'
                          ></iframe>  */}

            {/* <Document
              class='center'
              key={magzines?.id}
              file={magzines?.pdf}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document> */}
            {/* <div className="main">
            <Document
              file={url}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <div>
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
              </div>
            </div>
          </div> */}
            {/* <Modal.Footer></Modal.Footer>
                        </Modal.Body>
                      </Modal> 

            <Card.Text className='updatedText'>
                        Updated_at :
                        <Moment format='D MMM YYYY' withTitle>
                          {magzines?.updated_at}
                        </Moment>
                      </Card.Text>
                    </Card.Body>
                  </Card> */}
            {/* </div> */}
          </>
          {/* );
            })
        ) : (
          <div className='text-center'>{t("common.noDataFound")}</div>
       )}    */}

        </div>
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


    </div >
  );
}

export default MagzineDetails;
