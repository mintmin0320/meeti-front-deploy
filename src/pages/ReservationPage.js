import React from "react";
import styled from "styled-components";
import color from "./../assets/color.png";
import Cal from "./../components/MainPage/Calendar/Calendar";
import RoomCom from "../components/MainPage/Reservation/RoomCom";
import Menubar from '../components/Menubar';

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
  z-index: 2;
`;
const BackColor = styled.img`
  position: absolute;
  width: 548px;
  height: 503px;
  margin-left: 100px;
  margin-top: 100px;
  background: #f8f8f8;
  z-index: 1;
`;

const Header = styled.div`
  background: #f8f8f8;
  width: 10%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  z-index: 4;
`;

const Mid = styled.div`
  background: #f8f8f8;
  width: 30%;
  border-radius: 20px;
`;
const Title = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
`;
const SubTitle = styled.div``;

const Last = styled.div`
  background: #f8f8f8;
  width: 60%;
  height: 100%;
  border-radius: 20px;
  z-index: 3;
  overflow: scroll;
`;

const ReservationPage = () => {
  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Menubar />
        <Mid>
          <Title>예약 일정</Title>
          <SubTitle>Reservation status</SubTitle>
        </Mid>
        <Last>
          <RoomCom />
        </Last>
      </MainDiv>
    </Test>
  );
};

export default ReservationPage;
