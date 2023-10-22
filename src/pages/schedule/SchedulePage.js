import React, { useState, useEffect } from "react";

import Calendar from "../../components/schedule/Calendar";
import ScheduleList from "../../components/schedule/ScheduleList";
import Header from '../../common/Header';

// bg-color
import color from "./../../assets/color.png";

// styles
import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
  RightSection,
  TitleText
} from '../../styles/CommonStyles';
import { fetchDeleteSchedule, fetchScheduleList } from '../../api/schedule';

const CalendarPage = () => {
  const userId = localStorage.getItem('userId');
  const [scheduleList, setScheduleList] = useState([]);

  const [refreshKey, setRefreshKey] = useState(false);


  useEffect(() => {
    getScheduleList();
  }, [refreshKey]);

  // 일정 조회
  const getScheduleList = async () => {
    try {
      const res = await fetchScheduleList(userId);
      setScheduleList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 일정 삭제
  const handleDeleteSchedule = async (scheduleId) => {
    try {
      await fetchDeleteSchedule(scheduleId);

      alert('일정 삭제 성공!');

      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <MainSection>
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <LeftSection>
          <TitleText>일정</TitleText>
          <ScheduleList
            scheduleList={scheduleList}
            handleDeleteSchedule={handleDeleteSchedule}
          />
        </LeftSection>
        <RightSection>
          <Calendar
            scheduleList={scheduleList}
          />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default CalendarPage;
