import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { useHistory, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Timer from "react-compound-timer";
import useExitPrompt from "../../hooks/useExitPromt";

import {
  Autocomplete,
  Container,
  Card,
  FormControlLabel,
  Radio,
  RadioGroup,
  Skeleton,
  TextField,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import img1 from "../../assets/images/shekunj_magzine.jpg";
import global from "../../assets/images/Success/global.png";
import axios from "axios";

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
import { adsList } from "../../store/ads";

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

function MockTest() {
  const [showExitPrompt, setShowExitPrompt] = useExitPrompt(false);
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
  const [mockTestBoxAds, setMockTestBoxAds] = useState([]);
  const [image, setImage] = useState("NA");
  const [adds, setAdds] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();
  const detect = useDeviceDetect();
  // eslint-disable-next-line no-unused-vars
  const { isLoading, guidanceCategory, testData, countData } = useSelector(
    (state) => state?.guidanceReducer,
  );

  const progress = Math.round(100 / (countData?.total_career_que || 0)) || 0;

  const { t } = useTranslation();
  const { lan } = useSelector((state) => state.languageReducer);

  // useEffect(()=> {
  //   setQuestionNumber(countData?.user_career_test_count + 1)
  // },[countData])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position, values) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      let params = {
        latitude: latitude.toString(),
        longitude: longitude.toString(),
      };
      axios
        .get(
          `/private_adds/private_add?latitude=${latitude}&longitude=${longitude}`,
        )
        .then((response) => {
          if (response.data.results.length > 0) {
            let filterArray = response.data.results.filter((item, index) => {
              return item.image_type == "mock_test";
            });
            let findImage =
              filterArray.length > 0 ? filterArray[0].image : "NA";
            setImage(findImage);
            setMockTestBoxAds(filterArray);
          }
        });
    });
    dispatch(adsList());
  }, []);

  const addEmail = (email) => {
    console.log("addEmail", email);
    navigator.geolocation.getCurrentPosition(async function (position, values) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      let params = {
        latitude: latitude.toString(),
        longitude: longitude.toString(),
      };
      axios
        .post("/private_adds/click_add/", {
          // add_email:`${adds[0]?.add_email}`
          add_email: email,
          latitude: params.latitude.toString(),
          longitude: params.longitude.toString(),
        })
        .then((response) => {
          // setAdds(response.data.results);
          console.log("addEmailresponse", response);
        });
    });
  };

  useEffect(() => {
    const nv = localStorage.getItem("selectedCourseCategoryValue");
    localStorage.removeItem("selectedCourseCategoryValue");
    localStorage.removeItem("isCarrerTestStarted");
    setShowExitPrompt(false);
    if (nv) {
      dispatch(endTest(nv, history));
      history.push(routingConstants.CAREER_TEST_RESULT + nv);
    }
  }, []);

  // useEffect(() => {
  //   if (detect.isMobile) {
  //     history.push(`${routingConstants.HOME_PAGE}?redirect=mobileView`);
  //   }
  // }, [history, detect.isMobile, t, dispatch, selectedCourseCategoryValue?.id]);

  useEffect(() => {
    return () => {
      const nv = localStorage.getItem("selectedCourseCategoryValue");
      if (nv) {
        dispatch(endTest(nv, history));
      }
    };
  }, [dispatch, history]);

  useEffect(() => {
    return () => {
      setShowExitPrompt(false);
    };
  }, []);

  // useEffect(() => {
  //   window.addEventListener("keydown", (e) => {
  //     if (localStorage.getItem("isCarrerTestStarted")) {
  //       if (
  //         (e.which || e.keyCode) === 116 ||
  //         ((e.which || e.keyCode) === 82 && e.ctrlKey)
  //       ) {
  //         const a = window.confirm(
  //           "Are you sure you want to refresh the page, if you click on Ok button you will be redirect on result page",
  //         );
  //         if (a) {
  //           const nv = localStorage.getItem("selectedCourseCategoryValue");
  //           localStorage.removeItem("isCarrerTestStarted");
  //           // localStorage.removeItem("selectedCourseCategoryValue");
  //           history.push(
  //             routingConstants.CAREER_TEST_RESULT +
  //               selectedCourseCategoryValue?.id,
  //           );
  //           e.preventDefault();
  //           if (nv) {
  //             dispatch(endTest(nv, history));
  //           }
  //         } else {
  //           e.preventDefault();
  //         }
  //       }
  //     }
  //   });
  // }, []);

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

  // const handleStartCourse = async () => {
  //   setShowExitPrompt(true);
  //   localStorage.setItem("isCarrerTestStarted", true);
  //   if (!selectedCourseCategoryValue) {
  //     return;
  //   }
  //   const res = await dispatch(
  //     fetchStartUserCareerTest(selectedCourseCategoryValue?.id, history),
  //   );
  //   if (res?.status_code === 200) {
  //     const counts = await dispatch(
  //       fetchUserCareerTestCount(selectedCourseCategoryValue?.id),
  //     );
  //     if (counts.status_code === 200 && counts.data.career_time) {
  //       setIsTestStarted(true);
  //       setTestTime((parseInt(counts?.data.career_time, 10) || 0) * 60000);
  //     }
  //   }
  // };

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
      <div className='SuccStory_banner'>
        {" "}
        <Container>
          <Row>
            <Col md={1}>
              <div className='global_img'>
                <img src={global} alt='' className='vert-move' />
              </div>
            </Col>
            <Col md={6} data-aos='slide-up'>
              <h2> {t("Shekunj Online Test..")}</h2>
              <p> Have a look how SheKunj has played an important role</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        {console.log("guidanceCategory", guidanceCategory)}
        {guidanceCategory?.length > 0 &&
          guidanceCategory?.map((gb, index) => {
            console.log("gb", gb);
            return (
              <>
              <Grid Container spacing={2} className='gridContainer flex'>
                {/* <div className='guidanceCategory' key={gb?.id}> */}

                {/* <Col sm={1} md={12}> */}
                <Col md={1} xl={12}>
                  {/* <Grid item xs={12} sm={4} md={2} > */}
                  <Card className='GuidanceOptionCard '>
                    <CardContent>
                      <CardMedia
                        className='guidanceOptionImage'
                        component='img'
                        image={gb?.image}
                        alt='green iguana'
                      />
                      <Typography
                        variant='h6'
                        className='guidanceOptionTitle'
                        fullWidth
                      >
                        {gb?.name}
                      </Typography>
                    </CardContent>
                    <Typography
                      sx={{ mb: 1.5 }}
                      className='guidanceOptionTitle2'
                      color='text.secondary'
                      fullWidth
                    >
                      Total Time: {gb?.career_test_time}
                    </Typography>
                    <CardActions className='actions'>
                      <Link
                        to={routingConstants.MOCKTEST + gb?.id}
                        className=''
                        key={gb?.id}
                      >
                        <Button
                          size='small'
                          variant='contained'
                          //  onClick={() => handleStartCourse()}disabled={isTestStarted}
                        >
                          Start Test
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                  {/* </Grid> */}
                </Col>
                </Grid>

                {index % 4 == 3 ? (
                  <>
                    {/* <div className='Row'>
                      <Col md={1} xl={12}> */}
                       <Grid Container spacing={2} className='gridContainer flex'>

                <Col md={1} xl={12}>
                  <Card className='GuidanceOptionCard '>
                        {mockTestBoxAds.length > 0 && (
                          <div
                            className='slide-img-test'
                            onClick={() =>
                              addEmail(mockTestBoxAds[0]?.add_email)
                            }
                          >
                            <a
                              href={mockTestBoxAds[0]?.url_adds}
                              target='_blank'
                            >
                              <img
                                src={mockTestBoxAds[0]?.image}
                                alt='Image'
                                className='GuidanceOptionCardAdd'
                              />
                            </a>
                            <div className='overlay'></div>
                          </div>
                        )}
                        </Card>
                        </Col>
                         </Grid>
                      {/* </Col>
                    </div> */}
                  </>
                ) : (
                  ""
                )}
              {/* </Grid> */}
              </>
            );
          })}
      </Container>
      <Footer loginPage={false} />
    </div>
  );
}

export default MockTest;
