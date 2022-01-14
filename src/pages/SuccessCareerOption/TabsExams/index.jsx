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
// import Share from "../../../assets/images/Guidance/share-button.png";
// import Bookmark from "../../../assets/images/Guidance/bookmark-button.png";
import "./index.scss";
import { useTranslation } from "react-i18next";

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
  const [tabValue, setTabValue] = useState(0);
  const [categoryDetail, setCategoryDetail] = useState(false);
  const [showGovtExams, setShowGovtExams] = useState(false);
  const { careerOptions, guidanceCategoryDetail, isLoading } = useSelector(
    (state) => state.guidanceReducer,
  );
  const { t } = useTranslation();


  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleChangeGovtExam = (value) => {
    setShowGovtExams(false);
    setCategoryDetail(false);
    setValue(0);
    dispatch(getGuidanceCategory());
  };

  const handleExamChange = (obj, id) => {
    setShowGovtExams(true);
    setCategoryDetail(false);
    setValue(0);
    setTabValue(obj);
    dispatch(resetCategoryDetail());
    dispatch(getGuidanceCategoryDetail(id));
  };

  const handleFullView = () => {
    setShowGovtExams(false);
    setCategoryDetail(true);
  };

  const onBackChange = (obj, id) => {
    setCategoryDetail(false);
    setShowGovtExams(true);
  };

  function renderExamTypes() {
    return (
      <Col md={4} xs={12}>
        <Tab
          label={t("successCareerOption.heading.3")}
          onClick={() => handleChangeGovtExam(true)}
          {...a11yProps(0)}
        />
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={categoryDetail && tabValue}
          onChange={handleChange}
          aria-label='categories'
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {careerOptions?.map((g, i) => (
            <>
              <Tab
                key={g?.id}
                label={g?.name}
                onClick={() => handleExamChange(i, g?.id)}
                iconPosition='start'
                {...a11yProps(1)}
              />
            </>
          ))}
        </Tabs>
      </Col>
    );
  }

  return (
    <>
      <div className='Com_title'>
        <h2>{t("successCareerOption.heading.2")}</h2>
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
            <div className='col-8 text-center mt-5'>
              {t("successCareerOption.other.1")}
            </div>
          )}
          <Col md={8} xs={12}>
            <TabPanel value={value} index={0}>
              <Row>
                {showGovtExams && careerOptions && (
                  <Col md={6} xs={12}>
                    <div className='tabs_box'>
                      <h2>{guidanceCategoryDetail?.category_name}</h2>
                      <p style={{ wordWrap: "break-word" }}>
                        {`${careerOptions[tabValue].short_description.slice(
                          0,
                          100,
                        )}...`}
                      </p>
                      <button onClick={() => handleFullView()}>
                        {t("successCareerOption.button.1")}
                      </button>
                    </div>
                    <br />
                  </Col>
                )}
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
                      {t("successCareerOption.other.2")}
                    </span>
                  </div>
                  <div className='banking-examheader'>
                    <h2>{guidanceCategoryDetail?.category_name}</h2>
                  </div>
                  {guidanceCategoryDetail?.description ? (
                    <div
                      className='locationdiv'
                      dangerouslySetInnerHTML={{
                        __html: guidanceCategoryDetail?.description,
                      }}
                    ></div>
                  ) : (
                    <div className='text-center'>
                      {isLoading
                        ? t("common.loading")
                        : t("common.noDataFound")}
                    </div>
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
