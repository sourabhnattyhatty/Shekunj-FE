import React from "react";
import { Header, Footer } from "../../../components";
import { Container } from "react-bootstrap";
import TabsExams from "../TabsExams/index";
import "./index.scss";
import "./../index.scss";
import { useTranslation } from "react-i18next";

function SuccessCareerOption2() {
  const { t } = useTranslation();
  return (
    <div>
      <Header loginPage={true} page='guidance' subPage='careerOption' />

      <div className='SucOption'>
        <Container>
          <h2>{t("successCareerOption.heading.1")}</h2>
        </Container>
      </div>

      <div className='CompExams'>
        <Container>
          <TabsExams />
        </Container>
      </div>
      <Footer loginPage={false} />
    </div>
  );
}

export default SuccessCareerOption2;
