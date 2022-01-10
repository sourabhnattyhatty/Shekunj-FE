import React from "react";
import "./index.scss";

function Error({ error, touched, isSubmitting }) {
  return (
    <div className="noselect">
      {!isSubmitting && <div className='text-danger err'>{error && touched ? error : null}</div>}
    </div>
  );
}

export default Error;
