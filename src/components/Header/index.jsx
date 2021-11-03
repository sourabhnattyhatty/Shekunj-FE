import React, { useState } from "react";
import { Link } from "react-router-dom";
import TitleIcon from "../../assets/icons/logo.svg";

import "./index.scss";

function Header() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className='container'>
        
        <div className='home_1'>
          <header>
            <div className='logo_1'>
              <img src={TitleIcon} alt='...' />
            </div>

            <form className="set_form">
              <input 
                type='text' 
                placeholder='Find a course' 
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
              <button disabled={!searchValue.length}>Start Course</button>
            </form>
          </header>

          <div className="headings">
            <div className="navbar">
              <Link to="/about">About</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/guidance">Guidance</Link>
              <Link to="/resume_builder">Resume Builder</Link>
              <Link to="/career">Career</Link>
              <Link to="/jobs">Jobs</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/success_story">Success story</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Header;
