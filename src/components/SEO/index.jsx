import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Sheकुंज",
  description = "Start The Journey Of Education with Sheकुंज",
  image = "http://ec2-3-7-4-178.ap-south-1.compute.amazonaws.com/static/media/logo.de3c6070.svg",
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:image' content={image} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={image} />
      </Helmet>
    </>
  );
};

export default SEO;
