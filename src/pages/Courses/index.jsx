import React, { useEffect } from "react";
import Aos from "aos";
import { useTranslation } from "react-i18next";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTop from "../../components/ScrollToTop";
import Carousel from "../../components/Carousel";

import one from "../../assets/images/Courses/01.png";
import two from "../../assets/images/Courses/02.png";
import three from "../../assets/images/Courses/03.png";
import img1 from "../../assets/images/Courses/img1.png";
import img2 from "../../assets/images/Courses/img2.png";
import img3 from "../../assets/images/Courses/img3.png";
import Search from "../../assets/icons/search.png";
import Profile from "../../assets/images/testimonial/1.png";
import level from "../../assets/images/level.png";
import list from "../../assets/images/list.png";
import star from "../../assets/images/Star 2.png";
import timer from "../../assets/images/timer.png";
import Dropdown from "./Dropdown/index";
import Pro1 from "../../assets/images/P-1.png";

import "./index.scss";
import "../../pages/HomePage/index.scss";


const Index = (props) => {
  const { t } = useTranslation();


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Header loginPage={true} page='courses' />
      <section className='Cors_sec'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <div className='cors_con'>
                <h2>{t('coursesPage.banner.heading')}</h2>
                <div className='cour_box'>
                  <ul>
                    <li>
                      <img src={one} alt='' srcSet='' />
                    </li>
                    <li>
                      <img src={two} alt='' srcSet='' />
                    </li>
                    <li>
                      <img src={three} alt='' srcSet='' />
                    </li>
                  </ul>
                  <div className='rig_ul'>
                    <ul className='ulcont'>
                      <li>
                        <img src={img1} alt='' />
                      </li>
                      <li> {t('coursesPage.banner.1')}</li>
                    </ul>

                    <ul className='ulcont'>
                      <li>
                        <img src={img2} alt='' />
                      </li>
                      <li>
                        {" "}
                        {t('coursesPage.banner.2.1')} <br />
                        {t('coursesPage.banner.2.2')}
                      </li>
                    </ul>

                    <ul className='ulcont'>
                      <li>
                        <img src={img3} alt='' />
                      </li>
                      <li> {t('coursesPage.banner.3')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='Srch_sec'>
        <div className='container'>
          <h2>Search Courses and Programs</h2>
          <div className='Serc_type'>
            <div className='inp_ser'>
              <img src={Search} alt='...' />
              <input
                type='search'
                name=''
                id=''
                placeholder='What do you want to learn?'
              />
            </div>
            <button className='btn btn-info'>Search</button>
          </div>

          <div className='row'>
            <div className='col-md-2'>
              <Dropdown title='Subject' />
            </div>
            <div className='col-md-2'>
              <Dropdown title='Partner' />
            </div>
            <div className='col-md-2'>
              <Dropdown title='Program' />
            </div>
            <div className='col-md-2'>
              <Dropdown title='Level' />
            </div>
          </div>

          <h4>OUR COURSES</h4>
          <h3>Study top quality & advanced course content in Hindi</h3>

          <div className='container'>
            <div className='row'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => (
                <div className='col-md-4'>
                  <div className='box box_hov'>
                    <div className='slide-img'>
                      <img alt='' src={Pro1} />
                      <div className='overlay'></div>
                    </div>

                    <div className='tag_btn'>
                      <button className='btn btn-info'>Design</button>
                      <h6>Adobe photoshop training: From beginner to PRO</h6>
                    </div>
                    <div className='detail-box'>
                      <div className='type'>
                        <a href='#!'>
                          4.0 <img src={star} alt='' /> <span>104,567</span>
                        </a>
                        <span className='std'>5600 Students</span>
                      </div>
                      <div className='time'>
                        <p>
                          <img src={timer} alt='' /> 11h 40min
                        </p>
                        <p>
                          <img src={list} alt='' /> 20 lectures
                        </p>
                        <p>
                          <img src={level} alt='' /> All level
                        </p>
                      </div>
                    </div>

                    <hr className='line' />
                    <div className='names'>
                      <p>
                        <img src={Profile} alt='...' /> Ramadhir Krishna
                      </p>
                      <span>Free</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Slider 2 */}
      <Carousel
        items={5}
        details={false}
        title1={t("homePage.carousel2.heading.1")}
        title2={t("homePage.carousel2.heading.2")}
      />

      <ScrollToTop />

      <Footer loginPage={false} />
    </div>
  );
};

export default Index;
