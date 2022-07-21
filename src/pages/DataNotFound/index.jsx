import React from 'react'
import { Link } from 'react-router-dom';
import { AccordionComponent, Footer, Header, SEO } from "../../components";


const DataNotFound = () => {
    return (
        <div>
            <SEO title='Sheकुंज - Career' />
            <Header loginPage={true} page='career' subPage='colleges' />
            <div className="page-wrap d-flex flex-row align-items-center pt-5 pb-5" style={{minHeight: '50vh'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <span className="display-3 d-block pb-5">Data not found</span>
                            <Link className='btn btn-link' to='/'>
                                <button type="button" class="btn btn-warning">Back to Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer loginPage={false} />
        </div>

    )
}

export default DataNotFound;
