import React, { useState } from "react";
import { Link } from "react-router-dom";
import Practical from "../../assets/images/login/1.png";
import Work from "../../assets/images/login/2.png";
import Hinglish from "../../assets/images/login/3.png";

import LoginForm from "../LoginForm";

import "./index.scss";

const AuthContent = () => {
  return (
    <div className=''>
      <div className='login_main mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='login_content'>
                <h1>Register for Easy & Real Learning to make you Job Ready</h1>

                <div className='mt-4'>
                  <div className='login_detail mb-3'>
                    <div className='row'>
                      <div className='col-md-2'>
                        <div className='login-content-img'>
                          <img src={Practical} alt='Image' />
                        </div>
                      </div>

                      <div className='col-md-10'>
                        <div className='login-content-right'>
                          <h5 className='mt-1'>Practical Focused Approach</h5>
                          <p>
                            We believe Why is more important than How. You may
                            know how to use a tool but you will only learn why
                            it will work for the end-users when you engage in
                            practicals under the guidance of mentors who have
                            done 100s of projects for their clients.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='login_detail mb-3'>
                    <div className='row'>
                      <div className='col-md-2'>
                        <div className='login-content-img'>
                          <img src={Work} alt='Image' />
                        </div>
                      </div>

                      <div className='col-md-10'>
                        <div className='login-content-right'>
                          <h5 className='mt-1'>Get real work experience</h5>
                          <p>
                            Our Master’s Program does not complete without an
                            Internship because we want you to learn how Industry
                            works.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='login_detail'>
                    <div className='row'>
                      <div className='col-md-2'>
                        <div className='login-content-img'>
                          <img src={Hinglish} alt='Image' />
                        </div>
                      </div>

                      <div className='col-md-10'>
                        <div className='login-content-right'>
                          <h5 className='mt-1'>In Hinglish</h5>
                          <p className='mb-0'>
                            All our courses are in spoken language i.e Hindi +
                            English. These tools or subjects can be a little
                            tricky or complicated but our lectures are very
                            simple to understand.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContent;
