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
import User from "../../../assets/images/MyProfile/user.png";
import phone from "../../../assets/images/MyProfile/phone.png";
import Stream from "../../../assets/images/MyProfile/Stream.png";
import education from "../../../assets/images/MyProfile/education.png";
import GuidanceSelect from "../../GuidanceBook/Select/index"
import "./index.scss";
import Date_Birth from "../Date_Birth";

// import DateType from "../DateType";

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
        <Row>
          <Col md={3} xs={12}>
            <div className='myProfile_img'>
              <img src={swati_jain} alt='' />
            </div>
          </Col>

          <Col md={5} xs={12}>
            <div className='change_pass'>
              <div className='form-group'>
                <label>Old Password</label>

                <TextField
                  name='password'
                  type={visible ? "text" : "password"}
                  className='form-control'
                  autoComplete='off'
                />
                <p className='eye' onClick={(e) => setVisible(!visible)}>
                  {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </p>
              </div>

              <div className='form-group'>
                <label>New Password</label>

                <TextField
                  name='password'
                  type={visible ? "text" : "password"}
                  className='form-control'
                  autoComplete='off'
                />
                <p className='eye1' onClick={(e) => setVisible(!visible)}>
                  {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </p>
              </div>

              <div className='form-group'>
                <label>Confirm New Password</label>

                <TextField
                  name='password'
                  type={visible ? "text" : "password"}
                  className='form-control'
                  autoComplete='off'
                />
                <p className='eye2' onClick={(e) => setVisible(!visible)}>
                  {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </p>
              </div>

              <button className='edit_profile_btn'>update password</button>
            </div>
          </Col>
        </Row>
      </TabPanel>

      <Row>
        <Col md={6} xs={12}>
          <div className='edit_profile'>
            <div className='form-group'>
              <label htmlFor=''>First Name</label>
              <TextField
                name='last_name'
                type='text'
                className='form-control'
                autoComplete='off'
                placeholder=''
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <img src={User} alt='...' />
                    </InputAdornment>
                  ),
                }}
              />
            </div>


            <div className='form-group'>
              <label htmlFor=''>Email</label>
              <TextField
                name='last_name'
                type='text'
                className='form-control'
                autoComplete='off'
                placeholder=''
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <img src={User} alt='...' />
                    </InputAdornment>
                  ),
                }}
              />
            </div>


            <div className='form-group'>
              <label htmlFor=''>High Education</label>
              <TextField
                name='last_name'
                type='text'
                className='form-control'
                autoComplete='off'
                placeholder=''
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <img src={education} alt='...' />
                    </InputAdornment>
                  ),
                }}
              />
            </div>


            <div className='form-group'>
              <label htmlFor=''>Date of birth</label>
              <Date_Birth/>
            </div>


            <div className='form-group'>
              <label htmlFor=''>City</label>
              {/* <TextField
                name='last_name'
                type='text'
                className='form-control'
                autoComplete='off'
                placeholder=''
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <img src={User} alt='...' />
                    </InputAdornment>
                  ),
                }}
              /> */}
              <div className='form-group mzero'>
                    <GuidanceSelect />
                  </div>
            </div>
          </div>
        </Col>

        <Col md={6} xs={12}>
          <div className='edit_profile'>
            <div className='form-group'>
              <label htmlFor=''>Last Name</label>
              <TextField
                name='last_name'
                type='text'
                className='form-control'
                autoComplete='off'
                placeholder=''
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <img src={User} alt='...' />
                    </InputAdornment>
                  ),
                }}
              />
            </div>


            <div className='form-group'>
              <label htmlFor=''>Mobile Number</label>
              <TextField
                name='last_name'
                type='text'
                className='form-control'
                autoComplete='off'
                placeholder=''
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <img src={phone} alt='...' />
                    </InputAdornment>
                  ),
                }}
              />
            </div>


            <div className='form-group'>
              <label htmlFor=''>Stream</label>
              {/* <TextField
                name='last_name'
                type='text'
                className='form-control'
                autoComplete='off'
                placeholder=''
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <img src={Stream} alt='...' />
                    </InputAdornment>
                  ),
                }}
              /> */}
              <div className='form-group mzero'>
                    <GuidanceSelect />
                  </div>
            </div>


            <div className='form-group'>
              <label htmlFor=''>State</label>
              <div className='form-group mzero'>
                    <GuidanceSelect />
                  </div>
            </div>

            
          </div>
        </Col>
      </Row>
      <button className='Save_profile_btn'>Save</button>
    </Box>
  );
}
