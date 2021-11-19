import React from 'react'
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const index = () => {
    return (
        <div>
        <Header loginPage={false} />

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="about_ban">
                        <h2>Empowering Women
                            to Empower the Next
                            Generation</h2>
                    </div>
                </div>


                
                <div className="col-md-6"></div>
            </div>
        </div>










      <Footer loginPage={false} />

        </div>
    )
}

export default index
