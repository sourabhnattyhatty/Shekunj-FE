import { CircularProgress, TextField } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { noImage } from "../../../../store/courses/action";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Error } from "../../../../components";
import { changePassword } from "../../../../store/auth/action";
import { useHistory } from "react-router-dom";

const validationSchema = Yup.object({
  old_password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  new_password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .min(6, "At least 6 characters")
    .oneOf([Yup.ref("new_password"), null], "Passwords must match"),
});

function ChangePassword() {
  const { user, isLoading } = useSelector((state) => state.authReducer);
  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        old_password: "",
        new_password: "",
        confirm_password: "",
      },
      validationSchema,
      onSubmit(values) {
        dispatch(changePassword(values,history))
      },
    });

  return (
    <Row>
      <Col md={3} xs={12}>
        <div className='myProfile_img'>
          <img
            src={user?.profile_pic || noImage}
            alt={user?.name || "N/A"}
            style={{ width: "-webkit-fill-available" }}
          />
        </div>
      </Col>

      <Col md={5} xs={12}>
        <div className='change_pass'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Old Password</label>

              <TextField
                name='old_password'
                type={visible ? "text" : "password"}
                className='form-control'
                autoComplete='off'
                onChange={handleChange}
                value={values.old_password}
                onBlur={handleBlur}
              />
              <p className='eye' onClick={(e) => setVisible(!visible)}>
                {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </p>
              <Error error={errors.old_password} touched={touched.old_password}/>
            </div>

            <div className='form-group'>
              <label>New Password</label>

              <TextField
                name='new_password'
                type={visible1 ? "text" : "password"}
                className='form-control'
                autoComplete='off'
                onChange={handleChange}
                value={values.new_password}
                onBlur={handleBlur}
              />
              <p className='eye1' onClick={(e) => setVisible1(!visible1)}>
                {visible1 ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </p>
              <Error error={errors.new_password} touched={touched.new_password}/>
            </div>

            <div className='form-group'>
              <label>Confirm New Password</label>

              <TextField
                name='confirm_password'
                type={visible2 ? "text" : "password"}
                className='form-control'
                autoComplete='off'
                onChange={handleChange}
                value={values.confirm_password}
                onBlur={handleBlur}
              />
              <p className='eye2' onClick={(e) => setVisible2(!visible2)}>
                {visible2 ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </p>
              <Error error={errors.confirm_password} touched={touched.confirm_password}/>
            </div>

            <button type='submit' className='edit_profile_btn '>
            {isLoading ? (
              <CircularProgress color='secondary' size={20} style={{margin:"0 45px"}}/>
            ) : (
              "update password"
            )}
              
            </button>
          </form>
        </div>
      </Col>
    </Row>
  );
}

export default ChangePassword;
