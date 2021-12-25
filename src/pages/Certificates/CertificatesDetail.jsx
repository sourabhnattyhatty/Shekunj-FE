import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { getUserCourseCertificateDetail } from "../../store/certificate";
import { formatDate } from "../../utils/utils";

const CertificatesDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { certificateDetail: certificate } = useSelector(
    (state) => state.certificateReducer,
  );

  useEffect(() => {
    if (id) {
      dispatch(getUserCourseCertificateDetail(id, history));
    } else {
      history.push("/all-certificate-page");
    }
  }, [id, history, dispatch]);

  return (
    <div className='container mt-4'>
      <h1>Certification of Completion</h1>
      <h4>This certificate proudly presented to</h4>
      <h2>{certificate?.name || "N/A"}</h2>
      <p>
        with membership number {certificate?.id} has been successfully completed
        the course
      </p>
      <p>
        conducted from{" "}
        {formatDate(certificate?.course_start_time, "MMM Do YYYY")} to{" "}
        {formatDate(certificate?.course_end_time, "MMM Do YYYY")}
      </p>
      <p>Destination: Best in class</p>
      <div className='float-left'>
        <div>{formatDate(certificate?.course_end_time, "DD/MM/YYYY")}</div>
        <div>Date</div>
      </div>
      <div className='float-right'>
        <div>PRESIDENT DIRECTOR</div>
        <div>NAME SURNAME</div>
      </div>
    </div>
  );
};

export default CertificatesDetail;
