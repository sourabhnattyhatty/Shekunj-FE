import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";

import { Header, Footer, ScrollToTop, SEO } from "../../components";
import BasicTabs from "./../MyProfile/TabsMyProfile/index";
import "../../pages/responsive.scss";
import "./index.scss";

function MyProfile() {
  const { user } = useSelector((state) => state.authReducer);

  return (
    <div>
      <SEO title='Sheकुंज - My Profile' />
      <Header loginPage={true} subPage='myProfile' />
      <div className='my_profile_div'>
        <Container>
          <div className='profile_con'>
            <h2>Hello {user?.name || "N/A"}</h2>
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

export default MyProfile;
