import React from 'react'
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const index = () => {
    return (
        <div>
            <Header loginPage={false} />
            <section className="about_ban">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about_Con">
                                <h2>Empowering Women
                                    to Empower the Next
                                    Generation</h2>
                                    <p>SheKunj’s cutting-edge learning and examination platform has been designed to equip modern-age females with in-demand tech and non-tech skills. By providing the right information to women, we help them get placed, develop their personalities, and explore career pathways.</p>
                            </div>
                        </div>



                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>










            <Footer loginPage={false} />

        </div>
    )
}

export default index
