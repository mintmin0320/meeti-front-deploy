import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ReservationCom from "../../components/reservation/ReservationCom";
import ReservationDetail from '../../components/reservation/ReservationDetail';

// icon
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { RiMapPinLine, RiPlayList2Fill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";

import color from "./../../assets/color.png";

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
  z-index: 3;
`;
const Title = styled.div`
  margin-top: 50px;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
`;
const SubTitle = styled.div``;

const Last = styled.div`
  background: #f8f8f8;
  width: 90%;
  height: 340px;
  border-radius: 20px;
  z-index: 3;
`;

const ReservationDetailPage = () => {
  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header>
          <Link to="/">
            <AiOutlineCalendar className="false" />
          </Link>
          <Link to="/contact">
            <FaRegAddressBook className="false" />
          </Link>
          <Link to="/reservation">
            <RiMapPinLine className="true" />
          </Link>
          <Link to="/approval">
            <HiOutlineMail className="false" />
          </Link>
          <Link to="/minutes">
            <RiPlayList2Fill className="false" />
          </Link>
          <Link to="/profile">
            <BiUserCircle className="false" />
          </Link>
        </Header>
        {/* <Mid>
          <ReservationCom />
        </Mid> */}
        <Last>
          <ReservationDetail />
        </Last>
      </MainDiv>
    </Test>
  );
};

export default ReservationDetailPage;
