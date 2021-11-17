import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import LinearProgress from "@mui/material/LinearProgress";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./index.scss";

function Carousel() {
  const divRef = React.useRef();
  let progress = 0

  const handleChange = (e) => {
    const carousel = e?.relatedTarget;
    divRef.current.innerHTML = `${
      carousel.relative(carousel.current()) + 1
    }/12`;
    setProgress((carousel.relative(carousel.current()) + 1) * 10);
  };

  const setProgress = (step) => {
    progress = step;
  }
  
  console.log("progress" + progress);

  return (
    <>
      <div className='abc' ref={divRef}></div>
      <div>
        <LinearProgress variant='determinate' value={progress} />
      </div>
      <OwlCarousel
        className='owl-theme'
        loop
        margin={10}
        nav
        items={4}
        dots={false}
        smartSpeed='800'
        onChanged={handleChange}
        animateOut= 'fadeOut'
      >
        <div className='item'>
          <h4>1</h4>
        </div>
        <div className='item'>
          <h4>2</h4>
        </div>
        <div className='item'>
          <h4>3</h4>
        </div>
        <div className='item'>
          <h4>4</h4>
        </div>
        <div className='item'>
          <h4>5</h4>
        </div>
        <div className='item'>
          <h4>6</h4>
        </div>
        <div className='item'>
          <h4>7</h4>
        </div>
        <div className='item'>
          <h4>8</h4>
        </div>
        <div className='item'>
          <h4>9</h4>
        </div>
        <div className='item'>
          <h4>10</h4>
        </div>
      </OwlCarousel>
    </>
  );
}

export default Carousel;
