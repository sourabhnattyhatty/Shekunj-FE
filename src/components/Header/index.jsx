import React, { useState } from "react";
import { Link } from "react-router-dom";
import TitleIcon from "../../assets/icons/logo.svg";
import { useTranslation } from "react-i18next";

import "./index.scss";

function Header() {

  const [searchValue, setSearchValue] = useState('');
  const {t} = useTranslation();

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
                placeholder={t('header.searchPlaceholder')} 
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
              <button disabled={!searchValue.length}>{t('header.courseButton')}</button>
            </form>
          </header>

          <div className="headings">
            <div className="navbar">
              <Link to="/about">{t('header.heading.1')}</Link>
              <Link to="/courses">{t('header.heading.2')}</Link>
              <Link to="/guidance">{t('header.heading.3')}</Link>
              <Link to="/resume_builder">{t('header.heading.4')}</Link>
              <Link to="/career">{t('header.heading.5')}</Link>
              <Link to="/jobs">{t('header.heading.6')}</Link>
              <Link to="/blogs">{t('header.heading.7')}</Link>
              <Link to="/success_story">{t('header.heading.8')}</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Header;
