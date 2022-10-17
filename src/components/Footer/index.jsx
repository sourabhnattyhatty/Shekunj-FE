import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/whitelogo.svg";
import LogoBlack from "../../assets/images/whitelogo.svg";
import ChangeLanguageButton from "../LanguageButton";
import { routingConstants } from "../../utils/constants";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  adsList
} from "../../store/ads";

const Footer = ({ loginPage }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [adsFooter1, setAdsFooter1] = useState([]);
  const [adsFooter2, setAdsFooter2] = useState([]);
  const [image,setImage]=useState("NA")
  const [adds,setAdds] = useState([]);

	useEffect(() => {
	
      navigator.geolocation.getCurrentPosition(async function (
        position,
        values,
      ) {
        
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        let params = {
          latitude: latitude.toString(),
          longitude: longitude.toString(),
        };
        axios.get(`/private_adds/private_add?latitude=${latitude}&longitude=${longitude}`)
        .then((response) => {
          
          if(response.data.results.length > 0)
         
          {
           let filterArray = response.data.results.filter((item,index)=>{
              return item.image_type == "footer_1"
            })
            let findImage = filterArray.length>0 ? filterArray[0].image : "NA"
            setImage(findImage)
            setAdsFooter1(filterArray)
              }
        });
      })
      dispatch(adsList());
	}, [])

  // useEffect(() => {
	// 	axios.get('/private_adds/private_add')
	// 		.then((response) => {
				
  //       if(response.data.results.length > 0)
       
  //       {
  //        let filterArray = response.data.results.filter((item,index)=>{
  //           return item.image_type == "footer_1"
  //         })
  //         let findImage = filterArray.length>0 ? filterArray[0].image : "NA"
  //         setImage(findImage)
  //         setAdsFooter1(filterArray)
  //           }
	// 		});
      
	// }, [])

  // useEffect(() => {
	// 	axios.get('/private_adds/private_add?image_type=footer_2')
	// 		.then((response) => {
	// 			setAdsFooter2(response.data.results);
	// 		});
	// }, [])

  useEffect(() => {
		axios.get('/private_adds/private_add')
			.then((response) => {
				
        if(response.data.results.length > 0)
       
        {
         let filterArray = response.data.results.filter((item,index)=>{
            return item.image_type == "footer_2"
          })
          let findImage = filterArray.length>0 ? filterArray[0].image : "NA"
          setImage(findImage)
          setAdsFooter2(filterArray)
            }
			});
      
	}, [])

  const addEmail =(email)=>{
       console.log("addEmail",email)
          axios.post('/private_adds/click_add/'
      ,{
        // add_email:`${adds[0]?.add_email}`
        add_email:email
      }
      )
        .then((response) => {
          // setAdds(response.data.results);
          console.log("addEmailresponse",response)
        });
      
  }

    // useEffect(() => {
    //   axios.post('/private_adds/click_add/'
    //   ,{
    //     add_email:`${adds[0]?.add_email}`
    //     // add_email:{add_email}
    //   }
    //   )
    //     .then((response) => {
    //       setAdds(response.data.results);
    //     });
    // }, [])
  
  
  return (
    <div className="noselect">

      {/* google add */}
      <section>
        <div className='container'>
          <div className='row'>
            {adsFooter1.length > 0 && 
            <div  className='col-md-12 ads_footer_cover' onClick={()=>addEmail(adsFooter1[0]?.add_email)}>
              
            <a href={adsFooter1[0]?.url_adds}  target='_blank'>
              
            <img src={adsFooter1[0]?.image} alt='Image' className='google_ads_footer' />
            </a>

            {console.log("footer-image",adsFooter1[0]?.image)}

            <a href={adds[0]?.add_email}  target='_blank'>
            {/* <img src={adsFooter1[0]?.image} alt='Image' className='google_ads_footer' /> */}
            </a>
       
            </div>
}
          </div>
        </div>
      </section>

      <footer className={loginPage ? "footer_login" : "footer_other"}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-4'>
              <ul className='p-0'>
                <li>
                  <Link to={routingConstants.ABOUT}>
                    {t("footer.links.col1.3")}
                  </Link>
                </li>
                <li>
                  <Link to={routingConstants.SUCCESS_STORIES}>
                    {t("header.heading.8")}
                  </Link>
                </li>
                <li>
                  <a
                    href={routingConstants.BLOGS}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {t("header.heading.7")}
                  </a>
                </li>
                <li>
                  <Link to={routingConstants.CONTACT_US}>
                    {t("footer.links.col1.4")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className='col-md-9 col-sm-12'>
              <div className='row'>
                <div className='col-md-3 col-3'>
                  <ul className='p-0'>
                    <li>
                      <Link to={routingConstants.PRIVACY_POLICY}>
                        {t("footer.links.col3.1")}
                      </Link>
                    </li>
                    <li>
                      {/* <Link to={routingConstants.HELP_AND_SUPPORT}>{t("footer.links.col2.3")}</Link> */}
                      <Link to={routingConstants.CONTACT_US}>{t("footer.links.col2.3")}</Link>
                    </li>
                    <li>
                    <div className='set_language'>
                    <ChangeLanguageButton />
                  </div>
                    </li>
                  </ul>
                </div>

                <div className='col-md-9 col-sm-12'>
                  <div className='row'>
                    <div className='col-md-12'>
                      {adsFooter2.length > 0 && 
                      // <div className="footer_ads_bottom_parent">
                         <div  className="footer_ads_bottom_parent" onClick={()=>addEmail(adsFooter2[0]?.add_email)}>
                    <a href={adsFooter2[0]?.url_adds}  target='_blank'>
                    <img src={adsFooter2[0]?.image} alt='Image' className='footer_ads_bottom' />
                    </a>
                    {/* <a href={adds[0]?.add_email}  target='_blank'>
            <img src={adsFooter1[0]?.image} alt='Image' className='google_ads_footer' />
            </a> */}
             {/* <a href={adds[0]?.add_email}  target='_blank'>
             <img src={adsFooter1[0]?.image} alt='Image' className='google_ads_footer' />
             </a> */}
                    </div>
          }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bottom-footer mt-3'>
            <div className='row'>
              <div className='col-lg-9 col-md-8 col-6 text-left'>
                <Link className='logo' to='/'>
                  <img src={loginPage ? Logo : LogoBlack} alt='logo' />
                </Link>
              </div>

              <div className='col-lg-3 col-md-4 col-6 text-left'>
                <p className='mt-lg-4 mt-md-3'>&copy; 2021 SheKunj.Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
