import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";

function Verify() {
  const { user } = useSelector((state) => state.authReducer);

  return (
    <>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-sm-2 col-md-2'></div>
          <div className='col-sm-8 col-md-8'>
            <hr />
            <h2>Verify your e-mail to finish signing for Sheकुंज</h2>
            <h6 className='my-5'>Thank you for choosing Sheकुंज</h6>
            <h6>
              Please confirm that <b>{user.email}</b> is your e-mail address by
              clicking on the button below within 24 hours
            </h6>
            <a href='https://mail.google.com/' target='_blank' rel='noreferrer' className="form-control text-center verify_button">
              Verify
            </a>
          </div>
          <div className='col-sm-2 col-md-2'></div>
        </div>
      </div>
    </>
  );
}

export default Verify;
