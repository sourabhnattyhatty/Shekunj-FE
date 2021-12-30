import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TextareaAutosize } from "@mui/material";
import TextField from "@mui/material/TextField";

import { Header, Footer } from "../../components";
import mail2 from "../../assets/icons/mail2.png";
import "./index.scss";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation();
  return (
    <div>
      <Header loginPage={false} page='home' />
      <div className='main_div_conUs'>
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <div className='conUs_tit'>
                <h3>{t("contactUs.heading.1")}</h3>
                <h2>{t("contactUs.heading.2")}</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className='add_main'>
        <div className='add_set'>
          <Container>
            <Row>
              <Col md={6} xs={12}>
                <div className='add_con'>
                  <h3>{t("contactUs.heading.3")}</h3>
                  <Row>
                    <Col md={6} xs={12}>
                      <p>
                        <img src={mail2} alt='' /> Info@shekunj.com
                      </p>
                    </Col>

                    <Col md={6} xs={12}>
                      <p>
                        <img src={mail2} alt='' /> Support@shekunj.com
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col md={6} xs={12}>
                <div className='ConUs_form'>
                  <p>{t("contactUs.content.1")} </p>

                  <form action=''>
                    <div className='form-group'>
                      <TextField
                        name='name'
                        type='text'
                        placeholder={t("common.placeHolders.fname")}
                        autoComplete='off'
                      />

                      <TextField
                        name='name'
                        type='text'
                        placeholder={t("common.placeHolders.lname")}
                        autoComplete='off'
                      />

                      <TextField
                        name='name'
                        type='text'
                        placeholder={t("common.placeHolders.fname")}
                        autoComplete='off'
                      />

                      <TextareaAutosize
                        className='textarea_set'
                        aria-label='minimum height'
                        minRows={3}
                        placeholder={t("common.placeHolders.message")}
                      />
                    </div>

                    <button class='send_btn'>{t("contactUs.button.1")}</button>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Footer loginPage={false} />
    </div>
  );
}

export default ContactUs;
