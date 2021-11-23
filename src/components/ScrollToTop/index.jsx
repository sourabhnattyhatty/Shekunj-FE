import React, { useState } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Tooltip from "@mui/material/Tooltip";

import "./index.scss";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <Tooltip title='Back to top'>
        <ArrowUpwardIcon
          className='back_to_top'
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </Tooltip>
    </>
  );
}

export default ScrollToTop;
