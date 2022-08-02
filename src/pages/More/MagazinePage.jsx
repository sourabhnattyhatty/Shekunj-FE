import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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

function MagazinePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { successStories } = useSelector((state) => {
    return state.coursesReducer;
  });
  const { lan } = useSelector((state) => state.languageReducer);
  const { t } = useTranslation();

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
    axios.get('/private_adds/private_add?image_type=success_stories_banner')
      .then((response) => {
        setStoriesBannerAds(response.data.results);
      });
  }, [])
  useEffect(() => {
    axios.get('/private_adds/private_add?image_type=success_stories_box')
      .then((response) => {
        setStoriesBoxAds(response.data.results);
      });
  }, [])

  return (
    <div>
      <Header loginPage={true} page='more' subPage="moreMagazine"/>
      <div className="text-center">
        <h1>MagazinePage</h1>
        </div>
  
    </div>
  );
}

export default MagazinePage;
