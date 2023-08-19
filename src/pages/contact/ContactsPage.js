import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import MainContacts from "../../components/contact/MainContacts";
import RecentContacts from "../../components/contact/RecentContacts";

// icon, bg-color
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { RiMapPinLine, RiPlayList2Fill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";

import color from "./../../assets/color.png";

const ContactsPage = () => {
  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header>
          <Link to="/">
            <AiOutlineCalendar className="false" />
          </Link>
          <Link to="/contact">
            <FaRegAddressBook className="true" />
          </Link>
          <Link to="/reservation">
            <RiMapPinLine className="false" />
          </Link>
          <Link to="/approval">
            <HiOutlineMail className="false" />
          </Link>
          <Link to="/minutes">
            <RiPlayList2Fill className="false" />
          </Link>
          <Link to="/profile">
            <BiUserCircle className="true" />
          </Link>
        </Header>
        <Mid>
          <Title>최근 연락처</Title>
          <SubTitle>Recent Contacts</SubTitle>
          <RecentContacts />
          <RecentContacts />
          <RecentContacts />
          <Title>즐겨찾기</Title>
          <SubTitle>Bookmark</SubTitle>
          <RecentContacts />
          <RecentContacts />
          <RecentContacts />
        </Mid>
        <Last>
          <MainContacts />
        </Last>
      </MainDiv>
    </Test>
  );
};

export default ContactsPage;

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
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
`;
const SubTitle = styled.div`
  margin-bottom: 10px;
`;

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
  padding: 10px;
  border: solid 1px #e6e6e6;
  border-radius: 15px;
  background-color: #fff;
  margin-bottom: 15px;
`;
const SubDiv = styled.div`
  display: flex;
`;
const SubLeftDiv = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubRightDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

const SubOptionImg = styled.img`
  border-radius: 10px;
  margin: auto;
  width: 119px;
  height: 99px;
  object-fit: cover;
`;
const SubOptionDate = styled.div`
  color: #535571;
  font-size: 12px;
  margin: 5px;
`;
const SubOptionPlace = styled.div`
  font-size: 14px;
  margin: 5px;
`;

const SubOptionArea = styled.div`
  margin: 3px;
  padding: 2px;
  padding-left: 6px;
  padding-right: 6px;
  background: #f8f8f8;
  border: 1px solid #8165df;
  border-radius: 50px;
  width: 36px;
  margin-top: 0px;
  height: 15px;
  font-size: 10px;
  color: #8165df;
  text-align: center;
`;
const SubOptionTelDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3px;
`;
const SubOptionTelNum = styled.div`
  font-size: 10px;
  margin-left: 5px;
  color: #8165df;
  display: flex;
  justify-content: center;
  align-items: center;
`;
