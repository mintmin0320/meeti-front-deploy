import React from "react";
import styled from "styled-components";

import ReservationDetail from "../../components/reservation/ReservationDetail";
import Header from '../../common/Header';

import color from "./../../assets/color.png";

// styles
import {
  Container,
  BackColor,
  MainSection,
} from '../../styles/CommonStyles';

const Last = styled.div`
  width: 90%;
  height: 340px;
  border-radius: 20px;
  z-index: 3;
`;

const ReservationDetailPage = () => {
  return (
    <Container>
      <MainSection className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        {/* <Mid>
          <ReservationCom />
        </Mid> */}
        <Last>
          <ReservationDetail />
        </Last>
      </MainSection>
    </Container>
  );
};

export default ReservationDetailPage;
