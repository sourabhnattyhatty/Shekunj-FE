import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import x from "../../assets/images/Career/x.png"

import {
  AccordionComponent,
  Footer,
  Header,
  ScrollToTop,
  SEO,
} from "../../components";
import {
  getTopCollages,
  reSetFilterValue,
  toggleCollapseValue,
} from "../../store/career";
import { noImage } from "../../store/courses/action";
import { baseURL } from "../../utils/ApiServices";

import "../HomePage/index.scss";
import "./index.scss";

const CareerPage = () => {
  const dispatch = useDispatch();
  const { topCollages, courseSector } = useSelector(
    (state) => state.careerReducer,
  );

  useEffect(() => {
    dispatch(reSetFilterValue());
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
      ? image?.includes(baseURL)
        ? image
        : `${baseURL}${image}`
      : noImage;
  };

  const STREAM = {
    name: "STREAM",
    rows: topCollages?.collage_stream_list || [],
  };

  const handleCollapse = (id, checked) => {
    dispatch(toggleCollapseValue(id, checked ? false : true, "topCollages"));
  };

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' subPage='colleges' />


      <div className="filter_side">
      <img src={x} alt="" />
      <AccordionComponent
                type='colleges'
                stream={STREAM}
                courseLength={COURSE_LENGTH}
              />

              <p className="more">7 More</p> <br />


              <AccordionComponent
                type='colleges'
                stream={STREAM}
                courseLength={COURSE_LENGTH}
              />
      </div>

      <div className='mainDiv_career'>
        <Container>
          <div className='career_tit'>
            <h2>Top Colleges in India</h2>
            <p>Showing {STREAM?.rows?.length || 0} Colleges</p>
          </div>
          <Row>
            <Col md={4} xs={12}>
              <AccordionComponent
                type='colleges'
                stream={STREAM}
                ownership={courseSector}
              />
            </Col>

            <Col md={8} xs={12}>
              {topCollages?.collage_list?.length > 0 ? (
                topCollages.collage_list.map((c) => (
                  <div
                    className='career_box'
                    style={{ height: "auto" }}
                    key={c?.id}
                  >
                    <Row>
                      <Col md={7} xs={12}>
                        <div className='top_col_content'>
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
                          {c?.is_collapse && (
                            <div>{c?.about_college || "N/A"}</div>
                          )}
                          <button
                            className='btn_viewCour'
                            onClick={() =>
                              handleCollapse(c?.id, c?.is_collapse)
                            }
                          >
                            {!c?.is_collapse
                              ? "View more details"
                              : "View less details"}
                          </button>
                        </div>
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
