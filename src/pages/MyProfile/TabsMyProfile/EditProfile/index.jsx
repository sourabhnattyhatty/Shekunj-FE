import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import GuidanceSelect from "../../../GuidanceBook/Select";
import User from "../../../../assets/images/MyProfile/user.png";
import phone from "../../../../assets/images/MyProfile/phone.png";
import Stream from "../../../../assets/images/MyProfile/Stream.png";
import DateBirth from "../../Date_Birth";
import { useSelector } from "react-redux";
import { noImage } from "../../../../store/courses/action";

function EditProfile(props) {
  const { user } = useSelector((state) => state.authReducer);
  return (
    <>
      <Row>
        <Col md={4} xs={12}>
          <div className='myProfile_img'>
            <img
              src={user?.profile_pic || noImage}
              style={{ width: "-webkit-fill-available" }}
              alt={user?.name || "N/A"}
            />
          </div>
        </Col>
        <Col md={4} xs={12}>
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

            <div className='form-group mzero'>
              <label htmlFor=''>Highest Education</label>

              <GuidanceSelect icon={true} select='education' />
            </div>

            <div className='form-group'>
              <label htmlFor=''>Date of birth</label>
              <DateBirth />
            </div>

            <div className='form-group'>
              <label htmlFor=''>City</label>

              <div className='form-group mzero'>
                <GuidanceSelect />
              </div>
            </div>
          </div>
        </Col>

        <Col md={4} xs={12}>
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
              <TextField
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
              />
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
      <button className='Save_profile_btn' onClick={props.func}>
        Save
      </button>
    </>
  );
}

export default EditProfile;
