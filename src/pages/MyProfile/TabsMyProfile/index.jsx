import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import swati_jain from "../../../assets/images/MyProfile/swati_jain.png";
import { Row, Col } from "react-bootstrap";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Lock from "../../../assets/icons/lock.png";
import { Error, GoogleLoginComponent } from "../../../components";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import "./index.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [visible, setVisible] = React.useState(false);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Basic Details' {...a11yProps(0)} />
          <Tab label='Change Password' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='myProfile_box'>
          <Row>
            <Col md={3} xs={12}>
              <div className='myProfile_img'>
                <img src={swati_jain} alt='' />
              </div>
            </Col>

            <Col md={5} xs={12}>
              <h2>Swati Jain</h2>
              <div className='user_detail'>
                <ul>
                  <li>abc@shekunj.com</li>
                  <li>High Education</li>
                  <li>06/04/1988</li>
                  <li>Indore</li>
                </ul>

                <ul>
                  <li>+91 9876543210</li>
                  <li>Stream</li>
                  <li>Madhya Pradesh</li>
                </ul>
              </div>
              <button className='edit_profile_btn'>Edit Profile</button>
            </Col>
          </Row>
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div className='form-group'>
          <TextField
            name='password'
            type={visible ? "text" : "password"}
            className='form-control'
            autoComplete='off'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <img src={Lock} alt='...' />
                </InputAdornment>
              ),
            }}
          />
          <p className='eye' onClick={(e) => setVisible(!visible)}>
            {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </p>

        </div>
      </TabPanel>
    </Box>
  );
}
