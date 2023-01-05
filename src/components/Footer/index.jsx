import React from "react";
import "./index.scss";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/whitelogo.svg";
import LogoBlack from "../../assets/images/whitelogo.svg";
// import twitter from "../../assets/images/twitter.jpeg";
import twitter1 from "../../assets/images/twitter1.png";
import facebook from "../../assets/images/facebook.png";
import youTube from "../../assets/images/youTube.png";
import linkedinlogo from "../../assets/images/linkedinlogo.png";
import instagram from "../../assets/images/instagram.png";
import ChangeLanguageButton from "../LanguageButton";
import { routingConstants } from "../../utils/constants";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { adsList } from "../../store/ads";
import {
  Avatar,
  Divider,
  Drawer,
  List,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
const Footer = ({ loginPage, subPage }) => {
  const { t } = useTranslation();
  const history = useHistory()
  const dispatch = useDispatch();
  const [adsFooter1, setAdsFooter1] = useState([]);
  const [adsFooter2, setAdsFooter2] = useState([]);
  const [image, setImage] = useState("NA");
  const [adds, setAdds] = useState([]);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>code below>>>>>>>>>>>>>>>>>>>>>>>>>>

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(async function (position, values) {
  //     const latitude = position.coords.latitude;
  //     const longitude = position.coords.longitude;

  //     let params = {
  //       latitude: latitude.toString(),
  //       longitude: longitude.toString(),
  //     };
  //     axios
  //       .get(
  //         `/private_adds/private_add?latitude=${latitude}&longitude=${longitude}`,
  //       )
  //       .then((response) => {
  //         if (response.data.results.length > 0) {
  //           let filterArray = response.data.results.filter((item, index) => {
  //             return  item.image_type == "footer_1"||item.image_type == "footer_1";
  //           });
  //           console.log('asdjsdss',filterArray[0])
  //             if (filterArray[0].image_type == "footer_1") {
  //               let findImage =
  //             filterArray.length > 0 ? filterArray[0].image : "NA";
  //             setImage(findImage);
  //             setAdsFooter1(filterArray);
  //               }else if(filterArray[0].image_type == "footer_2"){
  //                 let findImage =
  //                 filterArray.length > 0 ? filterArray[0].image : "NA";
  //                 setImage(findImage);
  //                 setAdsFooter2(filterArray);
  //               }
  //             }
  //           })
  //       .catch((error) => {
  //         // setMessage("No data found");
  //         console.log(error);
  //     })
  //   });
  //   dispatch(adsList());
  // }, [dispatch]);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>latest code below>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  useEffect(() => {
    dispatch(adsList());
    navigator.geolocation.getCurrentPosition(
      async function (position, values) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        let params = {
          latitude: latitude.toString(),
          longitude: longitude.toString(),
        };
        axios
          .get(
            `/private_adds/private_add?latitude=${latitude}&longitude=${longitude}`,
          )
          .then((response) => {
            if (response && response.data.results.length > 0) {
              let filterArray1 = response.data.results.filter((item, index) => {
                return item.image_type == "footer_1";
              });
              setAdsFooter1(filterArray1);
              // console.log("filterArray1footer_1",filterArray1)

              let filterArray2 = response.data.results.filter((item, index) => {
                return item.image_type == "footer_2";
              });
              setAdsFooter2(filterArray2);
            }
          });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
        // alert("Your location is blocked")
        axios.get(`/private_adds/private_add`).then((response) => {
          if (response && response.data.results.length > 0) {
            let filterArray1 = response.data.results.filter((item, index) => {
              return item.image_type == "footer_1";
            });
            setAdsFooter1(filterArray1);
            // console.log("filterArray1coursebox",filterArray1)
            let filterArray2 = response.data.results.filter((item, index) => {
              return item.image_type == "footer_2";
            });
            setAdsFooter2(filterArray2);
          }
        });
      },
    );
  }, []);

  const addEmail = (email) => {
    navigator.geolocation.getCurrentPosition(async function (position, values) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      let params = {
        latitude: latitude.toString(),
        longitude: longitude.toString(),
      };
      axios
        .post("/private_adds/click_add/", {
          // add_email:`${adds[0]?.add_email}`
          add_email: email,
          latitude: params.latitude.toString(),
          longitude: params.longitude.toString(),
        })
        .then((response) => {
          // setAdds(response.data.results);
          console.log("addEmailresponse", response);
        })
        .catch((error) => {
          // setMessage("No data found");
          console.log(error);
        });
    });
  };

  const handleMoreEvent = () => {
    history.push(routingConstants.MORE_EVENT);
    setAnchorEl3(null);
  };

  // const handleMoreMagazine = () => {
  //   history.push(routingConstants.MORE_MAGAZINE);
  //   setAnchorEl3(null);
  // };

  const handleMoreFAQ = () => {
    history.push(routingConstants.FAQ);
    setAnchorEl3(null);
  };

  const handleMoreBlogs = () => {
    history.push(routingConstants.MORE_BLOG);
    setAnchorEl3(null);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  return (
    <div className='noselect'>
      {/* google add */}
      <section>
        <div className='container'>
          <div className='row'>
            {adsFooter1.length > 0 && (
              <div
                className='col-md-12 ads_footer_cover'
                onClick={() => addEmail(adsFooter1[0]?.add_email)}
              >
                <a href={adsFooter1[0]?.url_adds} target='_blank'>
                  <img
                    src={adsFooter1[0]?.image}
                    alt='Image'
                    className='google_ads_footer'
                  />
                </a>
                <a href={adds[0]?.add_email} target='_blank'>
                  {/* <img src={adsFooter1[0]?.image} alt='Image' className='google_ads_footer' /> */}
                </a>
              </div>
            )}
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
                    // href={routingConstants.BLOGS}
                    target='_blank'
                    rel='noreferrer'
                    id='basic-button3'
                    aria-controls='basic-menu3'
                    aria-haspopup='true'
                    aria-expanded={open3 ? "true" : undefined}
                    onClick={handleClick3}
                    style={{ color: 'white', cursor: 'pointer' }}
                  >
                    {t("header.heading.7")}
                  </a>
                  <Menu
                    id='basic-menu3'
                    anchorEl={anchorEl3}
                    open={open3}
                    onClose={handleClose3}
                    MenuListProps={{
                      "aria-labelledby": "basic-button3",
                    }}
                  >
                    <MenuItem
                      onClick={handleMoreEvent}
                      className={subPage === "moreEvent" && "active"}
                    >
                      {t("headerComponent.menuItem.11")}
                    </MenuItem>
                    {/* <MenuItem
                        onClick={handleMoreMagazine}
                        className={subPage === "moreMagazine" && "active"}
                      >
                        {t("headerComponent.menuItem.12")}
                      </MenuItem> */}
                    <MenuItem
                      onClick={handleMoreBlogs}
                      className={subPage === "moreblog" && "active"}
                    >
                      {t("headerComponent.menuItem.13")}
                    </MenuItem>
                    {/* <MenuItem
                        onClick={handleMoreMagazine}
                        className={subPage === "moreMagazine" && "active"}
                      >
                        Magazine
                      </MenuItem>  */}
                    <MenuItem
                      onClick={handleMoreFAQ}
                      className={subPage === "moreFAQ" && "active"}
                    >
                      {/* {t("headerComponent.menuItem.14")} */}
                      FAQ
                    </MenuItem>
                  </Menu>
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
                      <Link to={routingConstants.CONTACT_US}>
                        {t("footer.links.col2.3")}
                      </Link>
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
                      {adsFooter2.length > 0 && (
                        // {/* // <div className="footer_ads_bottom_parent"> */}

                        <div
                          className='footer_ads_bottom_parent'
                          onClick={() => addEmail(adsFooter2[0]?.add_email)}
                        >
                          <a href={adsFooter2[0]?.url_adds} target='_blank'>
                            <img
                              src={adsFooter2[0]?.image}
                              alt='Image'
                              className='footer_ads_bottom'
                            />
                          </a>
                          <a href={adds[0]?.add_email} target='_blank'></a>
                        </div>
                      )}
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
              <div className='social-media'>
                <div class='social area'>
                  <h2>Stay connected</h2>
                  <p class='sub-head'>
                    Join us on social media and stay in the loop.
                  </p>
                  <div class='social-links clearfix'>
                    <a
                      href='https://www.facebook.com/Shekunj-105073495386436'
                      rel='nofollow'
                      target='_blank'
                    >
                      <img
                        src={facebook}
                      //  style={{height:"50px",width:"55px"}}
                      ></img>{" "}
                    </a>
                    <a
                      href='https://twitter.com/SheKunj'
                      rel='nofollow'
                      target='_blank'
                    >
                      <img
                        src={twitter1}
                      // style={{height:"50px",width:"55px"}}
                      ></img>{" "}
                    </a>
                    <a
                      class='pinterest'
                      href='https://in.linkedin.com/showcase/shekunjedu'
                      rel='nofollow'
                      target='_blank'
                    >
                      <img
                        src={linkedinlogo}
                      //  style={{height:"50px",width:"55px"}}
                      ></img>{" "}
                    </a>
                    <a
                      href='https://www.instagram.com/shekunj_edu/'
                      rel='nofollow'
                      target='_blank'
                    >
                      <img
                        src={instagram}
                      // style={{height:"50px",width:"55px"}}
                      ></img>{" "}
                    </a>
                    <a
                      href='https://www.youtube.com/@shekunj643'
                      rel='nofollow'
                      target='_blank'
                    >
                      <img
                        src={youTube}
                      // style={{height:"50px",width:"55px"}}
                      ></img>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
};

export default Footer;
