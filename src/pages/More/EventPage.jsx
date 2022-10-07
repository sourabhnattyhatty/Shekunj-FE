import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { routingConstants } from "../../utils/constants";
import {
  setCollapseSuccessStory,
  successStories as fetchSuccessStories,
} from "../../store/courses/action";
import { Header, Footer } from "../../components";
import down1 from "../../assets/icons/down1.png";
import up from "../../assets/icons/up.png";
import double_quote from "../../assets/icons/double_quote.png";
import global from "../../assets/images/Success/global.png";
import "./index.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { getAllEvents } from "../../store/events";
import Moment from "react-moment";

function EventPage() {
  const history = useHistory();
  const { events } = useSelector((state) => state.eventsReducer);
  const dispatch = useDispatch();

  console.log("Eventsssssss", events);

  const { lan } = useSelector((state) => state.languageReducer);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch, lan]);

  React.useEffect(() => {
    dispatch(fetchSuccessStories());
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch, lan]);

  const handleSetCollapse = (id, is_collapse) => {
    dispatch(setCollapseSuccessStory(id, is_collapse ? false : true));
  };

  const [storiesBannerAds, setStoriesBannerAds] = useState([]);
  const [storiesBoxAds, setStoriesBoxAds] = useState([]);

  useEffect(() => {
    axios
      .get("/private_adds/private_add?image_type=success_stories_banner")
      .then((response) => {
        setStoriesBannerAds(response.data.results);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/private_adds/private_add?image_type=success_stories_box")
      .then((response) => {
        setStoriesBoxAds(response.data.results);
      });
  }, []);

  return (
    <div>
      <Header loginPage={true} page='more' subPage='moreEvent' />
      <div className='text-center'>
        {" "}
        <nav class='navbar navbar-custom'>
          <h2>All Events</h2>
        </nav>
      </div>
      <div className='Home'>
        {/* <div className='filters'>
          <span className='title'>Filter</span>
          <span>
            <Form.Check
              inline
              label='Faveroite'
              name='group1'
              type='checkbox'
              id={`inline-1`}
            />
          </span>
          <Button variant='light'>Clear Filters</Button>
        </div> */}
        <div className='EventsContainer'>
          {events?.event_list?.length > 0 ? (
            events?.event_list?.map((c)=>{
              console.log("c", c);
              return (
                <>
              {/* // (c, index) =>
              // c &&
              // c.name && (
              //   <> */}
                  <Col md={4}>
                    <Card key={c?.id} style={{ width: '30rem',height:"34rem" }}>
                      <Card.Body className='eventCards' key={c?.id}>
                        <img
                          src={c && c.image}
                          class='card-img-top'
                          alt='...'
                          width="150px"
                          height="200px"
                        ></img>
                        <Card.Title class="icon_favorite"  key={c?.id} >
                          <h3 class="c-heading-6">
                          <Link
                                    to={routingConstants.MORE_EVENT+ c.id}
                                    className=''
                                    key={c?.id} >
                                    {c && c.title}
                                  </Link>
                          </h3>
                        </Card.Title>
                        
                        <Card.Subtitle className='mb-2 text-muted'>
                          <Moment format='D MMM YYYY' withTitle>
                            {c && c.created_at}
                          </Moment>
                        </Card.Subtitle>
                        <Card.Text>
                          <p class='card-text'>
                            <div
                              style={{
                                maxHeight: "150px",
                                overflow: "hidden",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: `<div>${c && c.about_event}</div>`,
                              }}
                            />
                          </p>
                        </Card.Text>
                        <Button href={c && c.form_link} className="c-button" color="#ec498a" variant='primary'>
                          Registration and details
                        </Button>
                     
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })
          ) 
          //  {/* </>
          //           ),
          //       )
          //     )  */}
          : (
            <div className='text-center'>{t("common.noDataFound")}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventPage;
