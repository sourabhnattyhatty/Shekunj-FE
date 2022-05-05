import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AccordionComponent, Footer, Header, SEO } from "../../components";
import { Link, useParams } from "react-router-dom";
import {
    getTopCollages,
    reSetFilterValue,
    toggleCollapseValue,
    singleCareerDetails,
} from "../../store/career";
import TopCollage from "../../assets/images/Career/clg.jpg"
import add from "../../assets/images/add.png";
import gallery1 from "../../assets/images/gal1.jpg";
import "../HomePage/index.scss";
import "./index.scss";

const CareerDetails = () => {

    const { id } = useParams();
    const { career } = useSelector((state) => state.careerReducer);

    console.log("yes", career)

    const dispatch = useDispatch();
    const { lan } = useSelector((state) => state.languageReducer);
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(singleCareerDetails(id));
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [dispatch, id, lan]);


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
                    </div>
                    <Row>

                        <Col md={8} xs={12}>
                            <div className='deatil_box'>
                                <h4>{career?.id}--Jaipuria Noida - Jaipuria Institute of Management</h4>
                                <h6>Updated on Feb 16, 2022</h6>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply
                                    random text. It has roots in a piece of classical Latin
                                    literature from 45 BC, making it over 2000 years old.
                                    Richard McClintock, a Latin professor at Hampden-Sydney
                                    College in Virginia, looked up one of the more obscure
                                    Latin words, consectetur, from a Lorem Ipsum passage,
                                    and going through the cites of the word in classical
                                    literature, discovered the undoubtable source.
                                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                                    "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                                    by Cicero, written in 45 BC. This book is a treatise on the
                                    theory of ethics, very popular during the Renaissance.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                                    amet..", comes from a line in section 1.10.32.
                                    The standard chunk of Lorem Ipsum used since the 1500s is
                                    reproduced below for those interested. Sections 1.10.32
                                    and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                                    are also reproduced in their exact original form, accompanied
                                    by English versions from the 1914 translation by H. Rackham.</p>
                                <ul>
                                    <li>This book is a treatise on the
                                        theory of ethics, very popular during the Renaissance.</li>
                                    <li>This book is a treatise on the
                                        theory of ethics, very popular during the Renaissance.</li>
                                    <li>This book is a treatise on the
                                        theory of ethics, very popular during the Renaissance.</li>
                                    <li>This book is a treatise on the
                                        theory of ethics, very popular during the Renaissance.</li>
                                    <li>This book is a treatise on the
                                        theory of ethics, very popular during the Renaissance.</li>
                                </ul>
                                <p>This book is a treatise on the
                                    theory of ethics, very popular during the Renaissance. treatise on the
                                    theory of ethics, very popular during the Renaissance treatise on the
                                    theory of ethics, very popular during the Renaissance treatise on the
                                    theory of ethics, very popular during the Renaiss anceduring the Renaissance treatise on the
                                    theory of ethics, very popular during the Renaissance </p>


                            </div>
                        </Col>

                        <Col md={4} xs={12}>
                            <div className='deatil_box_right'>
                                <h5>Photos & Videos</h5>
                                <Row>
                                    <Col md={12} xs={12}>
                                        <iframe className="iframe_box"
                                            src="https://www.youtube.com/embed/AMllH055W_E"
                                            title="YouTube video player" frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; 
                                              encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen></iframe>
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col md={6} xs={12}>
                                        <img src={gallery1} alt='Image' className='right_gallery' />
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <img src={gallery1} alt='Image' className='right_gallery' />
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <img src={gallery1} alt='Image' className='right_gallery' />
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <img src={gallery1} alt='Image' className='right_gallery' />
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <img src={gallery1} alt='Image' className='right_gallery' />
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <img src={gallery1} alt='Image' className='right_gallery' />
                                    </Col>

                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer loginPage={false} />
        </div>
    );
};

export default CareerDetails;