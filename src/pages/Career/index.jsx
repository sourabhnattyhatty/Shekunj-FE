import React from "react";
import { useTranslation } from "react-i18next";

import { Carousel, Footer, Header, ScrollToTop, SEO } from "../../components";

import search from "../../assets/images/Career/search.png";
import Choose1 from "../../assets/images/Career/Choose1.png";
import Choose2 from "../../assets/images/Career/Choose2.png";
import Choose3 from "../../assets/images/Career/Choose3.png";
import Choose4 from "../../assets/images/Career/Choose4.png";
import Choose5 from "../../assets/images/Career/Choose5.png";
import Choose6 from "../../assets/images/Career/Choose6.png";
import Rankings from "../../assets/images/Career/Rankings.png";
import exams from "../../assets/images/Career/exams.png";
import exams_icon from "../../assets/images/Career/exams-icon.png";
import Bookmark from "../../assets/icons/bookmark.png";

import "../HomePage/index.scss";
import "./index.scss";
import { constants } from "../../utils";

const CareerPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <SEO title="Sheकुंज - Career"/>
      <Header loginPage={true} page='career' />

      <section className='Car_Ban'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 offset-6'>
              <div className='Car_con'>
                <h2>{t("careerPage.heading")}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Velit, in vitae in metus, mattis porttitor euismod ac
                  tincidunt. Ac nunc felis pellentesque a aliquam.
                </p>
                <br />
                <div class='pseudo-search'>
                  <input
                    type='text'
                    placeholder={t("careerPage.searchPlaceholder")}
                    autofocus=''
                    required=''
                  />

                  <button class='fa fa-search' type='submit'>
                    <img src={search} alt='' srcSet='' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='care_csl'>
        <Carousel
          items={1}
          details={true}
          title1={t("careerPage.carousel1.heading.1")}
          title2={t("careerPage.carousel1.heading.2")}
          type={constants.carouselConstant.COLLEGES}
        />
      </div>

      <section className='choose_ses'>
        <div className='container'>
          <h2>{t("careerPage.heading2")}</h2>

          <div className='row_box'>
            <div className='row'>
              {[Choose1, Choose2, Choose3].map((obj, ind) => (
                <>
                  <div className='col-md-4'>
                    <div className='choose_box'>
                      <img src={obj} alt='' />
                      <div className='choose_con'>
                        <h3>
                          Resume Writing{" "}
                          <img
                            src={Bookmark}
                            className='ml-2 bookimg'
                            alt='...'
                          />{" "}
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed aliquet sit urna amet ipsum ornare urna.
                          Cras viverra orci eros, consequat purus dui.
                        </p>
                        <a
                          data-aos='zoom-in'
                          href='#!'
                          class='learn_more aos-init aos-animate'
                        >
                          {t("homePage.highlightStudents.button")}
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className='row_box'>
            <div className='row'>
              {[Choose4, Choose5, Choose6].map((obj, ind) => (
                <>
                  <div className='col-md-4'>
                    <div className='choose_box'>
                      <img src={obj} alt='' />
                      <div className='choose_con'>
                        <h3>
                          LinkedIn Profile Writing{" "}
                          <img
                            src={Bookmark}
                            className='ml-2 bookimg'
                            alt='...'
                          />{" "}
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed aliquet sit urna amet ipsum ornare urna.
                          Cras viverra orci eros, consequat purus dui.
                        </p>
                        <a
                          data-aos='zoom-in'
                          href='#!'
                          className='learn_more aos-init aos-animate'
                        >
                          {t("homePage.highlightStudents.button")}
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className='care_csl'>
        <Carousel
          items={1}
          details={true}
          title1={t("careerPage.carousel2.heading.1")}
          title2={t("careerPage.carousel2.heading.2")}
          type={constants.carouselConstant.SCHOOLS}
        />
      </div>

      <section className='best_edu mb-5'>
        <div className='container'>
          <div className='edu_tit'>
            <h2>{t("careerPage.heading3")}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              gravida tellus leo risus. Proin sagittis nec nisi tortor nisl
              purus et at.
            </p>
          </div>

          <div className='row'>
            <div className='col-md-7'>
              <div className='ranking'>
                <h3>
                  <img src={Rankings} alt='' /> {t("careerPage.ranking")}
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate aliquam convallis urna volutpat, tortor, et eu.
                  Mattis ac praesent .
                </p>
                <div className='tags'>
                  <button className='btn btn-info'>
                    Top Engineering Colleges in India
                  </button>
                  <button className='btn btn-info'>
                    Top MBA Colleges in India
                  </button>
                </div>

                <div className='tags'>
                  <button className='btn btn-info'>
                    Top Engineering Colleges in India
                  </button>
                  <button className='btn btn-info'>
                    Top MBA Colleges in India
                  </button>
                </div>
              </div>

              <div className='ranking exms'>
                <h3>
                  <img src={exams_icon} alt='' /> {t("careerPage.exam")}
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate aliquam convallis urna volutpat, tortor, et eu.
                  Mattis ac praesent .
                </p>
                <div className='tags'>
                  <button className='btn btn-info'>JEE Main</button>
                  <button className='btn btn-info'>GATE</button>
                  <button className='btn btn-info'>NEET</button>
                  <button className='btn btn-info'>NIFT Entrance Exam</button>
                  <button className='btn btn-info'>CAT</button>
                  <button className='btn btn-info'>CLAT</button>
                </div>

                <div className='tags'>
                  <button className='btn btn-info'>BITSAT</button>
                  <button className='btn btn-info'>SRMJEEE</button>
                  <button className='btn btn-info'>VITEEE</button>
                  <button className='btn btn-info'>MET</button>
                </div>
              </div>
            </div>

            <div className='col-md-5'>
              <div className='exams'>
                <img src={exams} alt='' srcSet='' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider 1 */}

      <ScrollToTop />

      <Footer loginPage={false} />
    </div>
  );
};

export default CareerPage;
