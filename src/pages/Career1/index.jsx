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
import { getTopSchools } from "../../store/career";
import "../HomePage/index.scss";
import "./index.scss";

import { noImage } from "../../store/courses/action";

const CareerPage1 = () => {
  const dispatch = useDispatch();
  const { topSchools } = useSelector((state) => state.careerReducer);
  const STATES = {
    name: "STATES",
    rows:
      topSchools?.state_list?.map((obj, idx) => {
        return {
          id: idx,
          name: obj,
          isChecked: false,
        };
      }) || [],
  };

  const OWNERSHIP = {
    name: "OWNERSHIP",
    rows: [
      {
        id: 1,
        name: "Private",
        isChecked: false,
      },
      {
        id: 2,
        name: "Public",
        isChecked: false,
      },
    ],
  };

  const EDUCATION_BOARD = {
    name: "EDUCATION_BOARD",
    rows:
      topSchools?.board_list?.map((obj, idx) => {
        return {
          id: idx,
          name: obj,
          isChecked: false,
        };
      }) || [],
  };

  useEffect(() => {
    dispatch(getTopSchools());
  }, [dispatch]);

  const transformImg = (image) => {
    return image
      ? image?.includes("http://3.109.195.234")
        ? image
        : `http://3.109.195.234${image}`
      : noImage;
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
                states={STATES}
                ownership={OWNERSHIP}
                educationBoard={EDUCATION_BOARD}
              />
            </Col>

            <Col md={8} xs={12}>
              {topSchools?.result?.length > 0 ? (
                topSchools?.result?.map((c) => (
                  <div className='career_box'>
                    <Row>
                      <Col md={7} xs={12}>
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

export default CareerPage1;
