import React from 'react'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTop from '../../components/ScrollToTop'
import one from '../../assets/images/Courses/01.png'
import two from '../../assets/images/Courses/02.png'
import three from '../../assets/images/Courses/03.png'
import img1 from '../../assets/images/Courses/img1.png'
import img2 from '../../assets/images/Courses/img2.png'
import img3 from '../../assets/images/Courses/img3.png'
import Search from "../../assets/icons/search.png";
import Profile from '../../assets/images/testimonial/1.png'
import level from "../../assets/images/level.png";
import list from "../../assets/images/list.png";
import star from "../../assets/images/Star 2.png";
import timer from "../../assets/images/timer.png";

import './index.scss'

const Index = (props) => {
    return (
        <div>
            <Header loginPage={true} page="courses" />
            <section className="Cors_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="cors_con">
                                <h2>Find your courses & make sure goal.</h2>
                                <div className="cour_box">
                                    <ul>
                                        <li><img src={one} alt="" srcset="" /></li>
                                        <li><img src={two} alt="" srcset="" /></li>
                                        <li><img src={three} alt="" srcset="" /></li>
                                    </ul>
                                    <div className="rig_ul">
                                        <ul className="ulcont">
                                            <li><img src={img1} alt="" /></li>
                                            <li> LEARN AT YOUR OWN PACE</li>
                                        </ul>

                                        <ul className="ulcont">
                                            <li><img src={img2} alt="" /></li>
                                            <li> JOIN A COMMUNITY <br />
                                                OF professionals</li>
                                        </ul>

                                        <ul className="ulcont">
                                            <li><img src={img3} alt="" /></li>
                                            <li> Flexible PAYMENT PLANS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="Srch_sec">
                <div className="container">
                    <h2>Search Courses and Programs</h2>
                    <div className="Serc_type">
                        <div className="inp_ser">
                            <img src={Search} alt='...' />
                            <input type="search" name="" id="" placeholder="What do you want to learn?" />
                        </div>
                        <button className="btn btn-info">Search</button>
                    </div>
                    

                    <h4>OUR COURSES</h4>
                    <h3>Study top quality & advanced course content in Hindi</h3>



                </div>
            </section>

            <ScrollToTop />

            <Footer loginPage={false} />
        </div>
    )
}

export default Index
