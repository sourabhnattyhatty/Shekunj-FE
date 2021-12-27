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
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import Slider from "@mui/material/Slider";
import Timer from "react-compound-timer";

import { Header, Footer, ScrollToTop } from "../../components";

import "./index.scss";
import "../CoursesModule/index.scss";

import time from "../../assets/images/Courses/time.png";
import { useDispatch, useSelector } from "react-redux";
import {
  endTest,
  getUserTestQuestion,
  postAnswer,
  testCountSummery,
} from "../../store/courses/action";
import { styled } from "@mui/material/styles";

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#3880ff" : "#3880ff",
  marginTop: 20,
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

function CourseTest() {
  const [answer, setAnswer] = React.useState();
  const [toggle, setToggle] = React.useState(true);
  const [showTimer, setShowTimer] = React.useState(false);
  const [timer, setTimer] = React.useState();

  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [check3, setCheck3] = React.useState(false);
  const [check4, setCheck4] = React.useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const detect = useDeviceDetect();
  const { id } = useParams();

  const { question, questionCount, isLoading } = useSelector(
    (state) => state.coursesReducer,
  );

  console.log(">>>>>>>>>>", question);

  const progress =
    Math.round(100 / (questionCount?.total_course_que || 0)) || 0;

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
  }, [dispatch, toggle, history, id]);

  React.useEffect(() => {
    if (questionCount && questionCount?.counse_time > 0) {
      setTimer(parseInt(questionCount?.counse_time, 10) * 60000);
      setShowTimer(true);
    }
  }, [questionCount, questionCount?.counse_time]);

  const handleNextQuestion = () => {
    const data = {
      answer,
      course_test: question?.id,
    };
    const newProgress = (questionCount?.user_course_test_count + 1) * progress;

    if (answer) {
      dispatch(postAnswer(data, id));
      setAnswer("");
      dispatch(
        getUserTestQuestion(id, history, question?.next_module, newProgress),
      );
      setToggle((prev) => !prev);
    } else {
      toast.error("Select option for next question", {
        position: "bottom-center",
      });
    }
    setCheck1(false);
    setCheck2(false);
    setCheck3(false);
    setCheck4(false);
  };

  const handleFinishQuestion = () => {
    const data = {
      answer,
      course_test: question?.id,
    };
    if (answer) {
      dispatch(postAnswer(data, id));
      dispatch(endTest(id));
      setAnswer("");
      history.push(`/CourseResult/${id}`);
    } else {
      toast.error("Select option for next question", {
        position: "bottom-center",
      });
    }
  };

  const handlePrevQuestion = () => {
    dispatch(getUserTestQuestion(id, history, question?.prev_module, progress));
  };

  const renderProgress = (count = 0) => {
    return (
      <IOSSlider
        aria-label='ios slider'
        className={
          (question?.progress <= 33 && "red1-progress") ||
          (question?.progress <= 60 && "yellow1-progress") ||
          (question?.progress <= 100 && "green1-progress")
        }
        value={count}
        valueLabelFormat={(value) => <div>{value}%</div>}
        valueLabelDisplay='on'
        disabled
      />
    );
  };

  const handleTestFinished = () => {
    toast.error("Test finishes!");
    history.push(`/CourseResult/${id}`);
  };

  const renderTimmer = (value) => {
    return (
      <Timer
        initialTime={value}
        checkpoints={[
          {
            time: 0,
            callback: () => handleTestFinished(),
          },
        ]}
        direction='backward'
      >
        {() => (
          <>
            <Timer.Hours /> :
            <Timer.Minutes />:
            <Timer.Seconds />
          </>
        )}
      </Timer>
    );
  };

  const handleAnswerCheck = (e) => {
    debugger;
    setAnswer(e.target.labels[0].children[1].innerText);
    if (e.target.value === "1") {
      setCheck1(true);
      setCheck2(false);
      setCheck3(false);
      setCheck4(false);
    } else if (e.target.value === "2") {
      setCheck1(false);
      setCheck2(true);
      setCheck3(false);
      setCheck4(false);
    } else if (e.target.value === "3") {
      setCheck1(false);
      setCheck2(false);
      setCheck3(true);
      setCheck4(false);
    } else if (e.target.value === "4") {
      setCheck1(false);
      setCheck2(false);
      setCheck3(false);
      setCheck4(true);
    }
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
                {renderProgress(question?.progress)}
              </div>
            </Col>
          </Row>
        </div>

        <div className='time_set'>
          <p>
            <img src={time} alt='' /> Time left:{" "}
            {showTimer && renderTimmer(timer)}
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
                  {questionCount?.user_course_test_count + 1}.{" "}
                  {question?.question}
                </p>
              )}
              {question && (
                <RadioGroup name='radio-buttons-group' value={answer}>
                  {question?.optionA &&
                    (isLoading ? (
                      <Skeleton />
                    ) : (
                      <FormControlLabel
                        value='1'
                        control={
                          <Radio
                            checked={check1}
                            onChange={handleAnswerCheck}
                          />
                        }
                        label={question?.optionA}
                      />
                    ))}
                  {question?.optionB &&
                    (isLoading ? (
                      <Skeleton />
                    ) : (
                      <FormControlLabel
                        value='2'
                        control={
                          <Radio
                            checked={check2}
                            onChange={handleAnswerCheck}
                          />
                        }
                        label={question?.optionB}
                      />
                    ))}
                  {question?.optionC &&
                    (isLoading ? (
                      <Skeleton />
                    ) : (
                      <FormControlLabel
                        value='3'
                        control={
                          <Radio
                          checked={check3}
                          onChange={handleAnswerCheck}
                          />
                        }
                        label={question?.optionC}
                      />
                    ))}
                  {question?.optionD &&
                    (isLoading ? (
                      <Skeleton />
                    ) : (
                      <FormControlLabel
                        value='4'
                        control={
                          <Radio
                          checked={check4}
                          onChange={handleAnswerCheck}
                          />
                        }
                        label={question?.optionD}
                      />
                    ))}
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
                    disabled={!question?.prev_module}
                  >
                    back
                  </button>
                </Col>

                <Col md={6} xs={6} className='text-right'>
                  {questionCount?.total_course_que ===
                  questionCount?.user_course_test_count + 1 ? (
                    <button
                      className='next_button'
                      onClick={() => handleFinishQuestion()}
                    >
                      finish
                    </button>
                  ) : (
                    <button
                      className='next_button'
                      onClick={() => handleNextQuestion()}
                    >
                      next
                    </button>
                  )}
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
