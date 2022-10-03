import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AccordionComponent, Footer, Header, SEO } from "../../components";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Moment from "react-moment"; 
import { routingConstants } from "../../utils/constants";
import {
    getAllBlogs,
    singleBlogDetails,
} from "../../store/blogs/action";
import "../HomePage/index.scss";
import "./index.scss";
import noImageIcon from "../../assets/images/no-image.jpeg";

const BlogDetails = () => {

    const history = useHistory();
    const { blogs } = useSelector((state) => state.blogsReducer);
    const dispatch = useDispatch();
    console.log("Blogssssss", blogs);
    const { lan } = useSelector((state) => state.languageReducer);
    console.log("langggggg", lan);
    const { t } = useTranslation();
  
    const { id } = useParams();
    console.log("id!!!!!!",id)
    
    useEffect(() => {
        dispatch(singleBlogDetails(id));
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [dispatch,id,lan]);

    // useEffect(() => {
    //     dispatch(getAllBlogs());
    //   }, [dispatch, lan]);

    // const transformImg = (image) => {
    //     return image ? image : TopCollage;
    // };
    // const transformGalley = (image) => {
    //     return image ? image : noImageIcon;
    // };
    // const transformCovImg = (image) => {
    //     return image ? image : dummySchool;
    // };


    return (
        <div>
            <SEO title='Sheकुंज - Career' />
            <Header loginPage={true} page='career' subPage='colleges' />

            {/* <Container className="coverMainSecSchool">
                <div className="school_detail_cover">
                    <img src={(blogs?.image)}
                     alt='...' className="school_detail_cover_img" />
                </div>
            </Container> */}

            {/* <Container>
                <Row>
                    <div md={12} xs={12}>
                        <div className="school_logo">
                            <img src={transformImg(topSchools?.logo)} alt='...'
                                className="school_logo_img" />
                        </div>
                    </div>
                </Row>
            </Container> */}
            
            {console.log("blogss---", blogs)}
            {/* {blogs?.length > 0 ? (
            blogs?.map((blogs)=>{
              console.log("blogs", blogs);
              return (
                  <> */}
            <div className='DetailMainDiv_career'>
                <Container>
                    <Row>
                        <Col md={8} xs={12}>
                            <div className='deatil_box'>
                            <img
                          src={blogs && blogs.image}
                          class='card-img-top'
                          alt='...'
                        ></img>
                                <h4 className='mb-3'>{blogs && blogs.title}</h4>
                         
                                <Row>
                                    {blogs.created_at && (
                                        <Col md={6} xs={12}>
                                            <h6>
                                                <span>
                                                 created_at 
                                                </span>{" "}
                                                :{" "}
                                                <Moment format='D MMM YYYY' withTitle>
                              {blogs.created_at}
                            </Moment>
                                            </h6>
                                        </Col>
                                    )}
                                    {blogs.updated_at && (
                                        <Col md={6} xs={12}>
                                            <span>
                                            updated_at
                                            </span>{" "}
                                            :{" "}
                                            <Moment format='D MMM YYYY' withTitle>
                              {blogs.updated_at}
                            </Moment>
                                        </Col>
                                    )}
                                </Row>

                                {blogs.about_blog && (
                                    <p style={{ textAlign: 'justify' }} className='mt-3'>
                                        <span>
                                           
                                        </span>{" "}
                                        {" "}
                                        <div dangerouslySetInnerHTML={{ __html: `<div>${blogs.about_blog}</div>` }} />
                                    </p>
                                )}
                                        <Row>
                               
                               {blogs.url && (
                                   <Col md={10} xs={12}>
                                       <h6>
                                           visit link:
                                           <Link
                                               // to={{ pathname: topSchools?.website }}
                                               to={blogs?.url}

                                               target='_blank'
                                           // rel='noreferrer'
                                           >
                                               {blogs && blogs.url}
                                           </Link>
                                       </h6>
                                   </Col>
                               )}
                           </Row>
                            </div>
                    
                        </Col>

                                <hr />
                                
                                {/* <Row>
                                    <Col md={6} xs={12}>
                                        <img src={transformGalley(topSchools.image1)} alt='Image' className='right_gallery' />
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <img src={transformGalley(topSchools.image2)} alt='Image' className='right_gallery' />
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <img src={transformGalley(topSchools.image3)} alt='Image' className='right_gallery' />
                                    </Col>
                                    <Col md={6} xs={12}>
                                        <img src={transformGalley(topSchools.image4)} alt='Image' className='right_gallery' />
                                    </Col>
                                </Row>   */}
                    </Row>
                </Container>
            </div>
            {/* </>
              );
            })
          ) 
          : (
            <div className='text-center'>{t("common.noDataFound")}</div>
          )} */}
            <Footer loginPage={false} />
        </div>
    );
};

export default BlogDetails;