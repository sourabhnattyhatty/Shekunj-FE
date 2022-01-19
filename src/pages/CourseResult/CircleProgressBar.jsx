import React from "react";
// import "./CircleProgressBar.scss";

function CircleProgressBar({ size,title1,title2,result }) {
    
  return (
    <>
      <div
        className={
          size === "medium" ? "progress blue pink_pro" : "progress blue"
        }
        data-percentage="50">
        <span className='arrow'></span>
        <span className='progress-left'>
          <span className='progress-bar'></span>
        </span>
        <span className='progress-right'>
          <span className='progress-bar'></span>
        </span>
        {/* <div className='progress-value'>90%</div> */}

        <div className='progress-value'>
          <div>
            <p>{result}{size === "medium" && "%"}<span>{size === "small1" && "min"}</span></p>
            
            <span>
            {title1} <br />
            {title2}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CircleProgressBar;
