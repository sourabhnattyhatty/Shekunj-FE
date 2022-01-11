/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import Slider from "react-slick";
import Aos from "aos";
import { useTranslation } from "react-i18next";
import { Link, Redirect } from "react-router-dom";

import { constants } from "../../utils";
import { Header, Footer, Carousel, SEO } from "../../components";

import "animate.css";
import "aos/dist/aos.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import "../../pages/responsive.scss";
import "../../pages/responsive.scss";
import "./index.scss";

import Resume from "../../assets/images/resume.png";
import Girl from "../../assets/images/job1.png";
import Community from "../../assets/images/community.png";
import Nikita from "../../assets/images/testimonial/1.png";
import Priya from "../../assets/images/testimonial/2.png";
import star from "../../assets/images/Star 2.png";
import certif from "../../assets/images/certif.jpg";
import g1 from "../../assets/images/1.png";
import g2 from "../../assets/images/2.png";
import g3 from "../../assets/images/3.png";
import g4 from "../../assets/images/4.png";
import g5 from "../../assets/images/5.png";
import g6 from "../../assets/images/6.png";
import g7 from "../../assets/images/7.png";
import g8 from "../../assets/images/8.png";
import g9 from "../../assets/images/9.png";
import g10 from "../../assets/images/10.png";
import g11 from "../../assets/images/11.png";
import g12 from "../../assets/images/12.png";
import g13 from "../../assets/images/13.png";
import g14 from "../../assets/images/14.png";
import g15 from "../../assets/images/15.png";
import g16 from "../../assets/images/16.png";
import g17 from "../../assets/images/17.png";
import g18 from "../../assets/images/18.png";
import g19 from "../../assets/images/19.png";
import g20 from "../../assets/images/20.png";

