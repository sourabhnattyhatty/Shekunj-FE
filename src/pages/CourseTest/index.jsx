import {
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Skeleton,
} from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import { Row, Col } from "react-bootstrap";
import { LinearProgress } from "@mui/material";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import Slider from "@mui/material/Slider";

import { Header, Footer, ScrollToTop } from "../../components";

import "./index.scss";
import "../CoursesModule/index.scss";

import time from "../../assets/images/Courses/time.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserTestQuestion,
  postAnswer,
  testCountSummery,
} from "../../store/courses/action";
import { styled } from "@mui/material/styles";

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#3880ff" : "#3880ff",
  marginTop: 20,
  height: 10,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 13,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));


function CourseTest() {
  const [answer, setAnswer] = React.useState();
  const [toggle, setToggle] = React.useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const detect = useDeviceDetect();
  const { id } = useParams();
  const { question, questionCount, isLoading } = useSelector(
    (state) => state.coursesReducer,
  );

  React.useEffect(() => {
    dispatch(getUserTestQuestion(id, history));
    dispatch(testCountSummery(id, history));
    if (detect.isMobile) {
      toast.error("This page is not availble in mobile view.");
      history.push("/");
    }
  }, [history, detect.isMobile, id, dispatch]);

  React.useEffect(() => {
    dispatch(testCountSummery(id, history));
  }, [dispatch, toggle]);

  const handleNextQuestion = () => {
    const data = {
      answer,
      course_test: question?.id,
    };
    if (answer) {
      dispatch(postAnswer(data, id));
      setAnswer('');
      dispatch(getUserTestQuestion(id, history, question?.next_module));
      setToggle((prev) => !prev);
    } else {
      toast.error("Select option for next question", {
        position: "bottom-center",
      });
    }
  };

  const handlePrevQuestion = () => {
    dispatch(getUserTestQuestion(id, history, question?.prev_module));
  };

  const renderProgress = (count = 0) => {
    return (
      <IOSSlider
        aria-label='ios slider'
        value={count}
        valueLabelFormat={(value) => <div>{value}%</div>}
        valueLabelDisplay='on'
        disabled
      />
    );
  };

  return (
    <div>
      <Header loginPage={true} page='courses' />
      <Container>
        <div className='maindiv_prog'>
          <Row className='pt-md-5 pb-md-5'>
            <Col md={12} xs={12} className='text-left'>
              <div className='circular_progress_module'>
                <Stack spacing={2} direction='row'>
                  {" "}
                  <h3>Your Progress</h3>
                </Stack>
                {/* <LinearProgress variant='determinate' value={20} />
                <div className='label-progressbar'> 20%</div> */}
                {renderProgress(10)}
              </div>
            </Col>
          </Row>
        </div>

        <div className='time_set'>
          <p>
            <img src={time} alt='' /> Time left: 44:55
          </p>
        </div>

        <Row>
          <Col md={8} xs={12}>
            <div className='que_box'>
              <h2>Question</h2>
              {isLoading ? (
                <Skeleton></Skeleton>
              ) : (
                <p>
                  {question?.id}. {question?.question}
                </p>
              )}
              {question && (
                <RadioGroup
                  aria-label='gender'
                  name='radio-buttons-group'
                  defaultValue={question?.answer ? question?.answer : ""}
                >
                  {question?.optionA && (
                    <FormControlLabel
                      value={question?.optionA}
                      control={<Radio />}
                      label={question?.optionA}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  )}
                  {question?.optionB && (
                    <FormControlLabel
                      value={question?.optionB}
                      control={<Radio />}
                      label={question?.optionB}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  )}
                  {question?.optionC && (
                    <FormControlLabel
                      value={question?.optionC}
                      control={<Radio />}
                      label={question?.optionC}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  )}
                  {question?.optionD && (
                    <FormControlLabel
                      value={question?.optionD}
                      control={<Radio />}
                      label={question?.optionD}
                      onChange={(e) => setAnswer(e.target.value)}
                    />
                  )}
                </RadioGroup>
              )}
            </div>{" "}
            <br />
            <div className='prev_next_btn'>
              <Row>
                <Col md={6} xs={6}>
                  <button
                    className='back_button'
                    onClick={() => handlePrevQuestion()}
                  >
                    back
                  </button>
                </Col>

                <Col md={6} xs={6} className='text-right'>
                  <button
                    className='next_button'
                    onClick={() => handleNextQuestion()}
                  >
                    {questionCount?.total_course_que ===
                    questionCount?.user_course_test_count + 1
                      ? "finish"
                      : "next"}
                  </button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={4} xs={12}>
            <div className='que_status'>
              <h2>Questions Status</h2>
              <div className='que_num'>
                {[...Array(questionCount?.total_course_que).keys()].map(
                  (obj) => (
                    <p
                      id={
                        obj + 1 <= questionCount?.user_course_test_count
                          ? "col_gre"
                          : "col_grey"
                      }
                    >
                      {obj + 1}
                    </p>
                  ),
                )}
              </div>
            </div>

            <div className='ans_not'>
              <ul>
                <li>
                  <span className='dotte1'></span> Answered
                </li>
                <li>
                  <span className='dotte2'></span> Not visited
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
      <Footer loginPage={false} />
    </div>
  );
}

export default CourseTest;
