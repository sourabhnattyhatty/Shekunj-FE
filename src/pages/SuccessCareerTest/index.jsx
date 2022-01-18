import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Timer from "react-compound-timer";

import {
  Autocomplete,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Skeleton,
  TextField,
} from "@mui/material";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";

import { routingConstants } from "../../utils/constants";
import { Header, Footer } from "../../components";
import {
  getGuidanceCategory,
  fetchStartUserCareerTest,
  fetchUserCareerTestCount,
  postAnswer,
  endTest,
} from "../../store/guidance/action";
import useDeviceDetect from "../../hooks/useDeviceDetect";
import timeIcon from "../../assets/images/Courses/time.png";

import "./index.scss";
import "../CoursesModule/index.scss";

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
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [answer, setAnswer] = React.useState();
  const [toggle, setToggle] = React.useState(true);
  const [showTimer, setShowTimer] = React.useState(false);

  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [check3, setCheck3] = React.useState(false);
  const [check4, setCheck4] = React.useState(false);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [testTime, setTestTime] = useState(null);
  const [selectedCourseCategory, setSelectedCourseCategory] = useState(null);
  const [selectedCourseCategoryValue, setSelectedCourseCategoryValue] =
    useState(null);

  const history = useHistory();
  const dispatch = useDispatch();
  const detect = useDeviceDetect();
  // eslint-disable-next-line no-unused-vars
  const { isLoading, guidanceCategory, testData, countData } = useSelector(
    (state) => state?.guidanceReducer,
  );
  
  const { lan } = useSelector((state) => state.languageReducer);

  const progress = Math.round(100 / (countData?.total_career_que || 0)) || 0;

  const { t } = useTranslation();



  useEffect(() => {
    if (detect.isMobile) {
      toast.error(t("error.mobile.1"));
      history.push(routingConstants.HOME_PAGE);
    }
    // if (localStorage.getItem("isCarrerTestStarted")) {
    //   alert(t("alert"));
    //   const nv = localStorage.getItem("selectedCourseCategoryValue");
    //   localStorage.removeItem("isCarrerTestStarted");
    //   dispatch(endTest(nv, history));
    // }
  }, [history, detect.isMobile, t, dispatch, selectedCourseCategoryValue?.id]);

  useEffect(() => {
    return () => {
      const nv = localStorage.getItem("selectedCourseCategoryValue");
      if (nv) {
        dispatch(endTest(nv, history));
      }
    };
  }, [dispatch, history]); 
   



  useEffect(() => {  
    
    window.addEventListener("keydown", (e) => {
      if (localStorage.getItem("isCarrerTestStarted")) {
        if (
          (e.which || e.keyCode) === 116 ||
          ((e.which || e.keyCode) === 82 && e.ctrlKey  )
        ) {
          const a = window.confirm("Are you sure you want to refresh the page, if you click on Ok button you will be redirect on result page");
          if (a) {
           history.push(routingConstants.CAREER_TEST_RESULT + selectedCourseCategoryValue?.id,);
            e.preventDefault();
            const nv = localStorage.getItem("selectedCourseCategoryValue");
            localStorage.removeItem("isCarrerTestStarted");
            localStorage.removeItem("selectedCourseCategoryValue");
            if (nv) {
              dispatch(endTest(nv, history));
            }
          } else {
            e.preventDefault();
          }
        }
      }
    });
  }, []);

  // useEffect(() => {
  //   const unloadCallback = (event) => {
  //     var r = window.confirm("Successful Message!");
  //     if (r == true){
  //       window.location.reload();
  //     }
  //   };
  //   window.addEventListener("beforeunload", unloadCallback);
  //   return () => window.removeEventListener("beforeunload", unloadCallback);
  // }, []);

  useEffect(() => {
    if (testData) {
      if (testData?.answer === "A") {
        setCheck1(true);
        setCheck2(false);
        setCheck3(false);
        setCheck4(false);
        setAnswer(testData?.answer);
      } else if (testData?.answer === "B") {
        setCheck2(true);
        setCheck1(false);
        setCheck3(false);
        setCheck4(false);
        setAnswer(testData?.answer);
      } else if (testData?.answer === "C") {
        setCheck3(true);
        setCheck1(false);
        setCheck2(false);
        setCheck4(false);
        setAnswer(testData?.answer);
      } else if (testData?.answer === "D") {
        setCheck4(true);
        setCheck1(false);
        setCheck2(false);
        setCheck3(false);
        setAnswer(testData?.answer);
      } else {
        setCheck1(false);
        setCheck2(false);
        setCheck3(false);
        setCheck4(false);
      }
    }
  }, [
    testData,
    testData?.answer,
    testData?.optionA,
    testData?.optionB,
    testData?.optionC,
    testData?.optionD,
  ]);

  const handleFinishQuestion = () => {
    const data = {
      answer,
      career_test: testData?.id,
    };
    if (answer) {
      dispatch(
        postAnswer(data, history, selectedCourseCategoryValue?.id, true),
      );
      setAnswer("");
    } else {
      toast.error("Select option for next question", {
        position: "bottom-center",
      });
    }
  };

  React.useEffect(() => {
    if (selectedCourseCategoryValue?.id) {
      dispatch(
        fetchUserCareerTestCount(selectedCourseCategoryValue?.id, history),
      );
    }
  }, [dispatch, toggle, history, selectedCourseCategoryValue?.id]);

  React.useEffect(() => {
    if (countData && countData?.career_time > 0) {
      setTestTime(parseInt(countData?.career_time, 10) * 60000);
      setShowTimer(true);
      // localStorage.setItem("isCarrerTestStarted", true);
    }
  }, [countData, countData?.career_time]);

  useEffect(() => {
    dispatch(getGuidanceCategory());
  }, [dispatch, lan]);

  const handleStartCourse = async () => {
    localStorage.setItem("isCarrerTestStarted", true);
    if (!selectedCourseCategoryValue) {
      return;
    }
    const res = await dispatch(
      fetchStartUserCareerTest(selectedCourseCategoryValue?.id, history),
    );
    if (res?.status_code === 200) {
      const counts = await dispatch(
        fetchUserCareerTestCount(selectedCourseCategoryValue?.id),
      );
      if (counts.status_code === 200 && counts.data.career_time) {
        setIsTestStarted(true);
        setTestTime((parseInt(counts?.data.career_time, 10) || 0) * 60000);
      }
    }
  };

  const handleTestFinished = () => {
    dispatch(endTest(selectedCourseCategoryValue?.id));
    toast.error(t("error.other.2"));
    history.push(
      routingConstants.CAREER_TEST_RESULT + selectedCourseCategoryValue?.id,
    );
  };

  const handlePrevQuestion = () => {
    if (questionNumber > 1) setQuestionNumber((prev) => prev - 1);
    dispatch(
      fetchStartUserCareerTest(
        selectedCourseCategoryValue?.id,
        history,
        testData?.prev_module,
        0,
      ),
    );
  };

  const handleNextQuestion = () => {
    const data = {
      answer,
      career_test: testData?.id,
    };
    const newProgress = (countData?.user_career_test_count + 1) * progress;
    
    if (answer) {
      setQuestionNumber((prev) => prev + 1);
      dispatch(
        postAnswer(data, history, selectedCourseCategoryValue?.id, false),
      );
      setAnswer("");
      if (testData?.answer) {
        dispatch(
          fetchStartUserCareerTest(
            selectedCourseCategoryValue?.id,
            history,
            testData?.next_module,
          ),
        );
      } else {
        dispatch(
          fetchStartUserCareerTest(
            selectedCourseCategoryValue?.id,
            history,
            testData?.next_module,
            newProgress,
          ),
        );
      }
      setToggle((prev) => !prev);
    } else {
      toast.error(t("error.other.1"), {
        position: "bottom-center",
      });
    }
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

  const renderProgress = (count = 0) => {
    return (
      <IOSSlider
        aria-label='ios slider'
        className={
          (testData?.progress <= 33 && "red1-progress") ||
          (testData?.progress <= 60 && "yellow1-progress") ||
          (testData?.progress <= 100 && "green1-progress")
        }
        value={count}
        valueLabelFormat={(value) => <div>{value}%</div>}
        valueLabelDisplay='on'
        disabled
      />
    );
  };

  const handleAnswerCheck = (e, ans) => {
    setAnswer(ans);
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
      <Header loginPage={true} page='guidance' subPage='careerTest' />
      <Container>
        <div className='maindiv_prog setmain noselect'>
          <div className='select_test'>
            <h2>{t("successCareerTestPage.heading.1")}</h2>
            <Row>
              <Col md={9} xs={12}>
                <FormControl sx={{ m: 1 }}>
                  <Autocomplete
                    className='auto-complete'
                    {...{
                      options: guidanceCategory,
                      getOptionLabel: (option) => option.name,
                    }}
                    onChange={(_, newValue) => {
                      setSelectedCourseCategoryValue(newValue);
                      localStorage.setItem(
                        "selectedCourseCategoryValue",
                        newValue?.id,
                      );
                    }}
                    onInputChange={(_, newInputValue) =>
                      setSelectedCourseCategory(newInputValue)
                    }
                    disabled={isTestStarted}
                    inputValue={String(selectedCourseCategory)}
                    id='disable-clearable'
                    disableClearable
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color='primary'
                        label={t("successCareerTestPage.other.1")}
                        variant='standard'
                      />
                    )}
                  />
                  {/* <Select
                    displayEmpty
                    value={selectedCourseCategory}
                    onChange={handleCategoryChange}
                    input={<OutlinedInput />}
                    disabled={isTestStarted}
                    renderValue={(selected) => {
                      if (selected?.length === 0) {
                        return (
                          <>
                            <em>{t("successCareerTestPage.other.1")}</em>
                          </>
                        );
                      }
                      return selected;
                    }}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {guidanceCategory?.map((item) => {
                      return (
                        <MenuItem key={item?.id} value={item}>
                          {item?.name}
                        </MenuItem>
                      );
                    })}
                  </Select> */}
                </FormControl>
              </Col>

              <Col md={3} xs={12} className='mt-1'>
                <button
                  onClick={() => handleStartCourse()}
                  disabled={isTestStarted}
                >
                  {isTestStarted
                    ? t("successCareerTestPage.button.1")
                    : t("successCareerTestPage.button.2")}
                </button>
              </Col>
            </Row>
          </div>

          {isTestStarted && (
            <Row className='pt-md-5 pb-md-5'>
              <Col md={12} xs={12} className='text-left'>
                <div className='circular_progress_module'>
                  <Stack
                    className='d-flex justify-content-between'
                    spacing={2}
                    direction='row'
                  >
                    <h3>{selectedCourseCategory}</h3>
                    <button onClick={() => handleFinishQuestion()}>
                      {t("coursesPage.coursesModulePage.button.2")}
                    </button>
                  </Stack>
                  {renderProgress(testData?.progress)}
                </div>
              </Col>
            </Row>
          )}
        </div>

        {isTestStarted && (
          <>
            <div className='time_set noselect'>
              <p>
                <img src={timeIcon} alt='timeIcon' /> {t("common.time.5") + " "}
                {showTimer && renderTimmer(testTime)}
              </p>
            </div>

            <Row>
              <Col md={8} xs={12}>
                <div className='que_box noselect'>
                  <h2>{t("allCertificatePage.other.5")}</h2>
                  {isLoading ? (
                    <Skeleton></Skeleton>
                  ) : (
                    <p>
                      {questionNumber}. {testData?.question}
                    </p>
                  )}
                  {testData && (
                    <RadioGroup aria-label='gender' name='radio-buttons-group'>
                      {testData?.optionA &&
                        (isLoading ? (
                          <Skeleton />
                        ) : (
                          <FormControlLabel
                            value='1'
                            control={
                              <Radio
                                checked={check1}
                                onChange={(e) => handleAnswerCheck(e, "A")}
                              />
                            }
                            label={testData?.optionA}
                          />
                        ))}
                      {testData?.optionB &&
                        (isLoading ? (
                          <Skeleton />
                        ) : (
                          <FormControlLabel
                            value='2'
                            control={
                              <Radio
                                checked={check2}
                                onChange={(e) => handleAnswerCheck(e, "B")}
                              />
                            }
                            label={testData?.optionB}
                          />
                        ))}
                      {testData?.optionC &&
                        (isLoading ? (
                          <Skeleton />
                        ) : (
                          <FormControlLabel
                            value='3'
                            control={
                              <Radio
                                checked={check3}
                                onChange={(e) => handleAnswerCheck(e, "C")}
                              />
                            }
                            label={testData?.optionC}
                          />
                        ))}
                      {testData?.optionD &&
                        (isLoading ? (
                          <Skeleton />
                        ) : (
                          <FormControlLabel
                            value='4'
                            control={
                              <Radio
                                checked={check4}
                                onChange={(e) => handleAnswerCheck(e, "D")}
                              />
                            }
                            label={testData?.optionD}
                          />
                        ))}
                    </RadioGroup>
                  )}
                </div>{" "}
                <div className='prev_next_btn noselect'>
                  <Row>
                    <Col md={6} xs={6}>
                      <button
                        className='back_button'
                        onClick={() => handlePrevQuestion()}
                        disabled={!testData?.prev_module}
                      >
                        {t("coursesPage.coursesModulePage.button.1")}
                      </button>
                    </Col>

                    <Col md={6} xs={6} className='text-right'>
                      {countData?.total_career_que === questionNumber ? (
                        <button
                          className='next_button'
                          onClick={() => handleFinishQuestion()}
                        >
                          {t("coursesPage.coursesModulePage.button.2")}
                        </button>
                      ) : (
                        <button
                          className='next_button'
                          onClick={() => handleNextQuestion()}
                        >
                          {t("coursesPage.coursesModulePage.button.3")}
                        </button>
                      )}
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col md={4} xs={12}>
                <div className='que_status noselect'>
                  <h2>{t("successCareerTestPage.heading.2")}</h2>
                  <div className='que_num'>
                    {[...Array(countData?.total_career_que).keys()].map((i) => (
                      <p
                        id={
                          i + 1 <= countData?.user_career_test_count
                            ? "col_gre"
                            : "col_grey"
                        }
                      >
                        {i + 1}
                      </p>
                    ))}
                  </div>
                </div>
                <div className='ans_not noselect'>
                  <ul>
                    <li>
                      <span className='dotte1'></span>{" "}
                      {t("successCareerTestPage.other.2")}
                    </li>
                    <li>
                      <span className='dotte2'></span>{" "}
                      {t("successCareerTestPage.other.3")}
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
      <Footer loginPage={false} />
    </div>
  );
}

export default CourseTest;
