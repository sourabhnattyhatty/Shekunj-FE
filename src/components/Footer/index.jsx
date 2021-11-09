import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom';
import ChangeLanguageButton from '../LanguageButton';
import { useTranslation } from 'react-i18next';

function Footer() {

    const {t} = useTranslation();

    return (
        <div className='footer'>
            <div className='container'>
                <div className='row footer_links'>
                    <div className='col-sm-2 col-md-2'>
                        <Link><p>{t('footer.links.col1.1')}</p></Link>
                        <Link><p>{t('footer.links.col1.2')}</p></Link>
                        <Link><p>{t('footer.links.col1.3')}</p></Link>
                        <Link><p>{t('footer.links.col1.4')}</p></Link>
                    </div>

                    <div className='col-sm-2 col-md-2'>
                        <Link><p>{t('footer.links.col2.1')}</p></Link>
                        <Link><p>{t('footer.links.col2.2')}</p></Link>
                        <Link><p>{t('footer.links.col2.3')}</p></Link>
                        <Link><p>{t('footer.links.col2.4')}</p></Link>
                    </div>

                    <div className='col-sm-2 col-md-2'>
                        <Link><p>{t('footer.links.col3.1')}</p></Link>
                        <Link><p>{t('footer.links.col3.2')}</p></Link>
                        <Link><p>{t('footer.links.col3.3')}</p></Link>
                    </div>

                    <div className='col-sm-6 col-md-6'>
                        <ChangeLanguageButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
