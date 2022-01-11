import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
// import x from "../../assets/images/Career/x.png";

import {
  AccordionComponent,
  Footer,
  Header,
  SEO,
} from "../../components";
import {
  getTopCollages,
  reSetFilterValue,
  toggleCollapseValue,
} from "../../store/career";
import { noImage } from "../../utils/ApiServices";

import "../HomePage/index.scss";
import "./index.scss";

const CareerPage = () => {
  const dispatch = useDispatch();
  const { topCollages, courseSector } = useSelector(
    (state) => state.careerReducer,
  );

  const {lan} = useSelector(state => state.languageReducer);
  const {t} = useTranslation();

  useEffect(() => {
    dispatch(reSetFilterValue());
    dispatch(getTopCollages());
  }, [dispatch,lan]);

  const transformPrice = (price) => {
    let nf = new Intl.NumberFormat("en-US");
    return nf.format(
      Number.isNaN(parseInt(price, 10)) ? 0 : parseInt(price, 10) || 0,
    );
  };

  const transformImg = (image) => {
    return image ? image : noImage;
  };

  const STREAM = {
    name: t("careerTopColleges.listItems.1"),
    rows: topCollages?.collage_stream_list || [],
  };

  const handleCollapse = (id, checked) => {
    dispatch(toggleCollapseValue(id, checked ? false : true, "topCollages"));
  };

  return (
    <div>
      <SEO title='Sheकुंज - Career' />
      <Header loginPage={true} page='career' subPage='colleges' />

      <div className='mainDiv_career'>
        <Container>
          <div className='career_tit noselect'>
            <h2>{t("careerTopColleges.heading.1")}</h2>
            <p>{t("careerTopColleges.other.2")} {STREAM?.rows?.length || 0} {t("careerTopColleges.other.3")}</p>
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
                    className='career_box noselect'
                    style={{ height: "auto" }}
                    key={c?.id}
                  >
                    <Row>
                      <Col md={7} xs={12}>
                        <div className='top_col_content'>
                          <h3>{c?.name || t("common.n/a")}</h3>
                          <p>
                            {c?.city || t("common.n/a")}, {c?.state || t("common.n/a")} •{" "}
                            <span style={{ textTransform: "capitalize" }}>
                              {c?.collage_type || t("common.n/a")}
                            </span>
                          </p>
                          <ul>
                            <li>
                              <span>{t("careerTopColleges.other.4")}</span> : ₹ {transformPrice(c?.fees)}{" "}
                            </li>
                            <li>
                              <span>{t("careerTopColleges.other.5")}</span> : {c?.exam || t("common.n/a")}
                            </li>
                          </ul>
                          {c?.is_collapse && (
                            <div>{c?.about_college || t("common.n/a")}</div>
                          )}
                          <button
                            className='btn_viewCour'
                            onClick={() =>
                              handleCollapse(c?.id, c?.is_collapse)
                            }
                          >
                            {!c?.is_collapse
                              ? t("common.more")
                              : t("common.less")}
                          </button>
                        </div>
                      </Col>

                      <Col md={5} xs={12}>
                        <div className='career_img'>
                          <img src={transformImg(c?.image)} alt='...' />
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))
              ) : (
                <div className='text-center'>{t("common.noDataFound")}</div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <Footer loginPage={false} />
    </div>
  );
};

export default CareerPage;
