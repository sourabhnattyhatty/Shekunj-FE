import React,{useEffect} from 'react'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './index.scss';
import img1 from '../../assets/images/About/img1.png'
import Nikita from '../../assets/images/Nikita-Sharma.png';
import star from '../../assets/images/Star 2.png';
import "../HomePage/index.scss";
import Aos from 'aos';
import "./index.scss";
import 'animate.css';
import 'aos/dist/aos.css'

const Index = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return (
        <div>
            <Header loginPage={false} />
            <section className="about_ban">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="about_Con">
                                <h2>Empowering Women
                                    to Empower the Next
                                    Generation</h2>
                                <p>SheKunj’s cutting-edge learning and examination platform has been designed to equip modern-age females with in-demand tech and non-tech skills. By providing the right information to women, we help them get placed, develop their personalities, and explore career pathways.</p>
                            </div>
                        </div>



                        {/* <div className="col-md-6"></div> */}
                    </div>



                </div>
            </section>

            <section className="ban_sec2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img1} alt="" srcset="" />
                        </div>



                        <div className="col-md-6">
                            <div className="sec2_con">
                                <p>   Armed with the best pedagogy experts, learning modules, and certificate courses, SheKunj is determined to impart practical training and educate women. With the right blend of tech and non-tech skills, our drive is to make a community of motivated, highly-skilled and knowledgeable women who build inspiring careers and lead with full gusto.</p>

                                <p>We not only thrive on imparting the right skills, but we are also persistent in our approach to develop their personality beyond professional realms such that they conquer every battle of their life with double the vigor and courage. With our tribe of determined, dependable, and proficient women, our sole focus is to uplift women and turn their dreams into a reality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about_testim">
                <div className="container">
                    <div className="row">
                        <div className='col-md-6'>

                            <div className="row">
                                <div className="col-md-6">
                                    <div data-aos="slide-right">
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
                                    </div>

                                    <div className="tes_box2" data-aos="slide-up">
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




                        </div>


                        <div className='col-md-6'>
                            <div className="our_his">
                                <h2>Our highlighted students revealing</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae donec molestie sit diam aliquam egestas erat tincidunt magna. Tincidunt et faucibus a curabitur sed at sagittis orci id. Odio nunc, purus a, ut integer. Ultricies orci nulla eu, libero ornare ipsum. Tincidunt erat pulvinar viverra pharetra.</p>
                                <a data-aos="zoom-in" href="#!" class="learn_more aos-init">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>










            <Footer loginPage={false} />

        </div>
    )
}

export default Index
