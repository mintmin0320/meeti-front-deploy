import React from "react";
import styled from "styled-components";

import ApprovalCom from "../../components/approval/ApprovalCom";

// bg-color
import color from "./../../assets/color.png";

// styles
import {
  Container,
  BackColor,
  MainSection,
  LeftSection
} from '../../styles/CommonStyles';
import Header from '../../common/Header';

const Title = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const Last = styled.div`
  width: 60vw;
  height: 340px;
  border-radius: 20px;
  z-index: 3;
`;

const ApprovalPage = () => {
  return (
    <Container>
      <MainSection className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <LeftSection>
          <Title>승인요청</Title>
          <p>Request Approval</p>
        </LeftSection>
        <Last>
          <ApprovalCom />
        </Last>
      </MainSection>
    </Container>
  );
};

export default ApprovalPage;
