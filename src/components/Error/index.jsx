import React from "react";
import "./index.scss";

function Error({ error, touched, isSubmitting }) {
  return (
    <>
      {!isSubmitting && <div className='text-danger err'>{error && touched ? error : null}</div>}
    </>
  );
}

export default Error;
