import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllNotifications } from "../../store/notifications";
import {
  setCollapseSuccessStory,
  successStories as fetchSuccessStories,
} from "../../store/courses/action";
import { Header, Footer } from "../../components";
import "./index.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";

// import Moment from "react-moment";

function AllNotification() {
  const history = useHistory();
  const { notifications } = useSelector((state) => state.notificationsReducer);
  const dispatch = useDispatch();

  console.log("notificationsssssss",notifications["Notifications "]);

  const { lan } = useSelector((state) => state.languageReducer);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getAllNotifications());
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
      <Header loginPage={true} page='Notifications' subPage='AllNotification' />
      <div className='text-center'>
        {" "}
        <nav class='navbar navbar-custom'>
          <h2>All Notifications</h2>
        </nav>
      </div>
      <div className='NotificationContainerIndex'>
        {notifications["Notifications "]?.length > 0 ? (
          notifications["Notifications "]?.map((c)=>{
            console.log("c", c)
            return (
              <>
               <div>
                  <Card key={c?.id}>
                  {console.log("c", c)}
                    <Card.Body key={c?.id}>
                      <Card.Title class='icon_favorite' key={c?.id}>
                        <h3 class='c-heading-6'>{c && c.title}</h3>
                      </Card.Title>
                      <Button
                        href={c && c.url}
                        className='c-button'
                        variant='primary'
                        key={c?.id}
                      >
                        Visit Link
                      </Button>
                    </Card.Body>
                  </Card>
                  </div>
              </>
            );
          })
        ) : (
          <div className='text-center'>{t("common.noDataFound")}</div>
        )}
      </div>
    </div>
  );
}

export default AllNotification;
