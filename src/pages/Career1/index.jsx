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
  getTopSchools,
  reSetFilterValue,
  toggleCollapseValue,
} from "../../store/career";
import "../HomePage/index.scss";
import "./index.scss";

import { noImage } from "../../store/courses/action";
import { baseURL } from "../../utils/ApiServices";

const CareerPage1 = () => {
  const dispatch = useDispatch();
  const { topSchools, courseSector } = useSelector(
    (state) => state.careerReducer,
  );

  useEffect(() => {
    dispatch(reSetFilterValue());
    dispatch(getTopSchools());
  }, [dispatch]);

  const transformImg = (image) => {
    return image
      ? image?.includes(baseURL)
        ? image
        : `${baseURL}${image}`
      : noImage;
  };

  const handleCollapse = (id, checked) => {
    dispatch(toggleCollapseValue(id, checked ? false : true, "topSchools"));
  };

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' subPage='schools' />



      <div className='mainDiv_career'>
        <Container>
          <div className='career_tit'>
            <h2>Top Schools in India</h2>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <AccordionComponent
                type='schools'
                states={{
                  name: "STATES",
                  rows: topSchools?.state_list,
                }}
                ownership={courseSector}
                educationBoard={{
                  name: "EDUCATION_BOARD",
                  rows: topSchools?.board_list || [],
                }}
              />
            </Col>

            <Col md={8} xs={12}>
              {topSchools?.result?.length > 0 ? (
                topSchools?.result?.map((c) => (
                  <div className='career_box' style={{ height: "auto" }}>
                    <Row>
                      <Col md={7} xs={12}>
                      <div className="top_col_content">
                        <h3>{c?.name || "N/A"}</h3>
                        <p style={{ textTransform: "capitalize" }}>
                          {c?.city || "N/A"}, {c?.state || "N/A"} •{" "}
                          <span>{c?.school_type || "N/A"}</span>
                        </p>
                        <ul>
                          <li>
                            <span>Board</span> : {c?.board_type || "N/A"}{" "}
                          </li>
                        </ul>
                        {c?.is_collapse && (
                          <div>{c?.about_school || "N/A"}</div>
                        )}
                        <button
                          className='btn_viewCour'
                          onClick={() => handleCollapse(c?.id, c?.is_collapse)}
                        >
                          {!c?.is_collapse
                            ? "View more details"
                            : "View less details"}
                        </button>
                        </div>
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

export default CareerPage1;
