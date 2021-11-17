import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import LinearProgress from '@mui/material/LinearProgress';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./index.scss";
import Pro1 from '../../assets/images/P-1.png'
import star from '../../assets/images/Star 2.png';
import timer from '../../assets/images/timer.png';
import list from '../../assets/images/list.png';
import level from '../../assets/images/level.png';



function Carousel({items, details}) {
  const divRef = React.useRef();
  const [progress, setProgress] = React.useState(10);

  // const handleChange = (e) => {
  //   const carousel = e?.relatedTarget;
  //   divRef.current.innerHTML = `${carousel.relative(carousel.current()) + 1
  //     }/12`;
  //   // setProgress(oldProgress => carousel.relative(carousel.current())+1*10);
  //   // setProgress(oldProgress => {
  //   //   if(oldProgress === 100){
  //   //     return 10;
  //   //   }
  //   //   return carousel.relative(carousel.current())+1*10;
  //   // })
  // }
    // let progress = 0

    const handleChange = (e) => {
      const carousel = e?.relatedTarget;
      divRef.current.innerHTML = `${carousel.relative(carousel.current()) + 1
        }/5`;
      // setProgress((carousel.relative(carousel.current()) + 1) * 10);
    };

    // const setProgress = (step) => {
    //   progress = step;
    // }

    console.log("progress" + progress);

    return (
      <>
        
        {/* <div><LinearProgress variant="determinate" value={progress} /></div> */}

        <div className="container Our_text">
          <p>Our</p>
          <h2>most popular courses</h2>
        </div>
        <div className="set">
        
        <div className="abc_box">
        <div className='abc' ref={divRef}></div>
        </div>

       
        
        <OwlCarousel
          className='owl-theme'
          loop
          margin={120}
          nav
          items={4}
          dots={false}
          smartSpeed='800'
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
                  <a href="#">4.5 <img src={star} alt="" /> <span>(104,716)</span></a>
                  <span className="std">46,995 Students</span>
                </div>
                <div className="time">
                  <p><img src={timer} alt="" /> 11 hr 20 mins</p>
                  <p><img src={list} alt="" /> 46 lectures</p>
                  <p><img src={level} alt="" /> All level</p>
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
        </OwlCarousel>
        </div>
      </>
    );
    }


    export default Carousel
