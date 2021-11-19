import React from 'react'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import search from '../../assets/images/Career/search.png'
import Choose1 from "../../assets/images/Career/Choose1.png"
import Choose2 from "../../assets/images/Career/Choose2.png"
import Choose3 from "../../assets/images/Career/Choose3.png"
import Choose4 from "../../assets/images/Career/Choose4.png"
import Choose5 from "../../assets/images/Career/Choose5.png"
import Choose6 from "../../assets/images/Career/Choose6.png"
import './index.scss';

const index = () => {
    return (
        <div>
            <Header loginPage={true} />



            <section className="Car_Ban">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-6">
                            <div className="Car_con">
                                <h2>Start the Journey of Education</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, in vitae in metus, mattis porttitor euismod ac tincidunt. Ac nunc felis pellentesque a aliquam.</p>
                                <br />
                                <div class="pseudo-search">
                                    <input type="text" placeholder="Search..." autofocus="" required="" />


                                    <button class="fa fa-search" type="submit">
                                        <img src={search} alt="" srcset="" />
                                    </button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="choose_ses">
                <div className="container">
                    <h2>Choose a Session</h2>
                    <div className="row_box">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="choose_box">
                                    <img src={Choose1} alt="" />
                                    <div className="choose_con">
                                        <h3>Resume Writing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sit urna amet ipsum ornare urna. Cras viverra orci eros, consequat purus dui.</p>
                                        <a data-aos="zoom-in" href="#!" class="learn_more aos-init aos-animate">Learn more</a>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="choose_box">
                                    <img src={Choose2} alt="" />
                                    <div className="choose_con">
                                        <h3>Resume Writing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sit urna amet ipsum ornare urna. Cras viverra orci eros, consequat purus dui.</p>
                                        <a data-aos="zoom-in" href="#!" class="learn_more aos-init aos-animate">Learn more</a>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="choose_box">
                                    <img src={Choose3} alt="" />
                                    <div className="choose_con">
                                        <h3>Resume Writing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sit urna amet ipsum ornare urna. Cras viverra orci eros, consequat purus dui.</p>
                                        <a data-aos="zoom-in" href="#!" class="learn_more aos-init aos-animate">Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row_box">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="choose_box">
                                    <img src={Choose4} alt="" />
                                    <div className="choose_con">
                                        <h3>Resume Writing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sit urna amet ipsum ornare urna. Cras viverra orci eros, consequat purus dui.</p>
                                        <a data-aos="zoom-in" href="#!" class="learn_more aos-init aos-animate">Learn more</a>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="choose_box">
                                    <img src={Choose5} alt="" />
                                    <div className="choose_con">
                                        <h3>Resume Writing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sit urna amet ipsum ornare urna. Cras viverra orci eros, consequat purus dui.</p>
                                        <a data-aos="zoom-in" href="#!" class="learn_more aos-init aos-animate">Learn more</a>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="choose_box">
                                    <img src={Choose6} alt="" />
                                    <div className="choose_con">
                                        <h3>Resume Writing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sit urna amet ipsum ornare urna. Cras viverra orci eros, consequat purus dui.</p>
                                        <a data-aos="zoom-in" href="#!" class="learn_more aos-init aos-animate">Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>







            <Footer loginPage={false} />

        </div>
    )
}

export default index
