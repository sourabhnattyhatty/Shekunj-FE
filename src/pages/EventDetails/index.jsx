import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AccordionComponent, Footer, Header, SEO } from "../../components";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Moment from "react-moment"; 
import { routingConstants } from "../../utils/constants";
import {
    getAllEvents,
    singleEventDetails,
} from "../../store/events/action";
import "../HomePage/index.scss";
import "./index.scss";
import noImageIcon from "../../assets/images/no-image.jpeg";

const EventDetails = () => {
        const { id } = useParams();
        const history = useHistory();
        const { events } = useSelector((state) => state.eventsReducer);
        const dispatch = useDispatch();
      
        console.log("Eventsssssss", events);
      
        const { lan } = useSelector((state) => state.languageReducer);
        const { t } = useTranslation();
      
        // useEffect(() => {
        //   dispatch(getAllEvents());
        // }, [dispatch, lan]);
  

    useEffect(() => {
        dispatch(singleEventDetails(id));
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [dispatch,id,lan]);


    // const transformImg = (image) => {
    //     return image ? image : TopCollage;
    // };
    // const transformGalley = (image) => {
    //     return image ? image : noImageIcon;
    // };
    // const transformCovImg = (image) => {
    //     return image ? image : dummySchool;
    // };


    return (
        <div>
            <SEO title='Sheकुंज - Career' />
            <Header loginPage={true} page='career' subPage='colleges' />

            {/* <Container className="coverMainSecSchool">
                <div className="school_detail_cover">
                    <img src={(events?.image)} alt='...' className="school_detail_cover_img" />
                </div>
            </Container> */}

            {/* <Container>
                <Row>
                    <div md={12} xs={12}>
                        <div className="school_logo">
                            <img src={transformImg(topSchools?.logo)} alt='...'
                                className="school_logo_img" />
                        </div>
                    </div>
                </Row>
            </Container> */}
            {console.log("eventss---", events)}
            {/* {events?.event_list?.length > 0 ? (
            events?.event_list?.map((c)=>{
              console.log("c", c);
              return (
                  <> */}
            <div className='DetailMainDiv_career'>
                <Container>
                    <Row>
                        <Col md={8} xs={12}>
                            <div className='deatil_box'>
                            <img
                          src={events && events.image}
                          class='card-img-top'
                          alt='...'
                        ></img>
                                <h4 className='mb-3'>{events && events.title}</h4>
                             
                                <Row>
                                    {events.created_at && (
                                        <Col md={6} xs={12}>
                                            <h6>
                                                <span>
                                                 created_at 
                                                </span>{" "}
                                                :{" "}
                                                <Moment format='D MMM YYYY' withTitle>
                              {events.created_at}
                            </Moment>
                                            </h6>
                                        </Col>
                                    )}
                                    {events.updated_at && (
                                        <Col md={6} xs={12}>
                                            <span>
                                            updated_at
                                            </span>{" "}
                                            :{" "}
                                            <Moment format='D MMM YYYY' withTitle>
                              {events.updated_at}
                            </Moment>
                                        </Col>
                                    )}
                                </Row>

                                <Row>
                               
                                    {events.url && (
                                        <Col md={6} xs={12}>
                                            <h6>
                                                visit link:
                                                <Link
                                                    // to={{ pathname: topSchools?.website }}
                                                    to={events?.url}

                                                    target='_blank'
                                                // rel='noreferrer'
                                                >
                                                    {events && events.url}
                                                </Link>
                                            </h6>
                                        </Col>
                                    )}
                                </Row>

                                {events.about_event && (
                                    <p style={{ textAlign: 'justify' }} className='mt-3'>
                                        <span>
                                        </span>{" "}
                                        {" "}
                                        <div dangerouslySetInnerHTML={{ __html: `<div>${events.about_event}</div>` }} />
                                    </p>
                                )}
                            </div>
                        </Col>

                                <hr />
                                {/* <Row>
                                    <Col md={6} xs={12}>
                                        <img src={transformGalley(topSchools.image1)} alt='Image' className='right_gallery' />
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <img src={transformGalley(topSchools.image2)} alt='Image' className='right_gallery' />
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <img src={transformGalley(topSchools.image3)} alt='Image' className='right_gallery' />
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <img src={transformGalley(topSchools.image4)} alt='Image' className='right_gallery' />
                                    </Col>
                                </Row>   */}
                    </Row>
                </Container>
            </div>
            {/* </>
              );
            })
          ) 
    
          : (
            <div className='text-center'>{t("common.noDataFound")}</div>
          )} */}
            <Footer loginPage={false} />
        </div>
    );
};

export default EventDetails;