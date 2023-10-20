import React, { useEffect, useState } from "react";

import Header from '../../common/Header';
import OfficeList from "../../components/reservation/OfficeList";

import color from "./../../assets/color.png";

// icons
import { fetchReservationList } from '../../api/reservation';

// styles
import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
  RightSection,
  TitleText,
} from '../../styles/CommonStyles';
import ReservationList from '../../components/reservation/ReservationList';

const ReservationPage = () => {
  const userId = localStorage.getItem('userId');
  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    // getReservationData();
  }, []);

  // 예약한 오피스 조회
  const getReservationData = async () => {
    try {
      const res = await fetchReservationList(userId);
      setReservationList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <MainSection>
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <LeftSection>
          <TitleText>공유 오피스 예약</TitleText>
          <ReservationList
            getReservationData={reservationList}
          />
        </LeftSection>
        <RightSection>
          <OfficeList />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default ReservationPage;
