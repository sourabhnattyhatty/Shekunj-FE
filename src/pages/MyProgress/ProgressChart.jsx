import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./index.scss";
import { useTranslation } from "react-i18next";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressChart = ({ userProgress }) => {
  const { t } = useTranslation();

  const options = {
    labels: [],
    datasets: [
      {
        data: [
          userProgress?.in_progress_course || 0,
          userProgress?.complate_course || 0,
        ],
        backgroundColor: ["#FF6384", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#FFCE56"],
      },
    ],
    options: {
      elements: {
        center: {
          text: "50%",
          color: "#FFCE56",
          fontStyle: "Arial",
          sidePadding: 20,
          minFontSize: 25,
          lineHeight: 25,
        },
      },
    },
  };

  const plugins = [
    {
      beforeDraw(chart) {
        const { width } = chart;
        const { height } = chart;
        const { ctx } = chart;
        ctx.restore();
        const fontSize = (height / 160).toFixed(2);
        ctx.font = `${fontSize}em sans-serif`;
        ctx.fillStyle = `#FFCE56`;
        ctx.textBaseline = "top";
        const text = `${calculatePercentage()}%`;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  const calculatePercentage = () => {
    return userProgress
      ? (
          ((userProgress?.complate_course || 0) /
            (userProgress?.total_course || 0)) *
          100
        ).toFixed()
      : 0;
  };

  return (
    <div className='course_completedright'>
      <Row>
        <Col md={7} xs={6}>
          {userProgress?.complate_course && (
            <Doughnut data={options} plugins={plugins} />
          )}
        </Col>

        <Col md={5} xs={6}>
          <div className='course_prog pink_col'>
            <h6>{userProgress?.in_progress_course || 0}</h6>
            <h3>
              {t("myProgressPage.heading.1.1")} <br />{" "}
              {t("myProgressPage.heading.1.2")}
            </h3>
          </div>

          <div className='course_prog yelloow_col'>
            <h6>{userProgress?.complate_course || 0}</h6>
            <h3>
              {t("myProgressPage.heading.1.1")} <br />{" "}
              {t("myProgressPage.heading.1.3")}
            </h3>
          </div>

          {/* <div className='course_prog purple_col'>
            <h6>2</h6>
            <h3>
              Not <br /> Started
            </h3>
          </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default ProgressChart;
