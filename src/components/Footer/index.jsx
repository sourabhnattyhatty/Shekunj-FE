import React from 'react'
import './index.scss'
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row footer_links'>
                    <div className='col-sm-2 col-md-2'>
                        <Link><p>Teach on Shekunj</p></Link>
                        <Link><p>Get the app</p></Link>
                        <Link><p>About us</p></Link>
                        <Link><p>Contact us</p></Link>
                    </div>

                    <div className='col-sm-2 col-md-2'>
                        <Link><p>Careers</p></Link>
                        <Link><p>Blog</p></Link>
                        <Link><p>Help and Support</p></Link>
                        <Link><p>Affliatate</p></Link>
                    </div>

                    <div className='col-sm-2 col-md-2'>
                        <Link><p>Terms</p></Link>
                        <Link><p>Privacy Policy</p></Link>
                        <Link><p>Sitemap</p></Link>
                    </div>

                    <div className='col-sm-6 col-md-6'>
                        <button className='language_button'><LanguageIcon className='language_icon'/>English</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
