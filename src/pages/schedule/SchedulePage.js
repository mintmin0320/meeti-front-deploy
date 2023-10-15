import React from "react";
import styled from "styled-components";

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
  LeftSection
} from '../../styles/CommonStyles';

const ScheduleBox = styled.div`
  width: 90%;
  height: 503px;
  border-radius: 20px;
  position: relative;
  z-index: 3;
`;

const Title = styled.div`
  margin-top: 50px;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  margin-bottom: 38px;
`;

const Last = styled.div`
  width: 60%;
  height: 340px;
  border-radius: 20px;
`;

const CalendarPage = () => {
  return (
    <Container>
      <MainSection className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <LeftSection>
          <Title>일정</Title>
          <SubTitle>My Schedule</SubTitle>
          <ScheduleBox>
            <ScheduleList />
          </ScheduleBox>
        </LeftSection>
        <Last>
          <Calendar />
        </Last>
      </MainSection>
    </Container>
  );
};

export default CalendarPage;
