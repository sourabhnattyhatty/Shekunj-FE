import React from "react";
// import { Container } from "react-bootstrap";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./index.scss";

const index = () => {
  return (
    <div>
      <Header loginPage={true} page='courses' />

      <Footer loginPage={false} />
    </div>
  );
};

export default index;
