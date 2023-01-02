import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = (props,{
  title = `India's Leading Women
  Empowerment
  Organization - Shekunj.com`,
  description = "Start The Journey Of Education with Sheकुंज",
  image = "http://ec2-3-7-4-178.ap-south-1.compute.amazonaws.com/static/media/logo.de3c6070.svg",
  keywords=`women empowerment organizations
  women empowerment initiative
  free online courses
  free career guidance`
}) => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name='title' content={props.title} />
        <meta name='description' content={props.description} />
        <meta property='og:title' content={props.title} />
        <meta property='og:image' content={image} />
        <meta property='og:description' content={props.description} />
        <meta property='og:url' content={image} />
        <meta property='og:keywords' content={props.keywords} />
        <meta name='keywords' content={props.keywords} />
      </Helmet>
    </>
  );
};

export default SEO;
