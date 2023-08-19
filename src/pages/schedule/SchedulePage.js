import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Calendar from "../../components/schedule/Calendar";
import ScheduleList from "../../components/schedule/ScheduleList";

// icon, bg-color


import color from "./../../assets/color.png";
import Header from '../../common/Header';

// CSS
const Test = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f5f3fe;
`;

const MainDiv = styled.div`
  position: absolute;
  width: 90vw;
  height: 85vh;
  margin-top: 78px;
  margin-left: 69px;
  margin-right: 69px;
  background: #f8f8f8;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  z-index: 1;
`;

const BackColor = styled.img`
  position: absolute;
  width: 548px;
  height: 503px;
  margin-left: 100px;
  margin-top: 100px;
  background: #f8f8f8;
  z-index: 2;
`;

const Mid = styled.div`
  background: #f8f8f8;
  width: 30%;
  border-radius: 20px;
`;

const ScheduleBox = styled.div`
  width: 100%;
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
  background: #f8f8f8;
  width: 60%;
  height: 340px;
  border-radius: 20px;
  z-index: 3;
`;

const CalendarPage = () => {
  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <Mid>
          <Title>오늘의 일정</Title>
          <SubTitle>It's today's schedule.</SubTitle>
          <ScheduleBox>
            <ScheduleList />
          </ScheduleBox>
        </Mid>
        <Last>
          <Calendar />
        </Last>
      </MainDiv>
    </Test>
  );
};

export default CalendarPage;
