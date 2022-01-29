import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";

import arrowRightImg from "../../assets/images/MyProfile/arrowright.png";
import { addNewlines } from "../../utils/utils";

const YourTest = ({ tests }) => {
  const { t } = useTranslation();
  return (
    <div className='your-testdiv'>
      <h6>{t("dashboardPage.heading.2")}</h6>
      <div className='your-testcontent'>
        <Row>
          {tests?.length > 0 ? (
            tests?.map((t) => (
              <Col lg={6} md={12} xs={6}>
                <div className='first-test'>
                  <h5>{addNewlines(t?.course_name, true, 30) || "N/A"}</h5>
                  <p>
                    {t?.test_progress || 0}% <br />{" "}
                    <img src={arrowRightImg} alt='' />
                  </p>
                </div>
              </Col>
            ))
          ) : (
            <div style={{ marginLeft: "40%" }}>{t("common.noTestFound")}</div>
          )}
        </Row>
      </div>
    </div>
  );
};

export default YourTest;
