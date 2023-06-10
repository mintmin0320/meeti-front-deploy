import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import color from "./../../assets/color.png";
import Cal from "../../components/MainPage/Calendar/Calendar";
import RoomCom from "../../components/MainPage/Reservation/RoomCom";
import Menubar from "../../components/Menubar";

import { Link } from "react-router-dom";

// icon
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";

const ReservationPage = () => {
  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const url = `http://localhost:8080/reservation/get-reservation`;
      const res = await axios.get(url);
      console.log(res);
      setReservationList(res.data.office);
    } catch (error) {
      console.log(error);
    }
  };

  const Card = () => {
    return (
      <Fragment>
        <>
          {reservationList.map((item, idx) => {
            return (
              <ScheduleBox key={idx}>
                <div>{item.date}</div>
                <div>{item.placeName}</div>
                <div>{item.areaName}</div>
              </ScheduleBox>
            );
          })}
        </>
      </Fragment>
    );
  };

  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header>
          <Link to="/calendar">
            <AiOutlineCalendar className="false" />
          </Link>
          <Link to="/">
            <FaRegAddressBook className="false" />
          </Link>
          <Link to="/reservation">
            <RiMapPinLine className="true" />
          </Link>
          <Link to="/approval">
            <HiOutlineMail className="false" />
          </Link>
        </Header>
        <Mid>
          <Title>예약 일정</Title>
          <SubTitle>Reservation status</SubTitle>
          <Card />
        </Mid>
        <Last>
          <RoomCom />
        </Last>
      </MainDiv>
    </Test>
  );
};

export default ReservationPage;

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

const ScheduleBox = styled.div`
  width: 80%;
  height: 100px;
  border: solid 1px #e6e6e6;
  border-radius: 15px;
  background-color: #fff;
  margin-bottom: 15px;
`;
