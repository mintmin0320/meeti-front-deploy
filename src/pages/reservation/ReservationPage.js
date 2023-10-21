import React, { useEffect, useState, useCallback } from "react";

import Header from '../../common/Header';
import OfficeList from "../../components/reservation/OfficeList";

import color from "./../../assets/color.png";

// icons
import { fetchClassificationArea, fetchOfficeList, fetchReservationList, fetchSearchOffice } from '../../api/reservation';

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
  const [officeList, setOfficeList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getReservationData();
  }, []);

  useEffect(() => {
    getOfficeData();
  }, [officeList]);

  // 예약한 오피스 조회
  const getReservationData = async () => {
    try {
      const res = await fetchReservationList(userId);
      setReservationList(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* 공유 오피스 목록 조회 */
  const getOfficeData = async () => {
    try {
      const res = await fetchOfficeList();
      setOfficeList(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 회의실 이름 검색
  const handleSearchOffice = () => {
    if (search === "") {
      alert("검색어를 입력해 주세요!");
    } else {
      try {
        const res = fetchSearchOffice();
        setOfficeList(res?.data);
        setSearch('');
      } catch (error) {
        console.log(error);
      }
    }
  };

  // 지역별 분류
  const handleAreaButton = async (address) => {
    if (address === "전체") {
      getOfficeData();
    } else {
      try {
        const res = await fetchClassificationArea(address);
        setOfficeList(res?.data);
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setSearch((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  return (
    <Container>
      <MainSection>
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <LeftSection>
          <TitleText>공유 오피스 예약</TitleText>
          <ReservationList
            reservationList={reservationList}
          />
        </LeftSection>
        <RightSection>
          <OfficeList
            officeList={officeList}
            handleSearchOffice={handleSearchOffice}
            handleAreaButton={handleAreaButton}
            handleChange={handleChange}
          />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default ReservationPage;
