import React from "react";
import { Header, Footer, ScrollToTop } from "../../components";
import { Container, Row, Col } from "react-bootstrap";
import TabsExams from "./TabsExams/index.jsx"
import "./index.scss";

function SuccessCareerOption() {
  return (
    <div>
      <Header loginPage={true} page='guidance' />

      <div className='SucOption'>
        <Container>
          <h2>Choose Your Career</h2>
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
