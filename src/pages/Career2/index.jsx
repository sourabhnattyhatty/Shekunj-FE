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
import {
  getGovernmentExams,
  reSetFilterValue,
  toggleCollapseValue,
} from "../../store/career";
import { noImage } from "../../store/courses/action";
import { baseURL } from "../../utils/ApiServices";
import "../HomePage/index.scss";
import "./index.scss";

const CareerPage2 = () => {
  const dispatch = useDispatch();
  const { governmentExams } = useSelector((state) => state.careerReducer);

  useEffect(() => {
    dispatch(reSetFilterValue());
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
      ? image?.includes(baseURL)
        ? image
        : `${baseURL}${image}`
      : noImage;
  };

  const handleCollapse = (id, checked) => {
    dispatch(
      toggleCollapseValue(id, checked ? false : true, "governmentExams"),
    );
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
                categories={{
                  name: "CATEGORIES",
                  rows: governmentExams?.govt_category || [],
                }}
              />
            </Col>

            <Col md={8} xs={12}>
              {governmentExams?.govt_list?.length > 0 ? (
                governmentExams?.govt_list?.map((c) => (
                  <div className='career_box' style={{ height: "auto" }}>
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
                        {c?.is_collapse && <div>{c?.about_exam || "N/A"}</div>}
                        <button
                          className='btn_viewCour'
                          onClick={() => handleCollapse(c?.id, c?.is_collapse)}
                        >
                          {!c?.is_collapse
                            ? "View more details"
                            : "View less details"}
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
