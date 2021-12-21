import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Backbutton from "../../../assets/images/Guidance/back-arrow.png";
import Share from "../../../assets/images/Guidance/share-button.png";
import Bookmark from "../../../assets/images/Guidance/bookmark-button.png";
import Location from "../../../assets/images/Guidance/location.png";
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
  const [value, setValue] = React.useState(0);
  const [show, setShow] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShow(false);
  };

  return (
    <>
      <div className='Com_title'>
        <h2>Career Option</h2>
      </div>

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
        }}
      >
        <Row>
          <Col md={4} xs={12}>
            <Tabs
              orientation='vertical'
              variant='scrollable'
              value={value}
              onChange={handleChange}
              aria-label='Vertical tabs example'
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab
                label='Govt Exams'
                onClick={() => setShow(false)}
                {...a11yProps(0)}
              />
              <Tab
                label='UPSC CSE'
                onClick={() => setShow(false)}
                {...a11yProps(1)}
              />
              <Tab
                label='Defence Exams'
                onClick={() => setShow(false)}
                {...a11yProps(2)}
              />
              <Tab
                label='JEE and NEET Preparation'
                onClick={() => setShow(false)}
                {...a11yProps(3)}
              />
              <Tab
                label='State PSC'
                onClick={() => setShow(false)}
                {...a11yProps(4)}
              />
              <Tab
                label='NET Exam'
                onClick={() => setShow(false)}
                {...a11yProps(5)}
              />
              <Tab
                label='GATE, ESE and IIT, JAM'
                onClick={() => setShow(false)}
                {...a11yProps(6)}
              />
              <Tab
                label='NEET PG'
                onClick={() => setShow(false)}
                {...a11yProps(7)}
              />
              <Tab
                label='Teaching Exams (TET)'
                onClick={() => setShow(false)}
                {...a11yProps(7)}
              />
              <Tab
                label='CAT and Other MBA Entrance Tests'
                onClick={() => setShow(false)}
                {...a11yProps(8)}
              />
              <Tab
                label='CA'
                onClick={() => setShow(false)}
                {...a11yProps(9)}
              />
              <Tab
                label='State CET'
                onClick={() => setShow(false)}
                {...a11yProps(10)}
              />
              <Tab
                label='CLAT'
                onClick={() => setShow(false)}
                {...a11yProps(11)}
              />
              <Tab
                label='CS'
                onClick={() => setShow(false)}
                {...a11yProps(12)}
              />
              <Tab
                label='IITJEE/NEET Foundation & NTSE'
                onClick={() => setShow(false)}
                {...a11yProps(13)}
              />
              <Tab
                label='CMA'
                onClick={() => setShow(false)}
                {...a11yProps(14)}
              />
              <Tab
                label='Campus Placement - IT Jobs'
                onClick={() => setShow(false)}
                {...a11yProps(15)}
              />
              <Tab
                label='Competitive Programming'
                onClick={() => setShow(false)}
                {...a11yProps(16)}
              />
              <Tab
                label='Full Stack Development'
                onClick={() => setShow(false)}
                {...a11yProps(17)}
              />
              <Tab
                label='Programming for Students'
                onClick={() => setShow(false)}
                {...a11yProps(18)}
              />
            </Tabs>
          </Col>

          <Col md={8} xs={12}>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((obj,idx) => (
              <TabPanel value={value} index={idx}>
              {!show ? (
                <Row>
                  <Col md={6} xs={12}>
                    <Link to='/success2'>
                      <div
                        className='tabs_box'
                        onClick={() => setShow((prev) => !prev)}
                      >
                        <h2>Banking Exams</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Odio justo et amet varius velit. Eu, ac amet
                          elit orci ullamcorper proin pellentesque.{" "}
                        </p>
                        <button>Read More</button>
                      </div>
                    </Link>
                  </Col>

                  <Col md={6} xs={12}>
                    <Link to='/success2'>
                      <div
                        className='tabs_box'
                        onClick={() => setShow((prev) => !prev)}
                      >
                        <h2>Railway Exams</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Odio justo et amet varius velit. Eu, ac amet
                          elit orci ullamcorper proin pellentesque.{" "}
                        </p>
                        <button>Read More</button>
                      </div>
                    </Link>
                  </Col>
                </Row>
              ) : (
                <div className="banking-exampage">
                  <div>
                    <span className="back_button" onClick={() => setShow(false)}>
                      <img src={Backbutton} alt='' />
                      back
                    </span>
                  </div>
                  <div className="bacnking-examheader">
                    <h2>Banking Exam</h2>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img src={Share} alt='' className="mr-3"/>
                        Share
                      </li>
                      <li className="list-inline-item">
                        <img src={Bookmark} alt='' className="mr-3"/>
                        Save
                      </li>
                    </ul>
                  </div>
                  <div className="locationdiv">
                    <p>
                      <img src={Location} alt='' className="mr-3"/>
                      Madhya pradesh
                    </p>
                  </div>
                  <hr className="border-colorbottom border-colorbottommargin"></hr>
                  <div className="inner-content">
                    <h3>Minimum qualifications:</h3>
                    <ul>
                      <li>9 years of experience in content marketing, advertising, or writing 
                        creative at an agency and in a corporate environment</li>
                        <li>Ability to speak and write in English and Portuguese fluently</li>
                    </ul>
                    <h3>Preferred qualifications:</h3>
                    <ul>
                      <li>Experience with developing messaging for the technology industry</li>
                      <li>Knowledge and understanding of how to write engaging and relatable copy for large scale business-to-business (B2B) technology brands.</li>
                      <li>Ability to be comfortable with ambiguity and lucidly articulate ideas to peers, cross-functional stakeholders, and executive leaders</li>
                    </ul>
                  </div>
                  <hr className="border-colorbottom"></hr>
                </div>
              )}
            </TabPanel>
            ))}
            
            
            
          </Col>
        </Row>
      </Box>
    </>
  );
}
