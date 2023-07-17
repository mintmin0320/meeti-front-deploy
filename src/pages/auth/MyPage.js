import React, { useState } from "react";
import styled from "styled-components";
import color from "./../../assets/color.png";
import { Link } from "react-router-dom";

// icon
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { RiMapPinLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

const MyPage = () => {
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
            <RiMapPinLine className="false" />
          </Link>
          <Link to="/approval">
            <HiOutlineMail className="false" />
          </Link>
        </Header>
        <Mid>
          <Title>마이페이지</Title>
          <Profile>
            <Profileimg />
            <div>
              <Info>
                이름 l<Text>설주희</Text>
              </Info>
              <Info>
                소속 l<Text>동양미래대학교</Text>
              </Info>
              <Info>
                이메일 l<Text>juhee01176@gmail.com</Text>
              </Info>
              <Info>
                전화번호 l<Text>010-3264-5936</Text>
              </Info>
            </div>
          </Profile>
          <Introduction>
            <Info>
              소개 l<Text>안녕하세요~^^</Text>
            </Info>
          </Introduction>
          <Buttons>
            <Btn>회원 정보 수정</Btn>
            <Btn>로그아웃</Btn>
            <Btn>회원탈퇴</Btn>
          </Buttons>
        </Mid>
        <Last></Last>
      </MainDiv>
    </Test>
  );
};
export default MyPage;

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

const Mid = styled.div`
  background: #f8f8f8;
  width: 100%;
  margin-left: 35px;
  border-radius: 20px;
`;
const Title = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
`;
const Profile = styled.div`
  margin: 30px;
`;
const Profileimg = styled.div`
  width: 128px;
  height: 128px;
  margin-right: 50px;
  border-radius: 50%;
  border: solid 1px;
  background: #d9d9d9;
  float: left;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px 2px;
`;
const Info = styled.div`
  display: flex;
  margin: 15px;
  color: #9c9c9c;
  white-space: nowrap;
  overflow: hidden;
`;
const Introduction = styled.div`
  margin: 20px;
`;
const Text = styled.div`
  margin-left: 15px;
  color: black;
  white-space: pre-wrap;
`;
const Buttons = styled.div`
  margin-top: 280px;
  width: 250px;
  display: flex;
  justify-content: space-around;
`;
const Btn = styled.button`
  padding: 5px 9px;
  font-size: 12px;
  border: solid 1px #8165df;
  border-radius: 5px;
  background: none;
  color: #8165df;
  cursor: pointer;
`;

const Last = styled.div`
  background: #f8f8f8;
  width: 60vw;
  height: 340px;
  border-radius: 20px;
`;
