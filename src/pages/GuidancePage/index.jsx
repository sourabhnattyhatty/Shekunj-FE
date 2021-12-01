import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./index.scss";

const GuidancePage = () => {
  return (
    <div>
      <Header loginPage={true} page='courses' />

      <Footer loginPage={false} />
    </div>
  );
};

export default GuidancePage;
