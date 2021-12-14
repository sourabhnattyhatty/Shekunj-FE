import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='Com_title'>
        <h2>Competitive Exams</h2>
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
              <Tab label='Govt Exams' {...a11yProps(0)} />
              <Tab label='UPSC CSE' {...a11yProps(1)} />
              <Tab label='Defence Exams' {...a11yProps(2)} />
              <Tab label='JEE and NEET Preparation' {...a11yProps(3)} />
              <Tab label='State PSC' {...a11yProps(4)} />
              <Tab label='NET Exam' {...a11yProps(5)} />
              <Tab label='GATE, ESE and IIT, JAM' {...a11yProps(6)} />
              <Tab label='NEET PG' {...a11yProps(7)} />
              <Tab label='Teaching Exams (TET)' {...a11yProps(7)} />
              <Tab label='CAT and Other MBA Entrance Tests' {...a11yProps(8)} />
              <Tab label='CA' {...a11yProps(9)} />
              <Tab label='State CET' {...a11yProps(10)} />
              <Tab label='CLAT' {...a11yProps(11)} />
              <Tab label='CS' {...a11yProps(12)} />
              <Tab label='IITJEE/NEET Foundation & NTSE' {...a11yProps(13)} />
              <Tab label='CMA' {...a11yProps(14)} />
              <Tab label='Campus Placement - IT Jobs' {...a11yProps(15)} />
              <Tab label='Competitive Programming' {...a11yProps(16)} />
              <Tab label='Full Stack Development' {...a11yProps(17)} />
              <Tab label='Programming for Students' {...a11yProps(18)} />
            </Tabs>
          </Col>

          <Col md={8} xs={12}>
            <TabPanel value={value} index={0}>
              <Row>
                <Col md={6} xs={12}>
                <Link to="/success2">
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                  </Link>
                </Col>

                <Col md={6} xs={12}>
                <Link to="/success2">
                  <div className='tabs_box'>
                    <h2>Railway Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                  </Link>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Row>
                <Col md={6} xs={12}>
                  <Link to="/success2">
                    <div className='tabs_box'>
                      <h2>Banking Exams</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Odio justo et amet varius velit. Eu, ac amet elit orci
                        ullamcorper proin pellentesque.{" "}
                      </p>
                      <button>Read More</button>
                    </div>
                  </Link>
                </Col>

                <Col md={6} xs={12}>
                <Link to="/success2">
                  <div className='tabs_box'>
                    <h2>Railway Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                  </Link>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Row>
                <Col md={6} xs={12}>
                <Link to="/success2">
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                  </Link>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Railway Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Railway Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={7}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={8}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={9}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={10}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={11}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={12}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={13}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={14}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={15}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={16}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={17}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
            <TabPanel value={value} index={18}>
              <Row>
                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>

                <Col md={6} xs={12}>
                  <div className='tabs_box'>
                    <h2>Banking Exams</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Odio justo et amet varius velit. Eu, ac amet elit orci
                      ullamcorper proin pellentesque.{" "}
                    </p>
                    <button>Read More</button>
                  </div>
                </Col>
              </Row>
            </TabPanel>
          </Col>
        </Row>
      </Box>
    </>
  );
}
