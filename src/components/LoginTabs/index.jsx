import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useTranslation } from "react-i18next";

import "./index.scss";

import LoginForm1 from "./LoginForm1";
import LoginForm2 from "./LoginForm2";



export default function LoginTabs() {
  const [value, setValue] = React.useState("1");
  const {t} = useTranslation();

  const handleChanged = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderColor: "divider" }}>
          <TabList
            onChange={handleChanged}
            aria-label='lab API tabs example'
            color='primary'
          >
            <Tab className='xyz' label={t('login.tabLabel.1')} value='1' />
            <Tab className='xyz' label={t('login.tabLabel.2')} value='2' />
          </TabList>
        </Box>

        <TabPanel value='1'>
          <LoginForm1/>
        </TabPanel>

        <TabPanel value='2'>
          <LoginForm2/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
