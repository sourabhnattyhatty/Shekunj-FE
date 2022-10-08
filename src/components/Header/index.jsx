import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Divider, Drawer, List, Menu, MenuItem } from "@mui/material";

import { getUserProfile, logOut, refreshPage } from "../../store/auth/action";
import { isAuthenticated } from "../../utils/utils";
import ChangeLanguageButton from "../LanguageButton";
import Logo from "../../assets/images/logo.svg";
import close from "../../assets/icons/x.png";

import "./index.scss";
import { routingConstants } from "../../utils/constants";

const Header = ({ page, subPage }) => {
  const { t } = useTranslation();
  const { isAuth, user } = useSelector((state) => state.authReducer);
  const { lan } = useSelector((state) => state.languageReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [showmenu, setShowmenu] = React.useState(false);

  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClick2 = (event) => {
  
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  useEffect(() => {
    dispatch(refreshPage());
    if (isAuthenticated()) {
      dispatch(getUserProfile());
    }
  }, [dispatch, lan]);

  const handleLogout = () => {
    dispatch(logOut(history));
    setAnchorEl(null);
  };

  const handleProfile = () => {
    history.push(routingConstants.MY_PROFILE);
    setAnchorEl(null);
  };
  const handleProgress = () => {
    history.push(routingConstants.MY_PROGESS);
    setAnchorEl(null);
  };

  const handleCertificate = () => {
    history.push(routingConstants.ALL_CERTIFICATE_PAGE);
    setAnchorEl(null);
  };

  const handleColleges = () => {
    history.push(routingConstants.TOP_COLLEGES);
    setAnchorEl1(null);
  };

  const handleSchools = () => {
    history.push(routingConstants.TOP_SCHOOLS);
    setAnchorEl1(null);
  };

  const handleExams = () => {
    history.push(routingConstants.GOVERNMENT_SCHEMES);
    setAnchorEl1(null);
  };

  const handleGuidance1 = () => {
    history.push(routingConstants.SUCCESS_CAREER_OPTION);
    setAnchorEl2(null);
  };

  const handleGuidance2 = () => {
    history.push(routingConstants.SUCCESS_CAREER_TEST);
    setAnchorEl2(null);
  };

  const handleGuidance3 = () => {
    history.push(routingConstants.GUIDANCE_BOOK);
    setAnchorEl2(null);
  };

  const handleMoreBlogs = () => {
    history.push(routingConstants.MORE_BLOG);
    setAnchorEl3(null);
  };

  const handleMoreEvent = () => {
    history.push(routingConstants.MORE_EVENT);
    setAnchorEl3(null);
  };

  const handleMoreMagazine = () => {
    history.push(routingConstants.MORE_MAGAZINE);
    setAnchorEl3(null);
  };


  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowmenu(!showmenu);
  };

  return (
    <div className='noselect'>
      <header className='other_head'>
        <div className='container'>
          <div className='topbar'>
            <div className='row'>
              <div className='col-md-3 col-7'>
                <div className='sign_in'>
                  <Link className='navbar-brand' to='/'>
                    <img src={Logo} alt='...' />
                  </Link>

                  <p>{t("headerComponent.other.1")}</p>
                </div>
              </div>

              <div className='col-md-9 col-5 pl-md-0 pl-lg-2 text-right'>
                <div className='top_bar_btn d-inline-flex'>
                  {isAuth ? (
                    <>
                      {user && user?.profile_pic ? (
                        <img
                          src={user?.profile_pic}
                          className='profile-img'
                          alt={user?.name || t("common.n/a")}
                        />
                      ) : (
                        <Avatar
                          className='ml-xl-3 ml-md-2'
                          style={{ cursor: "pointer" }}
                        />
                      )}
                      <span
                        style={{
                          lineHeight: "38px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                        id='basic-button'
                        aria-controls='basic-menu'
                        aria-haspopup='true'
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        {user?.name  || t("common.n/a")}&nbsp;
                        {user &&  user?.last_name}
                      </span>
                      <Menu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem
                          onClick={handleProfile}
                          className={subPage === "myProfile" && "active"}
                        >
                          {t("headerComponent.menuItem.1")}
                        </MenuItem>
                        <MenuItem
                          onClick={handleProgress}
                          className={subPage === "myProgress" && "active"}
                        >
                          {t("headerComponent.menuItem.2")}
                        </MenuItem>
                        <MenuItem
                          onClick={handleCertificate}
                          className={
                            subPage === "allCertificatePage" && "active"
                          }
                        >
                          {t("headerComponent.menuItem.3")}
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                          {t("headerComponent.menuItem.4")}
                        </MenuItem>
                      </Menu>
                    </>
                  ) : (
                    <Link
                      className='btn btn-bg-pink ml-xl-3 ml-md-2'
                      to={routingConstants.LOGIN}
                    >
                      {t("header.authButton")}
                    </Link>
                  )}

                  <div className='set_language d-inline-block ml-xl-3 ml-md-2'>
                    <ChangeLanguageButton />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='middle_nav_login'>
            <nav className='navbar navbar-expand-md '>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#collapsibleNavbar'
                onClick={toggleDrawer}
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <Drawer anchor="left" open={showmenu} className='toggleDrawer' onBackdropClick={toggleDrawer} >
                  <Divider />
                  <List>
                  <img src={close} alt='' style={{float:"right",marginRight:"10px"}} onClick={toggleDrawer}/><br/><br/>
                      <div >
                        <Link to='/about' style={{color:"#EC498A",fontSize:"20px",marginLeft:"25px", marginTop:"20px" }}>About</Link><br/>
                        <Link to='/courses' style={{color:"#EC498A",fontSize:"20px",marginLeft:"25px", marginTop:"20px"}} >Courses</Link><br/>
                        <button
                      className='nav-link guidence_button'
                      id='basic-button2'
                      aria-controls='basic-menu2'
                      aria-haspopup='true'
                      aria-expanded={open2 ? "true" : undefined}
                      onClick={handleClick2}
                    >
                     <span style={{color:"#EC498A",fontSize:"20px",marginLeft:"8px", }} >{t("header.heading.3")}</span>
                    </button>
                    <Menu
                      id='basic-menu2'
                      anchorEl={anchorEl2}
                      open={open2}
                      onClose={handleClose2}
                      MenuListProps={{
                        "aria-labelledby": "basic-button2",
                      }}
                    >
                      <MenuItem
                        onClick={handleGuidance1}
                        className={subPage === "careerOption" && "active"}
                      >
                        {t("headerComponent.menuItem.5")}
                      </MenuItem>
                      <MenuItem
                        onClick={handleGuidance2}
                        className={subPage === "careerTest" && "active"}
                      >
                        {t("headerComponent.menuItem.6")}
                      </MenuItem>
                      <MenuItem
                        onClick={handleGuidance3}
                        className={subPage === "bookCounsller" && "active"}
                      >
                        {t("headerComponent.menuItem.7")}
                      </MenuItem>
                    </Menu>
                      <a href='https://octahire.com/Resume_maker' style={{color:"#EC498A",fontSize:"20px",marginLeft:"25px", marginTop:"20px",textDecorationLine:"none"}}>Resume Builder</a><br/>
                      <button
                      className='nav-link guidence_button'
                      id='basic-button1'
                      aria-controls='basic-menu1'
                      aria-haspopup='true'
                      aria-expanded={open1 ? "true" : undefined}
                      onClick={handleClick1}
                    >
                     <span style={{color:"#EC498A",fontSize:"20px",marginLeft:"8px",textDecorationLine:"none" }}> {t("header.heading.5")}</span>
                    </button>
                    <Menu
                      id='basic-menu1'
                      anchorEl={anchorEl1}
                      open={open1}
                      onClose={handleClose1}
                      MenuListProps={{
                        "aria-labelledby": "basic-button1",
                      }}
                    >
                      <MenuItem
                        onClick={handleColleges}
                        className={subPage === "colleges" && "active"}
                      >
                        {t("headerComponent.menuItem.8")}
                      </MenuItem>
                      <MenuItem
                        onClick={handleSchools}
                        className={subPage === "schools" && "active"}
                      >
                        {t("headerComponent.menuItem.9")}
                      </MenuItem>
                      <MenuItem
                        onClick={handleExams}
                        className={subPage === "govExams" && "active"}
                      >
                        {t("headerComponent.menuItem.10")}
                      </MenuItem>
                    </Menu>
                        <a href='https://octahire.com/Home/candidate_register' style={{color:"#EC498A",fontSize:"20px",marginLeft:"25px", marginTop:"30px",textDecorationLine:"none"}} >Jobs</a><br/>
                        <a href='http://www.thehrnotes.com' style={{color:"#EC498A",fontSize:"20px",marginLeft:"25px", marginTop:"20px",textDecorationLine:"none"}} >Blogs</a><br/>
                        <Link to='/success-stories' style={{color:"#EC498A",fontSize:"20px",marginLeft:"23px", marginTop:"20px",textDecorationLine:"none"}} >Success story</Link><br/>
                      </div>
                  </List>
                  <Divider />
              </Drawer>
              <div className='collapse navbar-collapse' id='collapsibleNavbar'>
                <button
                  className='navbar-toggler close_set'
                  type='button'
                  data-toggle='collapse'
                  data-target='#collapsibleNavbar'
                >
                  <img src={close} alt='' />
                </button>
                <ul className='navbar-nav'>
                  <li
                    className={
                      page === "about" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className='nav-link' to='/about'>
                      {t("header.heading.1")}
                    </Link>
                  </li>
                  <li
                    className={
                      page === "courses" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link className='nav-link' to='/courses'>
                      {t("header.heading.2")}
                    </Link>
                  </li>
                  <li
                    className={
                      page === "guidance" ? "nav-item active" : "nav-item"
                    }
                  >
                    <button
                      className='nav-link guidence_button'
                      id='basic-button2'
                      aria-controls='basic-menu2'
                      aria-haspopup='true'
                      aria-expanded={open2 ? "true" : undefined}
                      onClick={handleClick2}
                    >
                      {t("header.heading.3")}
                    </button>
                    <Menu
                      id='basic-menu2'
                      anchorEl={anchorEl2}
                      open={open2}
                      onClose={handleClose2}
                      MenuListProps={{
                        "aria-labelledby": "basic-button2",
                      }}
                    >
                      <MenuItem
                        onClick={handleGuidance1}
                        className={subPage === "careerOption" && "active"}
                      >
                        {t("headerComponent.menuItem.5")}
                      </MenuItem>
                      <MenuItem
                        onClick={handleGuidance2}
                        className={subPage === "careerTest" && "active"}
                      >
                        {t("headerComponent.menuItem.6")}
                      </MenuItem>
                      <MenuItem
                        onClick={handleGuidance3}
                        className={subPage === "bookCounsller" && "active"}
                      >
                        {t("headerComponent.menuItem.7")}
                      </MenuItem>
                    </Menu>
                  </li>
                  <li
                    className={
                      page === "resume" ? "nav-item active" : "nav-item"
                    }
                  >
                    <a
                      className='nav-link'
                      rel='noreferrer'
                      href='https://octahire.com/Resume_maker'
                      target='_blank'
                    >
                      {t("header.heading.4")}
                    </a>
                  </li>
                  <li
                    className={
                      page === "career" ? "nav-item active" : "nav-item"
                    }
                  >
                    <button
                      className='nav-link guidence_button'
                      id='basic-button1'
                      aria-controls='basic-menu1'
                      aria-haspopup='true'
                      aria-expanded={open1 ? "true" : undefined}
                      onClick={handleClick1}
                    >
                      {t("header.heading.5")}
                    </button>
                    <Menu
                      id='basic-menu1'
                      anchorEl={anchorEl1}
                      open={open1}
                      onClose={handleClose1}
                      MenuListProps={{
                        "aria-labelledby": "basic-button1",
                      }}
                    >
                      <MenuItem
                        onClick={handleColleges}
                        className={subPage === "colleges" && "active"}
                      >
                        {t("headerComponent.menuItem.8")}
                      </MenuItem>
                      <MenuItem
                        onClick={handleSchools}
                        className={subPage === "schools" && "active"}
                      >
                        {t("headerComponent.menuItem.9")}
                      </MenuItem>
                      <MenuItem
                        onClick={handleExams}
                        className={subPage === "govExams" && "active"}
                      >
                        {t("headerComponent.menuItem.10")}
                      </MenuItem>
                    </Menu>
                  </li>
                  <li
                    className={page === "jobs" ? "nav-item active" : "nav-item"}
                  >
                    <a
                      className='nav-link'
                      rel='noreferrer'
                      target='_blank'
                      href='https://octahire.com/Home/candidate_register'
                    >
                      {t("header.heading.6")}
                    </a>
                  </li>
{/* 
                  <li
                    className={
                      page === "more" ? "nav-item active" : "nav-item"
                    }
                  > */}
                    <li
                    className={page === "Blog" ? "nav-item active" : "nav-item"}
                  >
                    <a
                      className='nav-link'
                      rel='noreferrer'
                      target='_blank'
                      href={routingConstants.BLOGS}
                    >
                      {t("header.heading.7")}
                    </a>
                    </li>
                     {/* <button
                      className='nav-link guidence_button'
                      id='basic-button3'
                      aria-controls='basic-menu3'
                      aria-haspopup='true'
                      aria-expanded={open3 ? "true" : undefined}
                      onClick={handleClick3}
                    >
                      {t("header.heading.7")}
                    </button>
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
                      <MenuItem
                        onClick={handleMoreMagazine}
                        className={subPage === "moreMagazine" && "active"}
                      >
                        {t("headerComponent.menuItem.12")}
                      </MenuItem>
                      <MenuItem
                        onClick={handleMoreBlogs}
                        className={subPage === "moreblog" && "active"}
                      >
                        {t("headerComponent.menuItem.13")}
                      </MenuItem>
                    </Menu>
                  </li> */}

                  <li
                    className={
                      page === "story" ? "nav-item active" : "nav-item"
                    }
                  >
                    <Link
                      className='nav-link'
                      to={routingConstants.SUCCESS_STORIES}
                    >
                      {t("header.heading.8")}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
