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
      <WhatsappShareButton
        url={window.location.href}
        quote={"Hey shekunj students"}
        hashtag='#ShekunjCertificate'
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>{" "}
      

      <FacebookShareButton url={
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        }
        quote={"test sharing"}
        image={
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        }
        imageURL={
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        }>
        <FacebookIcon size={32} round />
      </FacebookShareButton>{" "}


      <LinkedinShareButton url={window.location.href}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </>
  );
};

export default SocialShare;