function HomePage() {
  const { t } = useTranslation();

  const settings = {
    dots: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <SEO />
      <Header loginPage={false} page='home' />

      {/* slider */}

      <div id='myCarousel' className='banner_slider mb-5 noselect'>
        <div className='carousel-inner'>
          <Slider {...settings}>
            <div className='carousel-item carousel_item1'>
              <div className='container'>
                <div className='row h_set' data-aos='slide-up'>
                  <div className='col-md-7 col-12'>
                    <h4 className='mt-5 pt-lg-5 mb-1'>
                      {t("homePage.mainSlider.heading.1")}
                    </h4>
                    <h5>{t("homePage.mainSlider.heading.4")}</h5>

                    <p className='mb-4'>
                      {" "}
                      We believe that there is no right age, time or place to
                      learn. It really does not matter if you are 16 or 60,
                      learning is an ongoing process so let’s keep it that way!
                      Take classes on the go with the SheKunj.
                    </p>
                    <Link to='/courses' className='banner_btn'>
                      {t("homePage.mainSlider.button.1")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='carousel-item carousel_item2'>
              <div className='container'>
                <div className='row h_set'>
                  <div className='col-md-7 col-12'>
                    <h4 className='mt-5 pt-lg-5 mb-1' data-aos='zoom-in'>
                      {t("homePage.mainSlider.heading.2")}
                    </h4>
                    <h5>{t("homePage.mainSlider.heading.5")}</h5>
                    <p className='mb-4' data-aos='zoom-in'>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In sed fermentum massa semper mauris volutpat dictum
                      fames. Amet hendrerit at duis porttitor ipsum.{" "}
                    </p>
                    <Link
                      to='/courses'
                      className='banner_btn'
                      data-aos='zoom-in'
                    >
                      {t("homePage.mainSlider.button.5")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='carousel-item carousel_item3'>
              <div className='container'>
                <div className='row h_set'>
                  <div className='col-md-7 col-12'>
                    <h4 className='mt-5 pt-lg-5 mb-1' data-aos='zoom-in'>
                      {t("homePage.mainSlider.heading.3.3.1")}
                    </h4>

                    <h5>{t("homePage.mainSlider.heading.3.3.2")}</h5>

                    <p className='mb-4' data-aos='zoom-in'>
                      Take the world’s most-advanced career advice from
                      SheKunj's finest career counsellors online and find your
                      best-fit career.
                    </p>

                    <Link
                      to='/guidance-book'
                      className='banner_btn'
                      data-aos='zoom-in'
                    >
                      {t("homePage.mainSlider.button.4")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='carousel-item carousel_item4'>
              <div className='container'>
                <div className='row h_set'>
                  <div className='col-md-7 col-12 offset-lg-6 offset-md-5'>
                    <h4 className='mt-5 pt-lg-5 mb-1' data-aos='zoom-in'>
                      {t("homePage.mainSlider.heading.2")}
                    </h4>

                    <h5>{t("homePage.mainSlider.heading.5")}</h5>

                    <p className='mb-4' data-aos='zoom-in'>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In sed fermentum massa semper mauris volutpat dictum
                      fames. Amet hendrerit at duis porttitor ipsum.{" "}
                    </p>

                    <Link
                      to='/courses'
                      className='banner_btn'
                      data-aos='zoom-in'
                    >
                      {t("homePage.mainSlider.button.6")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* Slider 1 */}
      <Carousel
        items={5}
        page='homePage'
        title1={t("homePage.carousel1.heading.1")}
        title2={t("homePage.carousel1.heading.2")}
        type={constants.carouselConstant.COURSES}
      />
      <Link to='/courses' style={{ textDecoration: "none" }}>
        <button className='view_test_cate'>
          {t("homePage.mainSlider.button.5")}
        </button>
      </Link>

      {/* resume */}
      <section className='resume same_padding mt-5 noselect'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7' data-aos='slide-up'>
              <h4>{t("homePage.resume.heading")}</h4>
              <a
                rel='noreferrer'
                href='https://octahire.com/Resume_maker'
                target='_blank'
                className='btn btn-resume mt-4'
              >
                {t("homePage.resume.button")}
              </a>
            </div>

            <div className='resumeimg'>
              <img src={Resume} alt='...' />
            </div>
          </div>
        </div>
      </section>

      {/* Slider 2 */}
      <Carousel
        items={5}
        page='homePage'
        title1={t("homePage.carousel2.heading.1")}
        title2={t("homePage.carousel2.heading.2")}
        type={constants.carouselConstant.TEST}
      />
      <Link to='/success-career-test' style={{ textDecoration: "none" }}>
        <button className='view_test_cate noselect'>
          {t("homePage.mainSlider.button.3")}
        </button>
      </Link>

      {/* Job opportunity */}
      <section className='job-opprtunity same_padding mt-5 noselect'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12 col-md-11'>
              <div className='job-opprtunity-bg'>
                <div className='row'>
                  <div className='col-lg-8' data-aos='slide-up'>
                    <h3>{t("homePage.jobopportunity.heading")}</h3>
                    <p>
                      Enroll. Learn. Explore. Grow. Work. SheKunj offers Indian
                      women a whole new world waiting to be explored! We aim at
                      bringing education to the women masses. The Best Certified
                      Online Courses for a Sustainable Career are aimed at all
                      professionals, entrepreneurs and graduates who want to
                      excel in their profession.
                    </p>
                    <a
                      rel='noreferrer'
                      target='_blank'
                      href='https://octahire.com/Home/candidate_register'
                      className='btn btn-job'
                    >
                      {t("homePage.jobopportunity.button")}
                    </a>
                  </div>

                  <div className='col-lg-4'>
                    <div className='jobimg'>
                      <img src={Girl} alt='...' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Carousel
        items={5}
        page='homePage'
        title1={t("homePage.carousel3.heading.1")}
        title2={t("homePage.carousel3.heading.2")}
        type={constants.carouselConstant.GOVERNMENT_EXAMS}
      />
      <Link to='/government-exams' style={{ textDecoration: "none" }}>
        <button className='view_test_cate' onClick={()=><Redirect to="/government-exams"/>} >
        {t("homePage.mainSlider.button.2")}
        </button>
      </Link>

      {/* career development */}
      <section className='career_community same_padding mt-5 noselect'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-12'>
              <h3 data-aos='slide-up'>{t("homePage.community.heading")}</h3>
              <p data-aos='slide-up'>
              {t("homePage.community.data")}
              </p>

              <div className='mob_comunity_img'>
                <img data-aos='slide-up' src={Community} alt='...' />
              </div>

              <div className='community-img mt-5'>
                <div className='community1 communityring'>
                  <img src={g1} alt='Image' />
                </div>

                <div className='community2 communityring'>
                  <img src={g2} alt='Image' />
                </div>

                <div className='community3 communityring'>
                  <img src={g3} alt='Image' />
                </div>

                <div className='community4 communityring'>
                  <img src={g4} alt='Image' />
                </div>

                <div className='community5 communityring'>
                  <img src={g5} alt='Image' />
                </div>

                <div className='community6 communityring'>
                  <img src={g6} alt='Image' />
                </div>

                <div className='community7 communityring'>
                  <img src={g7} alt='Image' />
                </div>

                <div className='community8 communityring'>
                  <img src={g8} alt='Image' />
                </div>

                <div className='community9 communityring'>
                  <img src={g9} alt='Image' />
                </div>

                <div className='community10 communityring'>
                  <img src={g10} alt='Image' />
                </div>

                <div className='community11 communityring'>
                  <img src={g11} alt='Image' />
                </div>

                <div className='community12 communityring'>
                  <img src={g12} alt='Image' />
                </div>

                <div className='community13 communityring'>
                  <img src={g13} alt='Image' />
                </div>

                <div className='community14 communityring'>
                  <img src={g14} alt='Image' />
                </div>

                <div className='community15 communityring'>
                  <img src={g15} alt='Image' />
                </div>

                <div className='community16 communityring'>
                  <img src={g16} alt='Image' />
                </div>

                <div className='community17 communityring'>
                  <img src={g17} alt='Image' />
                </div>

                <div className='community18 communityring'>
                  <img src={g18} alt='Image' />
                </div>

                <div className='community19 communityring'>
                  <img src={g19} alt='Image' />
                </div>

                <div className='community20 communityring'>
                  <img src={g20} alt='Image' />
                </div>
              </div>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-md-4 text-center mt-5'>
              <Link to='/success-stories' style={{ textDecoration: "none" }}>
                <button className='btn btn-start-course' data-aos='slide-up'>
                  {t("homePage.community.button")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className='career_community noselect'>
        <div className='container'>
          <div className='community_block d-md-block d-none'>
            <div className='career_community'>
              <div className='community1'>
                <img src={g1} alt='Image' />
              </div>

              <div className='community2'>
                <img src={g2} alt='Image' />
              </div>

              <div className='community3'>
                <img src={g3} alt='Image' />
              </div>

              <div className='community4'>
                <img src={g4} alt='Image' />
              </div>

              <div className='community5'>
                <img src={g5} alt='Image' />
              </div>

              <div className='community6'>
                <img src={g6} alt='Image' />
              </div>

              <div className='community7'>
                <img src={g7} alt='Image' />
              </div>

              <div className='community8'>
                <img src={g8} alt='Image' />
              </div>

              <div className='community9'>
                <img src={g9} alt='Image' />
              </div>

              <div className='community10'>
                <img src={g10} alt='Image' />
              </div>

              <div className='community11'>
                <img src={g11} alt='Image' />
              </div>

              <div className='community12'>
                <img src={g12} alt='Image' />
              </div>

              <div className='community13'>
                <img src={g13} alt='Image' />
              </div>

              <div className='community14'>
                <img src={g14} alt='Image' />
              </div>

              <div className='community15'>
                <img src={g15} alt='Image' />
              </div>

              <div className='community16'>
                <img src={g16} alt='Image' />
              </div>

              <div className='community17'>
                <img src={g17} alt='Image' />
              </div>

              <div className='community18'>
                <img src={g18} alt='Image' />
              </div>

              <div className='community19'>
                <img src={g19} alt='Image' />
              </div>

              <div className='community20'>
                <img src={g20} alt='Image' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* certificate */}
      <section className='certificate same_padding noselect'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='cer_img'>
                <img src={certif} alt='' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='certif_con'>
                <h4>
                  {t("homePage.certificate.heading.1")}{" "}
                  {t("homePage.certificate.heading.2")}
                </h4>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat sed vel scelerisque sodales tristique porttitor vitae.
                  Ornare phasellus nibh in orci. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Feugiat sed vel scelerisque
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* highlight students */}
      <section className='highlight_student same_padding noselect'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-md-6 col-6'>
                  <div data-aos='slide-right'>
                    <div className='tes_box tes-before'>
                      <img src={Nikita} alt='' />
                      <p>{t("aboutPage.review.1")}</p>
                      <ul className='star'>
                        <li>
                          <img src={star} alt='' />
                        </li>
                        <li>
                          <img src={star} alt='' />
                        </li>
                        <li>
                          <img src={star} alt='' />
                        </li>
                        <li>
                          <img src={star} alt='' />
                        </li>
                        <li>
                          <img src={star} alt='' />
                        </li>
                      </ul>
                      <h2>{t("aboutPage.reviewerDetails.reviewerName.1")}</h2>
                      <h6>{t("aboutPage.reviewerDetails.reviewerPost.1")}</h6>
                    </div>
                  </div>

                  <div className='tes_box2' data-aos='slide-up'>
                    <h2>{t("aboutPage.review.2")}</h2>
                  </div>
                </div>

                <div className='col-md-6 col-6'>
                  <div data-aos='slide-down'>
                    <div className='tes_box3'>
                      <h2>4.9/5</h2>
                      <ul className='star'>
                        <li>
                          <img src={star} alt='' />
                        </li>
                        <li>
                          <img src={star} alt='' />
                        </li>
                        <li>
                          <img src={star} alt='' />
                        </li>
                        <li>
                          <img src={star} alt='' />
                        </li>
                        <li>
                          <img src={star} alt='' />
                        </li>
                      </ul>
                      <h6>{t("aboutPage.salesNumber")}</h6>
                    </div>
                  </div>

                  <div data-aos='slide-left'>
                    <div className='tes_box heg_cha'>
                      <img src={Priya} alt='' />
                      <p>{t("aboutPage.review.3")}</p>
                      <ul className='star'>
                        <li>
                          <img src={star} alt='' />
                        </li>
                        <li>
                          <img src={star} alt='' />
                        </li>
                        <li>
                          <img src={star} alt='' />
                        </li>
                        <li>
                          <img src={star} alt='' />
                        </li>
                        <li>
                          <img src={star} alt='' />
                        </li>
                      </ul>
                      <h2>{t("aboutPage.reviewerDetails.reviewerName.1")}</h2>
                      <h6>{t("aboutPage.reviewerDetails.reviewerPost.1")}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-5 offset-md-1'>
              <h3 className='mb-3 mt-4'>
                {t("homePage.highlightStudents.homeHeading")}
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                donec molestie sit diam aliquam egestas erat tincidunt magna.
                Tincidunt et faucibus a curabitur sed at sagittis orci id. Odio
                nunc, purus a, ut integer. Ultricies orci nulla eu, libero
                ornare ipsum. Tincidunt erat pulvinar viverra pharetra.
              </p>

              <Link to='/courses' data-aos='slide-up' className='learn_more'>
                {t("homePage.highlightStudents.homeButton")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer loginPage={false} />
    </div>
  );
}

export default HomePage;
