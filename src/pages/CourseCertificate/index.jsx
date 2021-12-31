import { Avatar, Container } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { Header, Footer } from "../../components";
import "./index.scss";
import "../CoursesModule/index.scss";
import check from "../../assets/images/Courses/check.png";
// import Certificate from "../../assets/images/Courses/Certificate.png";
import Dawnload from "../../assets/images/Courses/Dawnload.png";
import Share from "../../assets/images/Courses/Share.png";
import fullscreen_icon from "../../assets/images/Courses/fullscreen_icon.png";
import "./index.scss";
import { routingConstants } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserCourseCertificateDetail } from "../../store/certificate";


// import jsPDF from "jspdf";
import CertificatesDetail from "../Certificates/CertificatesDetail";

function CourseTest() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const certificateRef = useRef();

  const { certificateDetail: certificate } = useSelector(
    (state) => state.certificateReducer,
  );
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (id) {
      dispatch(getUserCourseCertificateDetail(id, history));
    } else {
      history.push(routingConstants.ALL_CERTIFICATE_PAGE);
    }
  }, [id, history, dispatch]);

  // const generatePDF = () => {
  //   // const img = new Image();
  //   // img.src = Certificate;

  //   const doc = new jsPDF("p", "pt", "a3");
  //   // doc.addImage(img,'JPGE',0,150,840,500);
  //   // doc.save("mycertificate.pdf");
  //   doc.html(document.querySelector(".certiiii"), {
  //     callback: function(pdf) {
  //       pdf.save('test.pdf');
  //     }
  //   });
  // };

  return (
    <div>
      <Header loginPage={true} page='courses' />

      <div className='cou_resultBg'>
        <Container>
          <Row>
            <Col md={5} xs={12}>
              <div className='user_certifi'>
                <div className='user_pro'>
                  <Avatar
                    src={user?.profile_pic}
                    sx={{ width: 150, height: 150 }}
                  />
                  <h3>{certificate?.name}</h3>
                </div>

                <div className='skills'>
                  <h4>{t("allCertificatePage.heading.3")}</h4>
                  <div className='skill_flex'>
                    <ul>
                      <li>
                        <img src={check} alt='' /> {t("allCertificatePage.skills.1")}
                      </li>
                      <li>
                        <img src={check} alt='' /> {t("allCertificatePage.skills.2")}
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img src={check} alt='' /> {t("allCertificatePage.skills.3")}
                      </li>
                      <li>
                        <img src={check} alt='' /> {t("allCertificatePage.skills.4")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={7} xs={12} className=''>
            <p className='cou_tit'>{t("allCertificatePage.other.10")}</p>
              <div className='certi_img'>
                <p>
                  <div
                    className='content'
                    onClick={() =>
                      history.push(routingConstants.ALL_CERTIFICATE_DETAIL + certificate?.id)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <div className='content-overlay'></div>
                    {/* <img src={Certificate} alt='' /> */}
                    
                    <CertificatesDetail ref={certificateRef} showButton={false}/>
                    <div className='content-details fadeIn-bottom'>
                      <h3 className='content-title'>
                        <img src={fullscreen_icon} alt='' />
                      </h3>
                      <p className='content-text'>{t("allCertificatePage.other.11")}</p>
                    </div>
                  </div>
                </p>
                <p className="certificate-downloaddiv">
                  <img
                    src={Dawnload}
                    alt=''
                    style={{ cursor: "pointer" }}
                    onClick={() => certificateRef.current.generatePDF()}
                  />
                  <br />
                  <img src={Share} alt='' style={{ cursor: "pointer" }} />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer loginPage={false} />
    </div>
  );
}

export default CourseTest;
