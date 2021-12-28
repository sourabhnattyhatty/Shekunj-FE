import React, { useEffect } from "react";
import { Header, Footer } from "../../components";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Aos from "aos";

import "aos/dist/aos.css";
import "animate.css";

import TabsExams from "./TabsExams/index";
import { getGuidanceCategory } from "../../store/guidance";
import "./index.scss";

function SuccessCareerOption() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuidanceCategory(null));
    dispatch(getGuidanceCategory());
    Aos.init({ duration: 2000 });
  }, [dispatch]);

  return (
    <div>
      <Header loginPage={true} page='guidance' subPage='careerOption' />

      <div className='SucOption'>
        <Container>
          <h2 data-aos='slide-up'>Choose Your Career</h2>
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

export default SuccessCareerOption;
