import React from "react";
import { Header, Footer, ScrollToTop } from "../../components";
import { Container } from "@mui/material";
import BasicTabs from "./../MyProfile/TabsMyProfile/index";
import "../../pages/responsive.scss";
import "./index.scss";

function index() {
  return (
    <div>
      <Header loginPage={true} page='courses' />

      <div className='my_profile_div'>
        <Container>
          <div className='profile_con'>
            <h2>Hello Swati Jain</h2>
            <p>My Profile</p>
          </div>
        </Container>
      </div>

      <Container>
        <div className='my_pro_tabs'>
          <BasicTabs />
        </div>
      </Container>

      <ScrollToTop />
      <Footer loginPage={false} />
    </div>
  );
}

export default index;
