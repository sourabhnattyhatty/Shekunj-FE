import React from "react";
import { Link } from "react-router-dom";

import LoginTabs from "../LoginTabs";

import Google from "../../assets/images/login/google.png";
import Or from "../../assets/images/login/or.png";



const LoginForm = () => {
  
  return (
    <>
      <div className='login_form'>
        <h2>Login on Shekunj</h2>
        <p>
          Don't have an account?{" "}
          <Link to='/signup' className='register'>
            {" "}
            REGISTER HERE{" "}
          </Link>
        </p>

        <LoginTabs />

        <div className='text-center'>
          <p className='policy_para'>
            Please read our <a href='#!'> Privacy Notice </a> ,{" "}
            <a href='#!'> Cookie Notice </a> and <a href='#!'> Legal terms </a>
            to understand how we use your personal data.
          </p>
        </div>

        <div className='text-center'>
          <div className='mt-3 mb-3'>
            <img src={Or} className='orimg' alt='...' />
          </div>
        </div>

        <button className='btn btn-google'>
          <img src={Google} alt='...' className='mr-2' /> Register with Google
        </button>
      </div>
    </>
  );
};

export default LoginForm;
