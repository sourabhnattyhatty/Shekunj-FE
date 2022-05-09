import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AccordionComponent, Footer, Header, SEO } from "../../components";
import { Link, useParams } from "react-router-dom";
import {
    reSetFilterValue,
    toggleCollapseValue,
    singleCareer1Details,
} from "../../store/career";
import TopCollage from "../../assets/images/Career/clg.jpg"
import add from "../../assets/images/add.png";
import gallery1 from "../../assets/images/gal1.jpg";
import "../HomePage/index.scss";
import "./index.scss";

const Career1Details = () => {

    const { id } = useParams();
    const { topSchools } = useSelector((state) => state.careerReducer);
    console.log('yesy', topSchools)
    const dispatch = useDispatch();
    const { lan } = useSelector((state) => state.languageReducer);
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(singleCareer1Details(id));
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [dispatch, id, lan]);

    const transformImg = (image) => {
        return image ? image : TopCollage;
    };

    return (
        <div>
            <SEO title='Sheकुंज - Career' />
            <Header loginPage={true} page='career' subPage='colleges' />

            <Container>
                <Row>
                    <div className='col-md-12 college_banner'>
                        <div className="college_detail_banner ">
                            <div className="college_logo">
                                <img src={transformImg(topSchools?.image)} alt='...' />
                            </div>

                        </div>
                    </div>
                </Row>
            </Container>

            <div className='mainDiv_career'>

                <Container>
                    <Row>
                        <Col md={8} xs={12}>
                            <div className='deatil_box'>
                                <h4>{topSchools && topSchools.name ? topSchools.name : t("common.n/a")}</h4>

                                {topSchools && topSchools.state ? topSchools?.state : t("common.n/a")} •{" "}
                                <span style={{ textTransform: "capitalize" }}>
                                    {topSchools && topSchools.collage_type
                                        ? topSchools?.collage_type
                                        : t("common.n/a")}

                                    <h6> <span>{t("careerTopColleges.other.4")}</span>{" "}
                                        : {/* {transformPrice(c?.fees)}{" "} */}
                                        {topSchools && topSchools.contact_no
                                            ? topSchools?.contact_no
                                            : t("common.n/a")}</h6>


                                </span>

                                <h6>
                                    <Link
                                        to={{ pathname: topSchools?.website }}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {topSchools && topSchools.website
                                            ? topSchools.website
                                            : t("common.n/a")}
                                    </Link>
                                </h6>
                                <h6>
                                    <span>
                                        {t("careerTopColleges.other.9")}
                                    </span>{" "}
                                    :{" "}
                                    {topSchools && topSchools.email
                                        ? topSchools?.email
                                        : t("common.n/a")}
                                </h6>
                                <span>
                                    {t("careerTopColleges.other.10")}
                                </span>{" "}
                                :{" "}
                                {topSchools && topSchools.established_year
                                    ? topSchools?.established_year
                                    : t("common.n/a")}
                                <h6>
                                    <span>
                                        {t("careerTopColleges.other.7")}
                                    </span>{" "}
                                    :{" "}
                                    {topSchools && topSchools.accreditation
                                        ? topSchools?.accreditation
                                        : t("common.n/a")}
                                </h6>
                                <p>
                                    <span>
                                        {t("careerTopColleges.other.6")}
                                    </span>{" "}
                                    :{" "}
                                    <div dangerouslySetInnerHTML={{ __html: `<div>${topSchools.about_college}</div>` }} />
                                </p>

                                <p>
                                    <span>
                                        {t("careerTopColleges.other.8")}
                                    </span>
                                    :
                                    <div dangerouslySetInnerHTML={{ __html: `<div>${topSchools.courses_offered}</div>` }} />

                                </p>
                                <h6>
                                    <span>
                                        {t("careerTopColleges.other.11")}
                                    </span>{" "}
                                    :{" "}
                                    {topSchools && topSchools.gender_intech
                                        ? topSchools?.gender_intech
                                        : t("common.n/a")}
                                </h6>


                            </div>
                        </Col>

                        <Col md={4} xs={12}>
                            <div className='deatil_box_right'>
                                <h5>Photos & Videos</h5>

                                <Row>
                                    <Col md={12} xs={12}>
                                        <iframe className="responsive-iframe "
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

export default Career1Details;