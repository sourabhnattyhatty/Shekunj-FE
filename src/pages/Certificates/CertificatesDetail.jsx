import React, { useEffect, forwardRef, useImperativeHandle } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";

import { getUserCourseCertificateDetail } from "../../store/certificate";
import { formatDate } from "../../utils/utils";
import Certificate_text from "../../assets/images/AllCertificate/Certificate_text.png";
import para from "../../assets/images/AllCertificate/para.png";
import signature from "../../assets/images/AllCertificate/signature.png";
import "./index.scss";

import jsPDF from "jspdf";

const CertificatesDetail = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const { certificateDetail: certificate } = useSelector(
    (state) => state.certificateReducer,
  );

  useEffect(() => {
    if (id) {
      dispatch(getUserCourseCertificateDetail(id, history));
    } else {
      history.push("/all-certificate-page");
    }
  }, [id, history, dispatch]);

  useImperativeHandle(ref, () => ({
    generatePDF() {
      const doc = new jsPDF("p", "pt", "a3");
      doc.html(document.querySelector(".box_certificate"), {
        callback: function (pdf) {
          debugger;
          pdf.save("test.pdf");
        },
      });
    },
  }));

  return (
    <div className='container p-0'>
      <div className='box_certificate mb-4'>
        <Row>
          <Col md={7} xs={12} className='offset-3'>
            <div className='cercifi_con'>
              <img className='cer_text' src={Certificate_text} alt='' />
              <img className='last-img' src={para} alt='' />
              <h2>{certificate?.name || "N/A"}</h2>
              <hr className='hr_line' />
              <p className='first-number'>
                with membership number {certificate?.id} has been successfully
                completed the course
              </p>
              <h3 className=''>“Mobile user Experience (UX) Design”</h3>
              <p className=''>
                conducted from{" "}
                {formatDate(certificate?.course_start_time, "MMM Do YYYY")} to{" "}
                {formatDate(certificate?.course_end_time, "MMM Do YYYY")}
              </p>
              <p className='destination-text'>Destination: Best in class</p>
            </div>
          </Col>
        </Row>

        <div className='date_set'>
          <div className='date-certi'>
            {formatDate(certificate?.course_end_time, "DD/MM/YYYY")}
          </div>
          <hr className='hr_line2' />
          <div className='date-text'>Date</div>
        </div>
        <div className='signature_set'>
          <img src={signature} alt='' />
          <hr className='hr_line2' />
          <div className='president'>PRESIDENT DIRECTOR</div>
          <div className='name-surname'>NAME SURNAME</div>
        </div>
      </div>
      {props.showButton && (
        <Link to='/courses'>
          <button className='back_course'>Back To Course</button>
        </Link>
      )}
    </div>
  );
});

export default CertificatesDetail;
