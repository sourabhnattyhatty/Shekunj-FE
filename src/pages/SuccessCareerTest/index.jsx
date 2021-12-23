import { Container, FormControlLabel, Radio, RadioGroup, Skeleton } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import { Row, Col } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { Header, Footer, ScrollToTop } from "../../components";

import "./index.scss";
import "../CoursesModule/index.scss";
import GuidanceSelect from "../GuidanceBook/Select/index";

import time from "../../assets/images/Courses/time.png";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import { useSelector } from "react-redux";

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
  const history = useHistory();
  const { isLoading } = useSelector((state) => state.guidanceReducer);

  React.useEffect(() => {
    if (isMobile) {
      toast.error("This page is not availble in mobile view.");
      history.push("/");
    }
  }, [history]);

  return (
    <div>
      <Header loginPage={true} page='guidance' subPage='careerTest' />
      <Container>
        <div className='maindiv_prog setmain'>
          <div className='select_test'>
            <h2>Select test Categories</h2>
            <Row>
              <Col md={9} xs={12}>
                <GuidanceSelect title='Test Categories' />
              </Col>

              <Col md={3} xs={12}>
                <button>Start Course</button>
              </Col>
            </Row>
          </div>

          <Row className='pt-md-5 pb-md-5'>
            <Col md={12} xs={12} className='text-left'>
              <div className='circular_progress_module'>
                <Stack
                  className='d-flex justify-content-between'
                  spacing={2}
                  direction='row'
                >
                  <h3>Banking Exam</h3>
                  <button>Finish</button>
                </Stack>
              </div>
              <IOSSlider
                aria-label='ios slider'
                value={20}
                valueLabelFormat={(value) => <div>{value}%</div>}
                valueLabelDisplay='on'
                disabled
              />
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
                  1. Which state has topped the highest employability rate, as
                  per latest India Skills Report 2019
                </p>
              )}
                <RadioGroup aria-label='gender' name='radio-buttons-group'>
                  
                    <FormControlLabel
                      value="Andhra Pradesh"
                      control={<Radio />}
                      label="Andhra Pradesh"
                      // onChange={(e) => setAnswer(e.target.value)}
                    />
                  
                    <FormControlLabel
                      value="Karnataka"
                      control={<Radio />}
                      label="Karnataka"
                      // onChange={(e) => setAnswer(e.target.value)}
                    />
                    <FormControlLabel
                      value="Rajasthan"
                      control={<Radio />}
                      label="Rajasthan"
                      // onChange={(e) => setAnswer(e.target.value)}
                    />
                    <FormControlLabel
                      value="Tamil Nadu"
                      control={<Radio />}
                      label="Tamil Nadu"
                      // onChange={(e) => setAnswer(e.target.value)}
                    />
                </RadioGroup>
            </div>{" "}
           
            <div className='prev_next_btn'>
              <Row>
                <Col md={6} xs={6}>
                  <button className='back_button'>back</button>
                  {/* <p className='prev_icon'>
                          <img src={Previous} className='mr-2' alt='...' />{" "}
                          Previous
                        </p> */}
                </Col>

                <Col md={6} xs={6} className='text-right'>
                  <button className='next_button'>next</button>
                  {/* <p className='prev_icon'>
                          Next
                          <img src={Next} className='ml-2' alt='...' />{" "}
                        </p> */}
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={4} xs={12}>
            <div className='que_status'>
              <h2>Questions Status</h2>
              <div className='que_num' id='col_gre'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
              </div>
              <div className='que_num' id='col_grey'>
                <p>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
                <p>14</p>
                <p>15</p>
                <p>16</p>
                <p>17</p>
                <p>18</p>
              </div>
              <div className='que_num' id='col_grey'>
                <p>19</p>
                <p>20</p>
                <p>21</p>
                <p>22</p>
                <p>23</p>
                <p>24</p>
                <p>25</p>
                <p>26</p>
                <p>27</p>
              </div>
              <div className='que_num' id='col_grey'>
                <p>28</p>
                <p>29</p>
                <p>30</p>
                <p>31</p>
                <p>32</p>
                <p>33</p>
                <p>34</p>
                <p>35</p>
                <p>36</p>
              </div>
              <div className='que_num' id='col_grey'>
                <p>37</p>
                <p>38</p>
                <p>39</p>
                <p>40</p>
                <p>41</p>
                <p>42</p>
                <p>43</p>
                <p>44</p>
                <p>45</p>
              </div>
              <div className='que_num' id='col_grey'>
                <p>46</p>
                <p>47</p>
                <p>48</p>
                <p>49</p>
                <p>50</p>
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
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
