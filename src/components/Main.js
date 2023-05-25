import React from "react";
import styled from "styled-components";
import color from "./../assets/color.png";
import Cal from "./MainPage/Calendar/Calendar";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

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
  justify-content: center;
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

const Todays = styled.div`
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

const Calendar = styled.div`
  background: #f8f8f8;
  width: 60vw;
  height: 340px;
  border-radius: 20px;
  z-index: 3;
`;
const Main = ({ id }) => {
  // const navigate = useNavigate();
  // const goCalendar = () => {
  //   navigate(`/calendar/${id}`);
  // };
  // const goContacts = () => {
  //   navigate(`/contacts/${id}`);
  // };
  // const goReservation = () => {
  //   navigate(`/reservation/${id}`);
  // };
  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header>
          <AiOutlineCalendar className="AiOutlineCalendar" />
          <FaRegAddressBook className="FaRegAddressBook" />
          <RiMapPinLine className="RiMapPinLine" />
          <HiOutlineMail className="HiOutlineMail" />
        </Header>
        <Todays>
          <Title>오늘의 일정</Title>
          <SubTitle>It's today's schedule.</SubTitle>
        </Todays>
        <Calendar>
          <Cal />
        </Calendar>
      </MainDiv>
    </Test>
  );
};

export default Main;
