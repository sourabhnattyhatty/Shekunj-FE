import React from "react";
import { Link } from "react-router-dom";

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

        <div className='text-center'>
          <button className='btn btn-google'>
            <img src={Google} alt='Image' className='mr-2' /> Register with
            Google
          </button>

          <div className='mt-3 mb-3'>
            <img src={Or} className='orimg' alt='Image' />
          </div>
        </div>

        <form>
          <div className='form-group'>
            <label>E-mail address</label>
            <input type='email' className='form-control' />
          </div>

          <div className='form-group'>
            <label>Password</label>
            <input type='password' className='form-control' />
          </div>

          <button type='submit' className='btn btn_login w-100 mt-3'>
            Login
          </button>
        </form>

        <div className='text-center'>
          <p className='policy_para mt-4'>
            Please read our <a href='#'> Privacy Notice </a> ,{" "}
            <a href='#'> Cookie Notice </a> and <a href='#'> Legal terms </a>
            to understand how we use your personal data.
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
