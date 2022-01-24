import React, { useEffect, forwardRef, useImperativeHandle } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";

import { getUserCourseCertificateDetail } from "../../store/certificate";
import { routingConstants } from "../../utils/constants";

import Certificate_text from "../../assets/images/AllCertificate/Certificate_text.png";
import para from "../../assets/images/AllCertificate/para.png";
import signature from "../../assets/images/AllCertificate/signature.png";
import logo1 from "../../assets/images/AllCertificate/logo1.png";
import logo22 from "../../assets/images/AllCertificate/logo22.png";
import logo3 from "../../assets/images/AllCertificate/logo3.png";

import "./index.scss";

const CertificatesDetail = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { t } = useTranslation();

  const { certificateDetail: certificate } = useSelector(
    (state) => state.certificateReducer,
  );
  const { lan } = useSelector((state) => state.languageReducer);

  useEffect(() => {
    if (props?.id) {
      dispatch(getUserCourseCertificateDetail(props?.id, history));
    } else if (id) {
      dispatch(getUserCourseCertificateDetail(id, history));
    } else {
      history.push(routingConstants.ALL_CERTIFICATE_PAGE);
    }
  }, [id, history, dispatch, props?.id, lan]);

  useImperativeHandle(ref, () => ({
    generatePDF() {
      const doc = new jsPDF("p", "pt", "a3");
      const node = document.querySelector(".box_certificate_small");
      htmlToImage.toJpeg(node).then(function (dataUrl) {
        const img = new Image();
        img.src = dataUrl;
        doc.addImage(img, "JPGE", 0, 250, 840, 500);
        doc.save("mycertificate.pdf");
      });
    },
  }));

  return (
    <div className='container p-0'>
      <div className='mob_box_certificate_small'></div>

      <div
        className={
          props.size === "large"
            ? "box_certificate_large mt-4"
            : "box_certificate_small mb-4"
        }
      >
        <Row>
          <Col md={7} xs={12} className='offset-3'>
            <div
              className={
                props.size === "large"
                  ? "cercifi_con_large"
                  : "cercifi_con_small"
              }
            >
              <img className='cer_text' src={Certificate_text} alt='' />
              <img className='last-img' src={para} alt='' />
              <h2>{certificate?.name || t("common.n/a")}</h2>
              <hr className='hr_line' />
              <h5>for successfully completing the course</h5>
              <h3>{certificate?.course_name}</h3>
              <p className='first-number'>
                {t("certificateDetailPage.content.1.1")} {certificate?.id}{" "}
                {t("certificateDetailPage.content.1.2")}
              </p>
              <p className='second-number'>
                Date of achievement: <span> 10/01/2022 </span>
              </p>
              <p>
                Certificate ID: <span> 000000000000</span>
              </p>
            </div>
          </Col>
        </Row>

        <div className='cer_logo'>
          <img className="img1" src={logo1} alt='' srcset='' />
          <img className="img2" src={logo22} alt='' srcset='' />
          <img className="img3" src={logo3} alt='' srcset='' />
        </div>
        <div className='signature_set'>
          <img src={signature} alt='' />
          <hr className='hr_line2' />
          <div className='name-surname'>
            {t("certificateDetailPage.other.4")}
          </div>
          <div className='president'>{t("certificateDetailPage.other.3")}</div>
        </div>
      </div>
      {props.showButton && (
        <Link to='/courses'>
          <button className='back_course'>
            {t("allCertificatePage.button.3")}
          </button>
        </Link>
      )}
    </div>
  );
});

export default CertificatesDetail;
