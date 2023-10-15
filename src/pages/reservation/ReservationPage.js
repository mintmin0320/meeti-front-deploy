import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

import Header from '../../common/Header';
import OfficeList from "../../components/reservation/OfficeList";

import color from "./../../assets/color.png";

// icons
import { BiPhoneCall } from "react-icons/bi";
import { fetchGetMyOfficeList } from '../../api/reservation';

// styles
import {
  Container,
  BackColor,
  MainSection,
  LeftSection
} from '../../styles/CommonStyles';

const Title = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const SubTitle = styled.div`
  margin-bottom: 10px;
`;

const Last = styled.div`
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

const SubOptionTime = styled.div`
  margin: 3px;
  padding: 2px;
  padding-left: 6px;
  padding-right: 6px;
  background: #f8f8f8;
  border: 1px solid #8165df;
  border-radius: 50px;
  width: 75%;
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

const ReservationPage = () => {
  const userId = localStorage.getItem('userId');
  const [officeList, setOfficeList] = useState([]);

  useEffect(() => {
    getOfficeData();
  }, []);

  const getOfficeData = async () => {
    try {
      const res = await fetchGetMyOfficeList(userId);

      if (!res.data || res.data.length === 0) {
        setOfficeList([]);

        return;
      }

      setOfficeList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Card = () => {
    return (
      <Fragment>
        {officeList.map((office) =>
          <ScheduleBox key={office.id}>
            <SubDiv>
              <SubLeftDiv>
                <SubOptionImg src={office.image} alt="이미지 없음" />
              </SubLeftDiv>
              <SubRightDiv>
                <SubOptionDate>{office.date}</SubOptionDate>
                <SubOptionTime>{office.startTime} : {office.endTime}</SubOptionTime>
                <SubOptionPlace>{office.officeName}</SubOptionPlace>
                <SubOptionTelDiv>
                  <BiPhoneCall style={{ color: "#8165df" }} />
                  <SubOptionTelNum>{office.telNum}</SubOptionTelNum>
                </SubOptionTelDiv>
              </SubRightDiv>
            </SubDiv>
          </ScheduleBox>
        )}
      </Fragment>
    );
  };

  return (
    <Container>
      <MainSection className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <LeftSection>
          <Title>공유 오피스 예약</Title>
          <SubTitle>Reservation status</SubTitle>
          <Card />
        </LeftSection>
        <Last>
          <OfficeList />
        </Last>
      </MainSection>
    </Container>
  );
};

export default ReservationPage;
