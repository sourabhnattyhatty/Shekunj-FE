import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";

const SocialShare = () => {
  return (
    <>
      <WhatsappShareButton url={window.location.href}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>{" "}
      <FacebookShareButton url={window.location.href}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>{" "}
      <LinkedinShareButton url={window.location.href}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </>
  );
};

export default SocialShare;
