import React, { useState } from "react";
import styled from "styled-components";

import Header from '../../common/Header';
import Minutes from "./../../components/minutes/Minutes";
import MinutesList from "./../../components/minutes/MinutesList";

import color from "./../../assets/color.png"

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

const Mid = styled.div`
  background: #f8f8f8;
  width: 30%;
  border-radius: 20px;
`;

const Title = styled.div`
  margin-top: 50px;
  font-size: 20px;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  margin-bottom: 38px;
`;

const Last = styled.div`
  background: #f8f8f8;
  width: 60%;
  height: 100%;
  border-radius: 20px;
  z-index: 3;
`;

const MinutesPage = () => {
  const [selectedMinute, setSelectedMinute] = useState(null);

  return (
    <Test>
      <MainDiv className="MainDiv">
        {/* <BackColor src={color} style={{ opacity: 0.2 }} /> */}
        <Header />
        <Mid>
          <Title>회의록</Title>
          <SubTitle>It's Minutes</SubTitle>
          <MinutesList setSelectedMinute={setSelectedMinute} />
        </Mid>
        <Last>
          <Minutes detail={selectedMinute} />
        </Last>
      </MainDiv>
    </Test>
  );
};

export default MinutesPage;
