import React from "react";
import styled from "styled-components";
// import color from "./../../assets/color.png";
import Minutes from "./../../components/minutes/Minutes";
import MinutesList from "./../../components/minutes/MinutesList";
import { Link } from "react-router-dom";

// icon
import { FaRegAddressBook } from "react-icons/fa";
import { RiMapPinLine, RiPlayList2Fill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
// Background_circle
const Circle_frame = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #8165df;
  opacity: 0;
  @keyframes wave {
    0% {
      scale: 100%;
      opacity: 0.8;
    }
    40% {
      opacity: 0.3;
    }
    100% {
      scale: 2000%;
      opacity: 0;
    }
  }
`;
const L_Circle_frame = styled(Circle_frame)`
  position: absolute;
  bottom: -25px;
  left: -25px;
`;

const R_Circle_frame = styled(Circle_frame)`
  position: absolute;
  top: -25px;
  right: -25px;
`;
const Circle1 = styled(L_Circle_frame)`
  animation: wave 4s infinite linear;
`;
const Circle2 = styled(L_Circle_frame)`
  animation: wave 4s infinite 2s linear;
`;
const Circle3 = styled(R_Circle_frame)`
  animation: wave 4s infinite linear;
`;
const Circle4 = styled(R_Circle_frame)`
  animation: wave 4s infinite 2s linear;
`;

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
  /* overflow: scroll; */
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

const MinutesPage = () => {
  return (
    <Test>
      <div className="circle_frame" style={{ overflow: "hidden" }}>
        <Circle1 />
        <Circle2 />
        <Circle3 />
        <Circle4 />
      </div>

      <MainDiv className="MainDiv">
        {/* <BackColor src={color} style={{ opacity: 0.2 }} /> */}
        <Header>
          <Link to="/">
            <AiOutlineCalendar className="false" />
          </Link>
          <Link to="/contact">
            <FaRegAddressBook className="false" />
          </Link>
          <Link to="/reservation">
            <RiMapPinLine className="false" />
          </Link>
          <Link to="/approval">
            <HiOutlineMail className="false" />
          </Link>
          <Link to="/minutes">
            <RiPlayList2Fill className="true" />
          </Link>
          <Link to="/profile">
            <BiUserCircle className="false" />
          </Link>
        </Header>
        <Mid>
          <Title>회의록</Title>
          <SubTitle>It's Minutes</SubTitle>
          <MinutesList />
        </Mid>
        <Last>
          <Minutes />
        </Last>
      </MainDiv>
    </Test>
  );
};

export default MinutesPage;
