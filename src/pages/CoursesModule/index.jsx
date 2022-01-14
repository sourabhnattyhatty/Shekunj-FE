import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

import { Header, Footer, ScrollToTop } from "../../components";

import Rightcheck from "../../assets/images/Courses/right.png";
import Stack from "@mui/material/Stack";
import close from "../../assets/images/Courses/close.png";
import toggle from "../../assets/images/Courses/toggle.png";
import "./index.scss";
import { Skeleton } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCourseModule, startCourse } from "../../store/courses/action";
import { toast } from "react-toastify";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import Cookies from "js-cookie";
import { routingConstants } from "../../utils/constants";
import { useTranslation } from "react-i18next";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(270deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#3880ff" : "#3880ff",
  height: 10,
  padding: "15px 0",

  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
  },
}));

const CourseModule = () => {
  const [show, setShow] = React.useState(true);
  const [showactive, setShowactive] = React.useState(0);
  const [showsubactive, setShowsubactive] = React.useState(0);
  const [expanded, setExpanded] = React.useState("panel1");
  const { courseModulesList, course, isLoading, moduleprogress } = useSelector(
    (state) => state.coursesReducer,
  );
  console.log(
    "🚀 ~ file: index.jsx ~ line 93 ~ CourseModule ~ course",
    course,
    courseModulesList,
  );
  const { lan } = useSelector((state) => state.languageReducer);

  const dispatch = useDispatch();
  const detect = useDeviceDetect();
  const { id } = useParams();
  const history = useHistory();
  const { t } = useTranslation();

  const fun = () => {
    const p = [];
    courseModulesList?.forEach((obj) => {
      obj?.sub_task?.forEach((item, ind) => {
        p.push(ind);
      });
    });
    return Math.round(100 / (p.length || 0)) || 0;
  };

  const progress = courseModulesList && fun();

  React.useEffect(() => {
    if (detect.isMobile) {
      toast.error(t("error.mobile.1"));
      history.push(routingConstants.HOME_PAGE);
    }
  }, [history, detect, t]);

  React.useEffect(() => {
    dispatch(startCourse(id));
    dispatch(getSingleCourseModule(id));
  }, [dispatch, id, lan]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleAccordian = () => {
    setShow((prev) => !prev);
  };

  const handlePrevModule = (page) => {
    Cookies.set("module", page);
    const p = (page - 1) * progress;
    dispatch(startCourse(id, page, p, true));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleNextModule = (page) => {
    Cookies.set("module", page);
    const p = (page - 1) * progress;
    dispatch(startCourse(id, page, p, true));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const renderProgress = (count = 0) => {
    return (
      <IOSSlider
        aria-label='ios slider'
        className={
          (count <= 33 && "red1-progress") ||
          (count <= 60 && "yellow1-progress") ||
          (count <= 100 && "green1-progress")
        }
        value={count}
        valueLabelFormat={(value) => <div>{value}%</div>}
        valueLabelDisplay='on'
        disabled
      />
    );
  };

  const handleFinish = () => {
    Cookies.remove("module");
    history.push(routingConstants.COURSES_TEST + id);
  };

  const handleactive = (key) => {
    setShowactive(key);
  };

  return (
    <div>
      <Header loginPage={true} page='courses' />
      <div className='course_module mt-md-0 mb-md-0 mt-4 mb-4 noselect'>
        <Container>
          <Row className='pt-md-5 pb-md-5'>
            <Col md={12} xs={12} className='text-left mb-5'>
              <div className='circular_progress_module'>
                <Stack spacing={2} direction='row'>
                  <h2>{t("coursesPage.coursesModulePage.heading.1")}</h2>
                </Stack>

                {renderProgress(moduleprogress)}
              </div>
            </Col>

            {!show && (
              <div className='tog_set'>
                <img src={toggle} alt='' onClick={handleAccordian} />
                <div className='number-bgbox'>1</div>
                <ul className='pl-2 position-relative'>
                  {courseModulesList.map((obj, ind) => (
                    <li
                      key={obj?.id}
                      className={
                        Number(course?.current_module) > obj?.id
                          ? "active-accordiantext"
                          : ""
                      }
                    >
                      1.{ind + 1}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {show && (
              <Col md={4} xs={12}>
                <div className='accordion_box'>
                  <div className='close_btn'>
                    <h4>{t("coursesPage.coursesModulePage.heading.2")}</h4>
                    <img
                      src={close}
                      alt='...'
                      style={{ cursor: "pointer" }}
                      onClick={handleAccordian}
                    />
                  </div>
                  {courseModulesList?.map((obj, ind) => (
                    <Accordion
                      expanded={expanded === `panel${ind + 1}`}
                      onChange={handleChange(`panel${ind + 1}`)}
                    >
                      <AccordionSummary
                        aria-controls={`panel${ind + 1}d-content`}
                        id={`panel${ind + 1}d-header`}
                      >
                        <Typography>
                          <div className='number-bgbox'>{ind + 1}</div>
                          <span
                            onClick={() => handleactive(ind)}
                            style={{
                              color: showactive === ind ? "pink" : "black",
                            }}
                          >
                            {obj?.title.charAt(0)?.toUpperCase() + obj?.title?.slice(1)}
                          </span>
                        </Typography>
                      </AccordionSummary>
                      {obj?.sub_task &&
                        obj?.sub_task?.map((obj1, ind1) => (
                          <AccordionDetails>
                            <ul className='pl-5 position-relative'>
                              <li
                                key={obj?.id}
                                className={
                                  Number(course?.id) === obj?.id
                                    ? "active-accordiantext"
                                    : ""
                                }
                              >
                                {Number(course?.id) === obj?.id && (
                                  <img
                                    src={Rightcheck}
                                    className='ml-2'
                                    alt='...'
                                  />
                                )}
                                {ind + 1}.{ind1 + 1}
                                <span
                                  onClick={() => setShowsubactive(ind1)}
                                  style={{
                                    color:
                                      showsubactive === ind1 ? "pink" : "black",
                                  }}
                                >
                                  {" "}
                                   {obj1?.title?.charAt(0)?.toUpperCase() + obj1?.title?.slice(1)}
                                </span>
                              </li>
                            </ul>
                          </AccordionDetails>
                        ))}
                    </Accordion>
                  ))}
                </div>
              </Col>
            )}

            <Col md={show ? 8 : 11} xs={12}>
              <div className='card_courses'>
                <div className='card'>
                  {isLoading ? (
                    <>
                      {[1, 2].map((a) => (
                        <div className='mb-5' key={a}>
                          <Skeleton
                            variant='rectangular'
                            width={750}
                            height={45}
                            animation='wave'
                            style={{ marginBottom: 6 }}
                          />
                          <Skeleton
                            variant='rectangular'
                            width={750}
                            height={25}
                            animation='wave'
                            style={{ marginBottom: 15 }}
                          />
                          {[1, 2, 3, 4, 5].map((a) => (
                            <Skeleton
                              key={a}
                              variant='rectangular'
                              width={750}
                              height={15}
                              animation='wave'
                              style={{ marginBottom: 6 }}
                            />
                          ))}
                        </div>
                      ))}
                    </>
                  ) : (
                    <div
                      className='des_dynamic_con'
                      dangerouslySetInnerHTML={{
                        __html: course?.description,
                      }}
                    />
                  )}

                  <div className='prev_next_btn'>
                    <Row>
                      <Col md={6} xs={6}>
                        <button
                          className='back_button'
                          onClick={() => handlePrevModule(course?.prev_module)}
                          disabled={
                            course?.current_module === "1" ||
                            course?.current_module === null
                          }
                        >
                          {t("coursesPage.coursesModulePage.button.1")}
                        </button>
                      </Col>

                      <Col md={6} xs={6} className='text-right'>
                        {course?.next_module === null ? (
                          <button
                            className='next_button'
                            onClick={() => handleFinish()}
                          >
                            {t("coursesPage.coursesModulePage.button.2")}
                          </button>
                        ) : (
                          <button
                            className='next_button'
                            onClick={() =>
                              handleNextModule(course?.next_module)
                            }
                          >
                            {t("coursesPage.coursesModulePage.button.3")}
                          </button>
                        )}
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ScrollToTop />
      <Footer loginPage={false} />
    </div>
  );
};

export default CourseModule;
