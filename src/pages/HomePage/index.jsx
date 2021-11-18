import React, { useEffect } from "react";
import Slider from "react-slick";
import Aos from 'aos';

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";


import Resume from "../../assets/images/resume.png";
import Girl from "../../assets/images/job1.png";
import Community from "../../assets/images/community.png";
import SemiCircle1 from "../../assets/images/testimonial/orangesemi.png";
import SemiCircle2 from "../../assets/images/testimonial/greensemi.png";
import SemiCircle3 from "../../assets/images/testimonial/circle.png";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./index.scss";
import 'animate.css';
import star from '../../assets/images/Star 2.png';
import Nikita from '../../assets/images/Nikita-Sharma.png';
import 'aos/dist/aos.css'

function HomePage() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,

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
      <Header loginPage={false} />

      {/* slider */}

      <div id='myCarousel' className='banner_slider mb-5'>
        <div className='carousel-inner'>
          <Slider {...settings}>
            <div className='carousel-item carousel_item1'>
              <div className='container'>
                <div className='row h_set'>
                  <div className='col-md-7 col-12 mt-5'>
                    <h4 className='mt-5 pt-md-5 mb-3'  data-aos='fade-right'>
                      Anytime, anywhere, Learn on your schedule from any device
                    </h4>
                    <p className='mb-4' data-aos='fade-left'>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In sed fermentum massa semper mauris volutpat dictum
                      fames. Amet hendrerit at duis porttitor ipsum.{" "}
                    </p>
                    <a href='#!' className='banner_btn' data-aos="zoom-in">
                      Start Course
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='carousel-item carousel_item2'>
              <div className='container'>
                <div className='row h_set'>
                  <div className='col-md-7 col-12 mt-5'>
                    <h4 className='mt-5 pt-md-5 mb-3' data-aos='fade-left'>
                      Anytime, anywhere, Learn on your schedule from any device
                    </h4>
                    <p className='mb-4' data-aos='fade-right'>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In sed fermentum massa semper mauris volutpat dictum
                      fames. Amet hendrerit at duis porttitor ipsum.{" "}
                    </p>
                    <a href='#!' className='banner_btn' data-aos="zoom-in">
                      Start Course
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* Slider 1 */}
      <Carousel items={5} details="yes" />


      {/* resume */}
      <section class='resume same_padding mt-5'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-7'>
              <h4 data-aos='slide-right'>
                Design your resume in real time and download a print-reday PDF.
              </h4>
              <button class='btn btn-resume' data-aos="zoom-in">DESIGN MY RESUME</button>
            </div>


            <div class='resumeimg' data-aos='slide-left'>
              <img src={Resume} alt='...' />
            </div>
          </div>
        </div>
      </section>

      {/* Slider 2 */}
      <Carousel items={5} details="no" />

      {/* Job opportunity */}
      <section class='job-opprtunity same_padding mt-5'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-lg-10 col-md-11'>
              <div class='job-opprtunity-bg'>
                <div class='row'>
                  <div class='col-md-8'>
                    <h3 data-aos='slide-right'>Grab job oppotunities...</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Rutrum sapien nunc sit egestas amet magnis enim.
                      Suspendisse vulputate ut nunc lorem mi ut lacus. Felis
                      vitae vel.
                    </p>
                    <button data-aos="zoom-in" class='btn btn-job'>
                      view all job oppotunities
                    </button>
                  </div>

                  <div class='jobimg'>
                    <img src={Girl} alt='...' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Carousel items={5} details="no" />


      {/* career development */}
      <section class='career_community same_padding mt-5'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-11'>
              <h3 data-aos="zoom-in">Shekunj Career Development Community</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum
                sapien nunc sit egestas amet magnis enim. Suspendisse vulputate
                ut nunc lorem mi ut lacus. Felis vitae vel.
              </p>

              <div class='community-img mt-5'>
                <img data-aos='slide-up' src={Community} alt='...' />
              </div>
            </div>
          </div>

          <div class='row justify-content-center'>
            <div class='col-md-4 text-center mt-5'>
              <button class='btn btn-start-course' data-aos="zoom-in">Start Course</button>
            </div>
          </div>
        </div>
      </section>

      {/* certificate */}
      <section class='certificate same_padding'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6 offset-md-6 offset-lg-6 offset-xl-7'>
              <h4>
                Gain Industry-Recognized <br /> UX Certificates
              </h4>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                sed vel scelerisque sodales tristique porttitor vitae. Ornare
                phasellus nibh in orci. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Feugiat sed vel scelerisque
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* highlight students */}
      <section class='highlight_student same_padding'>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6'>
              {/* <img src={SemiCircle1} class='semicircle-img1' alt='Image' />
              <img src={SemiCircle2} class='semicircle-img2' alt='Image' />
              <img src={SemiCircle3} class='circle-img' alt='Image' /> */}

              <div className="row">
                <div className="col-md-6">
                  <div data-aos="slide-right">
                    <div className="tes_box tes-before" >
                      <img src={Nikita} alt="" srcset="" />
                      <p>“I love their flexibility, Even when my request is too complicated to handle, the could still suggest something useful for me.”</p>
                      <ul className="star">
                        <li><img src={star} alt="" /></li>
                        <li><img src={star} alt="" /></li>
                        <li><img src={star} alt="" /></li>
                        <li><img src={star} alt="" /></li>
                        <li><img src={star} alt="" /></li>
                      </ul>
                      <h2>Nikita Sharma</h2>
                      <h6>Content Writer</h6>
                    </div>
                  </div>

                    <div className="tes_box2"  data-aos="slide-up">
                      <h2>“Best out of the best in the online learning field...”</h2>
                    </div>
                </div>



                <div className="col-md-6">
                  <div data-aos="slide-down">
                    <div className="tes_box3">
                      <h2>4.9/5</h2>
                      <ul className="star">
                        <li><img src={star} alt="" /></li>
                        <li><img src={star} alt="" /></li>
                        <li><img src={star} alt="" /></li>
                        <li><img src={star} alt="" /></li>
                        <li><img src={star} alt="" /></li>
                      </ul>
                      <h6>by 1000+ Students for 2500+ Sales</h6>
                    </div>
                  </div>


                  <div data-aos="slide-left">
                    <div className="tes_box heg_cha">
                      <img src={Nikita} alt="" srcset="" />
                      <p>“Excellent guiding instructions. They are all great mentors at life & career</p>
                      <ul className="star">
                        <li><img src={star} alt="" /></li>
                        <li><img src={star} alt="" /></li>
                        <li><img src={star} alt="" /></li>
                        <li><img src={star} alt="" /></li>
                        <li><img src={star} alt="" /></li>
                      </ul>
                      <h2>Nikita Sharma</h2>
                      <h6>Content Writer</h6>
                    </div>
                  </div>
                </div>
              </div>



              {/* <p class='para-set'>
                “Best out of the best in the online learning field...”
              </p> */}
            </div>

            <div class='col-md-5 offset-md-1'>
              <h3 class='mb-3 mt-4'>Our highlighted students revealing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                donec molestie sit diam aliquam egestas erat tincidunt magna.
                Tincidunt et faucibus a curabitur sed at sagittis orci id. Odio
                nunc, purus a, ut integer. Ultricies orci nulla eu, libero
                ornare ipsum. Tincidunt erat pulvinar viverra pharetra.
              </p>

              <a data-aos="zoom-in" href='#' class='learn_more'>
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer loginPage={false} />
    </div>
  );
}

export default HomePage;
