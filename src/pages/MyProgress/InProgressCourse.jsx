import React from "react";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { formatDate, formatTime, truncate } from "../../utils/utils";
import calendarBlackImg from "../../assets/icons/calendar-black.png";
import clockBlackImg from "../../assets/icons/clock-black.png";
import "./index.scss";
import { routingConstants } from "../../utils/constants";
import { useTranslation } from "react-i18next";

const InProgressCourse = ({ courses }) => {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <div className='current_course'>
      <h3>{t("dashboardPage.inProgress")}</h3>
      <div className='Scrl_div'>
        {courses?.length > 0 ? (
          courses.map((c) => (
            <div className='course_inprogress'>
              <Row>
                <Col md={7} xs={9}>
                  <h6>{truncate(c?.course_name, 40) || "N/A"}</h6>
                  <p>{truncate(c?.description, 40) || "N/A"}</p>
                  <ul className='p-0 list-style-none list-inline'>
                    <li className='list-inline-item mr-4'>
                      <img src={calendarBlackImg} alt='...' className='pr-2' />{" "}
                      {formatDate(c?.course_start_time, "MMM Do YYYY")}
                    </li>

                    <li className='list-inline-item'>
                      <img src={clockBlackImg} alt='...' className='pr-2' />{" "}
                      {formatTime(c?.course_start_time).hour}{" "}
                      {formatTime(c?.course_start_time).minute}
                    </li>
                  </ul>
                </Col>
                <Col md={2} xs={3} className='p-0'>
                  <div className='progress-coursebardiv'>
                    <Box sx={{ position: "relative", display: "inline-flex" }}>
                      <CircularProgress
                        variant='determinate'
                        value={c?.progress || 0}
                      />
                      <Box
                        sx={{
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          position: "absolute",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant='caption'
                          component='div'
                          color='text.secondary'
                        >
                          {c?.progress.toFixed(0) || 0}%<Col md={3} xs={12}></Col>
                        </Typography>
                      </Box>
                    </Box>
                  </div>
                </Col>
                {c?.has_certificate ? (
                  <Col md={3} xs={12}>
                    <div
                      className='button_paddingarea'
                      onClick={() =>
                        history.push(
                          routingConstants.ALL_CERTIFICATE_DETAIL + c?.id,
                        )
                      }
                    >
                      { c.has_certificate && c.in_progress_course &&
                        <button className='btn certificate_button'>
                          {t("dashboardPage.certificate")}
                        </button>
                      }
                    </div>
                  </Col>
                ) : null}
              </Row>
            </div>
          ))
        ) : (
          <div className=' mb-2'>{t("common.noCurrentCourse")}</div>
        )}
      </div>
    </div>
  );
};

export default InProgressCourse;
