import React, { useEffect } from "react";
import Slider from "react-slick";
import Aos from 'aos';

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";


import Resume from "../../assets/images/resume.png";
import Girl from "../../assets/images/job1.png";
import Community from "../../assets/images/community.png";
import Nikita from '../../assets/images/Nikita-Sharma.png';
import star from '../../assets/images/Star 2.png';

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./index.scss";
import 'animate.css';
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
    Aos.init({ duration : 2000 });
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
                    <h4 className='mt-5 pt-md-5 mb-3'>
                      Anytime, anywhere, Learn on your schedule from any device
                    </h4>
                    <p className='mb-4' data-aos='fade-left'>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In sed fermentum massa semper mauris volutpat dictum
                      fames. Amet hendrerit at duis porttitor ipsum.{" "}
                    </p>
                    <a href='#!' className='banner_btn'>
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
                    <h4 className='mt-5 pt-md-5 mb-3'>
                      Anytime, anywhere, Learn on your schedule from any device
                    </h4>
                    <p className='mb-4' data-aos='fade-left'>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In sed fermentum massa semper mauris volutpat dictum
                      fames. Amet hendrerit at duis porttitor ipsum.{" "}
                    </p>
                    <a href='#!' className='banner_btn'>
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
      <Carousel items={5} details={true} title1="Our" title2="Most Popular Courses"/>
      

      {/* resume */}
      <section className='resume same_padding mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7' data-aos='slide-right'>
              <h4>
                Design your resume in real time and download a print-reday PDF.
              </h4>
              <button className='btn btn-resume' data-aos="zoom-in">DESIGN MY RESUME</button>
            </div>
            

            <div className='resumeimg' data-aos='slide-left'>
              <img src={Resume} alt='...' />
            </div>
          </div>
        </div>
      </section>

      {/* Slider 2 */}
      <Carousel items={5} details={false} title1="challenging" title2="online tests"/>

      {/* Job opportunity */}
      <section className='job-opprtunity same_padding mt-5' data-aos='slide-right'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10 col-md-11'>
              <div className='job-opprtunity-bg'>
                <div className='row'>
                  <div className='col-md-8'>
                    <h3 data-aos='slide-right'>Grab job oppotunities...</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Rutrum sapien nunc sit egestas amet magnis enim.
                      Suspendisse vulputate ut nunc lorem mi ut lacus. Felis
                      vitae vel.
                    </p>
                    <button data-aos="zoom-in" className='btn btn-job'>
                      view all job oppotunities
                    </button>
                  </div>

                  <div className='jobimg'>
                    <img src={Girl} alt='...' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Carousel items={5} details={true} title1="Our" title2="Most Popular Courses"/>


      {/* career development */}
      <section className='career_community same_padding mt-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-11'>
              <h3 data-aos="zoom-in">Shekunj Career Development Community</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum
                sapien nunc sit egestas amet magnis enim. Suspendisse vulputate
                ut nunc lorem mi ut lacus. Felis vitae vel.
              </p>

              <div className='community-img mt-5'>
                <img data-aos='slide-up' src={Community} alt='...' />
              </div>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-md-4 text-center mt-5'>
              <button className='btn btn-start-course' data-aos="zoom-in">Start Course</button>
            </div>
          </div>
        </div>
      </section>

      {/* certificate */}
      <section className='certificate same_padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 offset-md-6 offset-lg-6 offset-xl-7'>
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
      <section className='highlight_student same_padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>

              <div className="row">
                <div className="col-md-6">
                <div className="tes_box tes-before">
                <img src={Nikita} alt="" />
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

              <div className="tes_box2">
                <h2>“Best out of the best in the online learning field...”</h2>
              </div>
                </div>



                <div className="col-md-6">
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


                <div className="tes_box heg_cha">
                <img src={Nikita} alt="" />
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

            <div className='col-md-5 offset-md-1'>
              <h3 className='mb-3 mt-4' data-aos='slide-left'>Our highlighted students revealing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                donec molestie sit diam aliquam egestas erat tincidunt magna.
                Tincidunt et faucibus a curabitur sed at sagittis orci id. Odio
                nunc, purus a, ut integer. Ultricies orci nulla eu, libero
                ornare ipsum. Tincidunt erat pulvinar viverra pharetra.
              </p>

              <a data-aos="zoom-in" href='#!' className='learn_more'>
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
