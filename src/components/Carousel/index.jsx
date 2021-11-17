import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
<<<<<<< HEAD
import LinearProgress from '@mui/material/LinearProgress';
=======
import LinearProgress from "@mui/material/LinearProgress";
>>>>>>> ca57d40771fcad288a2ee5acea417328c515f5de

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./index.scss";
import Pro1 from '../../assets/images/P-1.png'
                                                                                                                                                                                                                                                                                                                        
function Carousel() {
  const divRef = React.useRef();
<<<<<<< HEAD
  const [progress, setProgress] = React.useState(10);

  const handleChange = (e) => {
    const carousel = e?.relatedTarget;
    divRef.current.innerHTML = `${carousel.relative(carousel.current()) + 1
      }/12`;
    // setProgress(oldProgress => carousel.relative(carousel.current())+1*10);
    // setProgress(oldProgress => {
    //   if(oldProgress === 100){
    //     return 10;
    //   }
    //   return carousel.relative(carousel.current())+1*10;
    // })
=======
  let progress = 0

  const handleChange = (e) => {
    const carousel = e?.relatedTarget;
    divRef.current.innerHTML = `${
      carousel.relative(carousel.current()) + 1
    }/12`;
    setProgress((carousel.relative(carousel.current()) + 1) * 10);
>>>>>>> ca57d40771fcad288a2ee5acea417328c515f5de
  };

  const setProgress = (step) => {
    progress = step;
  }
  
  console.log("progress" + progress);

  return (
    <>
<<<<<<< HEAD
      <div className='abc' ref={divRef}></div><div><LinearProgress variant="determinate" value={progress} /></div>
=======
      <div className='abc' ref={divRef}></div>
      <div>
        <LinearProgress variant='determinate' value={progress} />
      </div>
>>>>>>> ca57d40771fcad288a2ee5acea417328c515f5de
      <OwlCarousel
        className='owl-theme'
        loop
        margin={30}
        nav
        items={4}
        dots={false}
        smartSpeed='800'
<<<<<<< HEAD
        items={4}
        onChanged={(e) => handleChange(e)}
      >
        <div className='item'>
          <div className="box">
            <div className="slide-img">
              <img alt="" src={Pro1} />
              <div className="overlay">
              </div>
            </div>
            <div className="tag_btn">
              <button className="btn btn-info">Design</button>
              <h2>Adobe photoshop training: From beginner to PRO</h2>
            </div>
            <div className="detail-box">
              <div className="type">
                <a href="#">4.5 <img src="./images/star.png" alt="" /> <span>(104,716)</span></a>
                  <span className="std">46,995 Students</span>
						</div>
                <div className="time">
                  <p><img src="./images/timer.png" alt="" /> 11 hr 20 mins</p>
                  <p><img src="./images/list.png" alt="" /> 46 lectures</p>
                  <p><img src="./images/bar-chart.png" alt="" /> All level</p>
                </div>
              </div>
              <hr className="line" />
              <div className="names">
                <p><img src="./images/Profile.png" alt="" /> Ramadhir Krishna</p>
                <span>Free</span>
              </div>
            </div>
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
        
=======
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
>>>>>>> ca57d40771fcad288a2ee5acea417328c515f5de
      </OwlCarousel>
    </>
      );
}

      export default Carousel;
