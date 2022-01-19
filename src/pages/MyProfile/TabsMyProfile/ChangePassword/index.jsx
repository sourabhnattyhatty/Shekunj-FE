import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, TextField } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Error } from "../../../../components";
import { changePassword } from "../../../../store/auth/action";
import ProfileImage from "../ProfileImage";
import { useTranslation } from "react-i18next";


function ChangePassword() {
  const { isLoading } = useSelector((state) => state.authReducer);
  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const { t } = useTranslation();
  
  const dispatch = useDispatch();
  const history = useHistory();
  
  const validationSchema = Yup.object({
    old_password: Yup.string()
      .min(6, t("login.form1.passError.min"))
      .required(t("login.form1.passError.required")),
    new_password: Yup.string()
      .min(6, t("login.form1.passError.min"))
      .required(t("login.form1.passError.required")),
    confirm_password: Yup.string()
      .min(6, t("login.form1.passError.min"))
      .required(t("login.form1.passError.confirmRequired"))
      .oneOf([Yup.ref("new_password"), null], t("login.form1.passError.match")),
  });
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
    validationSchema,
    onSubmit(values) {
      dispatch(changePassword(values, history));
    },
  });

  return (
    <Row>
      <Col lg={3} md={4} xs={12}>
        <ProfileImage isEditable={true} />
      </Col>

      <Col lg={5} md={6} xs={12}>
        <div className='change_pass'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>{t("resetPassword.old")}</label>

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
              <Error
                error={errors.old_password}
                touched={touched.old_password}
              />
            </div>

            <div className='form-group'>
              <label>{t("resetPassword.label")}</label>

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
              <Error
                error={errors.new_password}
                touched={touched.new_password}
              />
            </div>

            <div className='form-group'>
              <label>{t("resetPassword.labelConfirm")}</label>

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
              <Error
                error={errors.confirm_password}
                touched={touched.confirm_password}
              />
            </div>

            <button
              type='submit'
              disabled={isSubmitting || isLoading}
              className='edit_profile_btn '
            >
              {isSubmitting || isLoading ? (
                <CircularProgress
                  color='secondary'
                  size={20}
                  style={{ margin: "0 45px" }}
                />
              ) : (
                t("changePasswordPage.button.1")
              )}
            </button>
          </form>
        </div>
      </Col>
    </Row>
  );
}

export default ChangePassword;
