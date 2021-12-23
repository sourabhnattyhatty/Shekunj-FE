import React, { useEffect } from "react";
import { Header, Footer, ScrollToTop } from "../../components";
import { Container } from "react-bootstrap";
import TabsExams from "./TabsExams/index.jsx"
import "./index.scss";
import "aos/dist/aos.css";
import "animate.css";
import Aos from "aos";
function SuccessCareerOption() {
  useEffect(() => {
    // dispatch(allHomeCourses());
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Header loginPage={true} page='guidance' subPage="careerOption"/>

      <div className='SucOption'>
        <Container>
          <h2 data-aos='slide-up'>Choose Your Career</h2>
        </Container>
      </div>

      

    
    <div className="CompExams">
        <Container>
        
        <TabsExams />
        </Container>
    </div>





      <ScrollToTop />
      <Footer loginPage={false} />
    </div>
  );
}

export default SuccessCareerOption;
