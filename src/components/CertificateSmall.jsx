import React, {
    forwardRef,
    useImperativeHandle,
  } from "react";
  import { Col, Row } from "react-bootstrap";
  import { useHistory, useLocation } from "react-router-dom";
  import { useTranslation } from "react-i18next";
  
  import Certificate_text from "../assets/images/AllCertificate/Certificate_text.png";
  import para from "../assets/images/AllCertificate/para.png";
  import signature from "../assets/images/AllCertificate/signature.png";
  import logo1 from "../assets/images/AllCertificate/logo1.png";
  import logo22 from "../assets/images/AllCertificate/logo22.png";
  import logo3 from "../assets/images/AllCertificate/logo3.png";
  
  import "../pages/Certificates/index.scss";
  import moment from "moment";
  
  const CertificateSmall = forwardRef((props, ref) => {
    const history = useHistory();
    const location = useLocation();
    
    const { t } = useTranslation();
  
    const { certificateData } = props;
   
   
    
  useImperativeHandle(ref, () => ({
    generatePDF(certiId) {        
      if (location.pathname !== "/certificate-detail/") {
        history.push(`/certificate-detail/${certiId}/true`);
        // return
      }
    },
  }));
   
  
    return (
      <>       
        <div className='container p-0 responsive_certificate34'>
          <div className='mob_box_certificate_small ayushi-certificate2'></div>
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
                  <h2>
                    {/* {certificateData?.name || t("common.n/a")} */}
                  {certificateData?.name || t("common.n/a")}&nbsp;
                  {certificateData && certificateData?.last_name}
                  </h2>
                  <hr className='hr_line' />
                  <h5 className='certi-ref'>
                    for successfully completing the course
                  </h5>
                  <h3>{certificateData?.course_name}</h3>
                  <p className='first-number'>
                    {t("certificateDetailPage.content.1.1")}{" "}<br/>
                    {t("certificateDetailPage.content.1.2")}
                  </p>
                  <p className='second-number'>
                    Date of Achievement :{" "}
                    {moment(certificateData?.course_end_time).format("DD-MM-YYYY")}
                  </p> 
                  <p>
                  Certificate ID: <span> SH108-{moment(certificateData?.course_end_time).format('YY')}EW{certificateData?.id}</span>
                </p>                
                </div>
              </Col>
            </Row>
  
            <div className='cer_sm_logo'>
              <img className='img1' src={logo1} alt='' srcSet='' />
              <img className='img2' src={logo22} alt='' srcSet='' />
              <img className='img3' src={logo3} alt='' srcSet='' />
            </div>
            <div className='signature_sm_set'>
              <img src={signature} alt='' />
              <hr className='hr_line2' />
              <div className='name-surname'>
                {t("certificateDetailPage.other.4")}
                <div className='president'>
                  {t("certificateDetailPage.other.3")}
                </div>
              </div>
            </div>
          </div>         
        </div>
      </>
    );
  });
  
  export default CertificateSmall;
  