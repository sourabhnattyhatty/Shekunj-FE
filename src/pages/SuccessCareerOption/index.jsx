import React, { useEffect } from "react";
import { Header, Footer } from "../../components";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Aos from "aos";

import "aos/dist/aos.css";
import "animate.css";

import TabsExams from "./TabsExams/index";
import { getCareerOption } from "../../store/guidance";
import "./index.scss";
import { useTranslation } from "react-i18next";

function SuccessCareerOption() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {lan} = useSelector(state => state.languageReducer);

  useEffect(() => {
    dispatch(getCareerOption());
    Aos.init({ duration: 2000 });
  }, [dispatch, lan]);

  return (
    <div>
      <Header loginPage={true} page='guidance' subPage='careerOption' />

      <div className='SucOption noselect'>
        <Container>
          <h2 data-aos='slide-up'>
            {t("successCareerOption.other.3.1")} <br />{" "}
            {t("successCareerOption.other.3.2")}
          </h2>
        </Container>
      </div>

      <div className='CompExams noselect'>
        <Container>
          <TabsExams />
        </Container>
      </div>
      <Footer loginPage={false} />
    </div>
  );
}

export default SuccessCareerOption;
