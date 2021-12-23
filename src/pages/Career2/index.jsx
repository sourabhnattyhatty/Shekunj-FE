import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ImageListItem, ImageListItemBar } from "@mui/material";

import {
  AccordionComponent,
  Footer,
  Header,
  ScrollToTop,
  SEO,
} from "../../components";
import { getGovernmentExams } from "../../store/career";
import "../HomePage/index.scss";
import "./index.scss";

import { noImage } from "../../store/courses/action";

const CareerPage2 = () => {
  const dispatch = useDispatch();
  const { governmentExams } = useSelector((state) => state.careerReducer);

  useEffect(() => {
    dispatch(getGovernmentExams());
  }, [dispatch]);

  const transformPrice = (price) => {
    let nf = new Intl.NumberFormat("en-US");
    return nf.format(
      Number.isNaN(parseInt(price, 10)) ? 0 : parseInt(price, 10) || 0,
    );
  };

  const transformImg = (image) => {
    return image
      ? image?.includes("http://3.109.195.234")
        ? image
        : `http://3.109.195.234${image}`
      : noImage;
  };

  const CATEGORIES = {
    name: "CATEGORIES",
    rows: governmentExams?.govt_category || [],
  };

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' subPage='govExams' />

      <div className='mainDiv_career'>
        <Container>
          <div className='career_tit'>
            <h2>Government Exams</h2>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <AccordionComponent
                type='governmentExams'
                categories={CATEGORIES}
              />
            </Col>

            <Col md={8} xs={12}>
              {governmentExams?.govt_list?.length > 0 ? (
                governmentExams?.govt_list?.map((c) => (
                  <div className='career_box'>
                    <Row>
                      <Col md={7} xs={12}>
                        <h3>{c?.name || "N/A"}</h3>
                        <p style={{ textTransform: "capitalize" }}>
                          {c?.city || "N/A"}, {c?.state || "N/A"} •{" "}
                          <span>{c?.exam_type || "N/A"}</span>
                        </p>
                        <ul>
                          <li>
                            <span>Fees</span> : ₹ {transformPrice(c?.fees)}{" "}
                          </li>
                          <li>
                            <span>Exam</span> : {c?.exam}
                          </li>
                        </ul>
                        <button className='btn_viewCour'>
                          View More Details
                        </button>
                      </Col>

                      <Col md={5} xs={12}>
                        <div className='career_img'>
                          <ImageListItem>
                            <img
                              srcSet={transformImg(c?.image)}
                              alt='...'
                              loading='lazy'
                            />
                            <ImageListItemBar title='+9' subtitle=' Photos' />
                          </ImageListItem>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))
              ) : (
                <div className='text-center'>No data found!</div>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      <ScrollToTop />

      <Footer loginPage={false} />
    </div>
  );
};

export default CareerPage2;
