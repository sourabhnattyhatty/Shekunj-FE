import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TitleIcon from '../../assets/icons/logo.svg';
import ChangeLanguageButton from '../LanguageButton';

import './index.scss';

const Header =  () => {
  const [searchValue, setSearchValue] = useState('');
  const { t } = useTranslation();

  return (
    <div className="home_1">
      <header>
        <div className="logo_2">
          <img src={TitleIcon} alt="..." />
        </div>

        <div className="set_form">
          <input
            type="text"
            className="search_input"
            placeholder={t('header.searchPlaceholder')}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="search_icon" />
          <Link to="/login">
            <button className="login_register">{t('header.courseButton')}</button>
          </Link>
        </div>

        <div className="set_language">
          <ChangeLanguageButton />
        </div>
      </header>

      <div className="headings">
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
  );
};

export default Header;
