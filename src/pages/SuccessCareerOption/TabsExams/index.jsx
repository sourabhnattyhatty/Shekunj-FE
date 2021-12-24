import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import {
  getGuidanceCategory,
  getGuidanceCategoryDetail,
  resetCategoryDetail,
} from "../../../store/guidance";
import backButtonImg from "../../../assets/images/Guidance/back-arrow.png";
import Share from "../../../assets/images/Guidance/share-button.png";
import Bookmark from "../../../assets/images/Guidance/bookmark-button.png";
import "./index.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [categoryDetail, setCategoryDetail] = useState(false);
  const [showGovtExams, setShowGovtExams] = useState(true);
  const { guidanceCategory, guidanceCategoryDetail } = useSelector(
    (state) => state.guidanceReducer,
  );

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleChangeGovtExam = (value) => {
    setShowGovtExams(value);
    setCategoryDetail(false);
    setValue(0);
    dispatch(getGuidanceCategory());
  };

  const handleExamChange = (obj) => {
    setShowGovtExams(false);
    setCategoryDetail(true);
    setValue(0);
    dispatch(resetCategoryDetail());
    dispatch(getGuidanceCategoryDetail(obj.id));
  };

  const onBackChange = () => {
    setCategoryDetail(false);
    setShowGovtExams(true);
    dispatch(resetCategoryDetail());
  };

  function renderExamTypes() {
    return (
      <Col md={4} xs={12}>
        <Tab
          label='Govt Exams'
          onClick={() => handleChangeGovtExam(true)}
          {...a11yProps(0)}
        />
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={categoryDetail}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {guidanceCategory?.public?.map((g) => (
            <Tab
              key={g?.id}
              label={g?.name}
              onClick={() => handleExamChange(g)}
              iconPosition='start'
              {...a11yProps(1)}
            />
          ))}
        </Tabs>
      </Col>
    );
  }

  return (
    <>
      <div className='Com_title'>
        <h2>Career Option</h2>
      </div>

      <Box
        sx={{
          flexGrow: 1,
          bgColor: "background.paper",
        }}
      >
        <Row>
          {renderExamTypes()}
          {!showGovtExams && !categoryDetail && (
            <div className='col-8 text-center mt-5'>No Option selected!</div>
          )}
          <Col md={8} xs={12}>
            <TabPanel value={value} index={0}>
              <Row>
                {showGovtExams &&
                  (guidanceCategory?.private?.length > 0 ? (
                    guidanceCategory?.private?.map((obj) => (
                      <Col md={6} xs={12}>
                        <div className='tabs_box'>
                          <h2>{obj.name}</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Odio justo et amet varius velit. Eu, ac amet
                            elit orci ullamcorper proin pellentesque.{" "}
                          </p>
                          <button onClick={() => handleExamChange(obj)}>
                            Read More
                          </button>
                        </div>
                      </Col>
                    ))
                  ) : (
                    <div className='text-center'>No data found!</div>
                  ))}
              </Row>
            </TabPanel>

            {categoryDetail && (
              <TabPanel>
                <div className='banking-exampage'>
                  <div>
                    <span
                      className='back_button'
                      onClick={() => onBackChange()}
                    >
                      <img src={backButtonImg} alt='' />
                      back
                    </span>
                  </div>
                  <div className='banking-examheader'>
                    <h2>{guidanceCategoryDetail?.category_name}</h2>
                    <ul className='list-inline'>
                      <li className='list-inline-item'>
                        <img src={Share} alt='' className='mr-3' />
                        Share
                      </li>
                      <li className='list-inline-item'>
                        <img src={Bookmark} alt='' className='mr-3' />
                        Save
                      </li>
                    </ul>
                  </div>
                  {guidanceCategoryDetail?.description ? (
                    <div
                      className='locationdiv'
                      dangerouslySetInnerHTML={{
                        __html: guidanceCategoryDetail?.description,
                      }}
                    ></div>
                  ) : (
                    <div className='text-center'>No data found!</div>
                  )}
                  <hr className='border-colorbottom'></hr>
                </div>
              </TabPanel>
            )}
          </Col>
        </Row>
      </Box>
    </>
  );
}
