import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  AccordionComponent,
  Footer,
  Header,
  ScrollToTop,
  SEO,
} from "../../components";
import { getTopCollages } from "../../store/career";
import { noImage } from "../../store/courses/action";

import "../HomePage/index.scss";
import "./index.scss";

const CareerPage = () => {
  const dispatch = useDispatch();
  const { topCollages } = useSelector((state) => state.careerReducer);
  const STREAM = {
    name: "STREAM",
    rows: [
      {
        id: 1,
        name: "Computer Application",
        isChecked: false,
      },
      {
        id: 2,
        name: "Sciences",
        isChecked: false,
      },
      {
        id: 3,
        name: "Engineering And Architecture",
        isChecked: false,
      },
      {
        id: 4,
        name: "Id",
        isChecked: false,
      },
      {
        id: 5,
        name: "Civil",
        isChecked: false,
      },
    ],
  };

  const COURSE_LENGTH = {
    name: "COURSE LENGTH",
    rows: [
      {
        id: 1,
        name: "Private",
        isChecked: false,
      },
      {
        id: 2,
        name: "Public/Government",
        isChecked: false,
      },
    ],
  };

  const COURSE_DIFFICULTY = {
    name: "COURSE DIFICULTY",
    rows: [
      {
        id: 1,
        name: "JEE Main",
        isChecked: false,
      },
      {
        id: 2,
        name: "NEET",
        isChecked: false,
      },
      {
        id: 3,
        name: "CAT",
        isChecked: false,
      },
      {
        id: 4,
        name: "GATE",
        isChecked: false,
      },
      {
        id: 5,
        name: "MATE",
        isChecked: false,
      },
      {
        id: 6,
        name: "CMAT",
        isChecked: false,
      },
      {
        id: 7,
        name: "CET",
        isChecked: false,
      },
      {
        id: 8,
        name: "PSC",
        isChecked: false,
      },
      {
        id: 9,
        name: "NIT",
        isChecked: false,
      },
      {
        id: 10,
        name: "AIMS",
        isChecked: false,
      },
      {
        id: 11,
        name: "PAT",
        isChecked: false,
      },
    ],
  };

  useEffect(() => {
    dispatch(getTopCollages());
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

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' subPage='colleges' />

      <div className='mainDiv_career'>
        <Container>
          <div className='career_tit'>
            <h2>Top Colleges in India</h2>
            <p>Showing 5 Colleges</p>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <AccordionComponent
                type='colleges'
                stream={STREAM}
                courseLength={COURSE_LENGTH}
                courseDifficulty={COURSE_DIFFICULTY}
              />
            </Col>

            <Col md={8} xs={12}>
              {topCollages?.length > 0 ? (
                topCollages?.map((c) => (
                  <div className='career_box' key={c?.id}>
                    <Row>
                      <Col md={7} xs={12}>
                        <h3>{c?.name || "N/A"}</h3>
                        <p>
                          {c?.city || "N/A"}, {c?.state || "N/A"} •{" "}
                          <span>{c?.collage_type || "N/A"}</span>
                        </p>
                        <ul>
                          <li>
                            <span>Fees</span> : ₹ {transformPrice(c?.fees)}{" "}
                          </li>
                          <li>
                            <span>Exam</span> : {c?.exam || "N/A"}
                          </li>
                        </ul>
                        <button className='btn_viewCour'>
                          View more details
                        </button>
                      </Col>

                      <Col md={5} xs={12}>
                        <div className='career_img'>
                          <img src={transformImg(c?.image)} alt='' />
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

export default CareerPage;
