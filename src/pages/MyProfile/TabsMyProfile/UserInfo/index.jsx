import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import ProfileImage from "../ProfileImage";

function UserInfo(props) {
  const { user } = useSelector((state) => state.authReducer);
  const { t } = useTranslation();

  return (
    <div className='myProfile_box'>
      <Row>
        <Col lg={3} md={4} xs={12}>
          <ProfileImage isEditable={true} />
        </Col>

        <Col lg={5} md={6} xs={12}>
          <h2>{user?.name || t("common.n/a")}</h2>
          <div className='user_detail'>
            <ul>
              <li>
                {user?.email ||
                  `${t("common.formHeadings.email")} - ${t("common.n/a")}`}
              </li>
              <li>
                {user?.highest_education ||
                  `${t("common.formHeadings.highest_education")}
                - ${t("common.n/a")}`}
              </li>
              <li>
                {user?.dob ||
                  `${t("common.formHeadings.dob")} - ${t("common.n/a")}`}
              </li>
              <li>
                {user?.city ||
                  `${t("common.formHeadings.city")} - ${t("common.n/a")}`}
              </li>
            </ul>

            <ul>
              <li>
                {user?.contact ||
                  `${t("common.formHeadings.mobile")} - 
                ${t("common.n/a")}`}
              </li>
              <li>
                {user?.stream ||
                  `${t("common.formHeadings.stream")} - 
                ${t("common.n/a")}`}
              </li>
              <li>
                {user?.state ||
                  `${t("common.formHeadings.state")} - 
                ${t("common.n/a")}`}
              </li>
            </ul>
          </div>
          <button className='edit_profile_btn' onClick={props.func}>
            {t("userInfoPage.button.1")}
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default UserInfo;
