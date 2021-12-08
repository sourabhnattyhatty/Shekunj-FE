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

import { Header, Footer, ScrollToTop } from "../../components";

import Previous from "../../assets/icons/chevron-left.png";
import Next from "../../assets/icons/chevron-right.png";
import Rightcheck from "../../assets/images/Courses/right.png";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import "./index.scss";
import { LinearProgress } from "@mui/material";

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

const CourseModule = () => {
  const [progress, setProgress] = React.useState(0);
  const [expanded, setExpanded] = React.useState("panel1");

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10,
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Header loginPage={true} page='courses' />
      <div className='course_module mt-md-0 mb-md-0 mt-4 mb-4'>
        <Container>
          <Row className="pt-md-5 pb-md-5">
            <Col md={12} xs={12} className='text-left'>
              <div className='circular_progress_module'>
                <Stack spacing={2} direction='row'>
                  {" "}
                  Your Progress
                </Stack>
                <LinearProgress variant="determinate" value={20}/>
                <div className="label-progressbar"> 20%</div>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className='accordion_box'>
                <h4>Course content</h4>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls='panel1d-content'
                    id='panel1d-header'
                  >
                    <Typography>
                      <div className="number-bgbox">1</div>
                      Introduction
                      </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className='pl-5 position-relative'>
                      <li className="active-accordiantext">
                      <img src={Rightcheck} className='ml-2' alt='...' />
                      1.1 Course Introduction</li>
                      <li>1.2 Assesment</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls='panel2d-content'
                    id='panel2d-header'
                  >
                    <Typography> 
                      <div className="number-bgbox">2</div>
                      Basic tools
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls='panel3d-content'
                    id='panel3d-header'
                  >
                    <Typography>
                      <div className="number-bgbox">3</div>
                      Advanced tool
                      </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls='panel3d-content'
                    id='panel3d-header'
                  >
                    <Typography>
                    <div className="number-bgbox">4</div>
                      Effects
                      </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls='panel3d-content'
                    id='panel3d-header'
                  >
                    <Typography>
                    <div className="number-bgbox">5</div>
                      Panels
                      </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls='panel3d-content'
                    id='panel3d-header'
                  >
                    <Typography>
                    <div className="number-bgbox">6</div>
                      Examples
                      </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </Col>

            <Col md={8} xs={12}>
              <div className='card_courses'>
                <div className='card'>
                  <h3>Adobe photoshop training: From Beginner to PRO</h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer diam non, imperdiet justo semper proin cursus morbi.
                    Morbi amet in vehicula nunc a ac odio felis urna. Diam ut
                    ullamcorper luctus urna, urna sollicitudin. Non nunc
                    elementum orci.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer diam non, imperdiet justo semper proin cursus morbi.
                    Morbi amet in vehicula nunc a ac odio felis urna. Diam ut
                    ullamcorper luctus urna, urna sollicitudin. Non nunc
                    elementum orci.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer diam non, imperdiet justo semper proin. Integer diam
                    non, imperdiet justo semper proin cursus morbi. Morbi amet
                    in vehicula nunc a ac odio felis urna. Diam ut ullamcorper
                    luctus urna, urna sollicitudin. ipsum dolor sit amet,
                    consectetur adipiscing elit. Integer diam non, imperdiet
                    justo semper proin cursus morbi.{" "}
                    <span className='read_more_text'>Read more...</span>
                  </p>

                  <div className='prev_next_btn'>
                    <Row>
                      <Col md={6} xs={6}>
                        <button className="back_button">back</button>
                        {/* <p className='prev_icon'>
                          <img src={Previous} className='mr-2' alt='...' />{" "}
                          Previous
                        </p> */}
                      </Col>

                      <Col md={6} xs={6} className='text-right'>
                        <button className="next_button">next</button>
                        {/* <p className='prev_icon'>
                          Next
                          <img src={Next} className='ml-2' alt='...' />{" "}
                        </p> */}
                      </Col>
                    </Row>
                  </div>
                </div>

                {/* <button className='btn btn_test mt-4'>Start Test</button> */}
              </div>
            </Col>
          </Row>

          {/* <div className='courses_about_div mt-md-5 mb-4'>
            <div className='about_courses_border'>
              <div className='about_courses'>
                <Row>
                  <Col md={12} xs={12}>
                    <h5>About this courses</h5>
                    <p>Full course of adobe photoshop by a simple way</p>
                  </Col>
                </Row>
              </div>
            </div>

            <div className='about_courses_border'>
              <div className='courses_number'>
                <Row className='mt-4'>
                  <Col md={4} xs={12}>
                    <h6>By the numbers</h6>
                  </Col>

                  <Col md={4} xs={12}>
                    <ul className='p-0'>
                      <li>Skill level: All Levels</li>
                      <li>Students: 135663</li>
                      <li>Languages: Hindi and English</li>
                    </ul>
                  </Col>

                  <Col md={4} xs={12}>
                    <ul className='p-0'>
                      <li> Lectures: 52</li>
                      <li>Pages: 45</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>

            <div className='courses_number'>
              <Row className='mt-4'>
                <Col md={4}>
                  <h6>Description</h6>
                </Col>

                <Col md={8} xs={12}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque a pretium amet blandit venenatis hac faucibus.
                    Viverra pellentesque gravida purus turpis tortor mi,
                    egestas. Magna ipsum mi ornare vestibulum nunc volutpat
                    sagittis. amet est scelerisque adipiscing sollicitudin
                    gravida non. Diam ut magna sagittis dui mi sed ultrices id
                    non. Ac neque id pellentesque duis sapien, nisl nec neque,
                    in. Cursus ullamcorper mi magna maecenas amet id faucibus.
                  </p>
                </Col>
              </Row>
            </div>
          </div> */}
        </Container>
      </div>
      <ScrollToTop />
      <Footer loginPage={false} />
    </div>
  );
};

export default CourseModule;
