import React from "react";
import styled from "styled-components";

import ApprovalWrite from "../../components/approval/ApprovalWrite";

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
import ReqApprovalList from '../../components/approval/ReqApprovalList';

const Title = styled.p`
  height: 30px;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 5px;
`;

const RightSection = styled.section`
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
          <ReqApprovalList />
        </LeftSection>
        <RightSection>
          <ApprovalWrite />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default ApprovalPage;
