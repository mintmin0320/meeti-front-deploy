import React, { useState } from "react";
import styled from "styled-components";

import Header from '../../common/Header';
import Minutes from "./../../components/minutes/Minutes";
import MinutesList from "./../../components/minutes/MinutesList";

// bg-color
import color from "./../../assets/color.png";

// styles
import {
  Container,
  BackColor,
  MainSection,
  LeftSection
} from '../../styles/CommonStyles';

const Title = styled.p`
  margin-top: 20px;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Last = styled.div`
  background: #f8f8f8;
  width: 60%;
  height: 100%;
  border-radius: 20px;
`;

const MinutesPage = () => {
  const [selectedMinute, setSelectedMinute] = useState(null);

  return (
    <Container>
      <MainSection className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <LeftSection>
          <Title>회의록</Title>
          <p>It's Minutes</p>
          <MinutesList setSelectedMinute={setSelectedMinute} />
        </LeftSection>
        <Last>
          <Minutes detail={selectedMinute} />
        </Last>
      </MainSection>
    </Container>
  );
};

export default MinutesPage;
