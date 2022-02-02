import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Calendar from '../../assets/icons/calendar.png';
import Clock from '../../assets/icons/clock.png';
import { formatDate, formatTime, truncate } from '../../utils/utils';

import './index.scss';
import { useTranslation } from 'react-i18next';

const CurrentCourse = ({ courses }) => {
  
  const { t } = useTranslation();
  let history = useHistory();

  const manageStartCourseApi = c => {
    history.push(`/courses-module/${c?.course}`);
  };

  return (
    <div className='current_course'>
      <h3>{t('dashboardPage.current')}</h3>
      <div className='Scrl_div'>
        {courses?.length > 0 ? (
          courses.map(c => (
            <div className='course_explore'>
              <Row>
                <Col md={2} xs={6}>
                  <h6>{truncate(c?.course_name, 40) || 'N/A'}</h6>
                </Col>

                <Col md={2} xs={6}>
                  <div>
                    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                      <CircularProgress
                        variant='determinate'
                        value={c?.progress || 0}
                      />
                      <Box
                        sx={{
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          position: 'absolute',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          variant='caption'
                          component='div'
                          color='text.secondary'
                        >
                          {c?.progress || 0}%
                        </Typography>
                      </Box>
                    </Box>
                  </div>
                </Col>

                <Col md={5} xs={6}>
                  <ul className='p-0'>
                    <li>
                      <img src={Calendar} alt='...' className='pr-2' />
                      {formatDate(c?.course_start_time, 'MMM Do YYYY')}
                    </li>

                    <li>
                      <img src={Clock} alt='...' className='pr-2' />{' '}
                      {formatTime(c?.course_start_time).hour}{' '}
                      {formatTime(c?.course_start_time).minute}
                    </li>
                  </ul>
                </Col>
                <Col md={3} xs={6} className='p-0'>
                  <div className='button_paddingarea'>
                      <button className='explore_button btn' onClick={()=>manageStartCourseApi(c)}>
                        {t('myProgressPage.button.1')}
                      </button>
                  </div>
                </Col>
              </Row>
            </div>
          ))
        ) : (
          <div className=' mb-2'>{t('common.noCurrentCourse')}</div>
        )}
      </div>
    </div>
  );
};

export default CurrentCourse;
