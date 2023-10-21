import React from "react";
import styled, { css } from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import Map from '../../common/Map';

// CSS
import "react-datepicker/dist/react-datepicker.css"

// icons
import { BsTelephone, BsFillExclamationTriangleFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";


// styles
const DetailWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

// 우측 예약 form
const ReservationForm = styled.form`
  width: 30%;
  height: 100%;
`;

const Text = styled.h1`
  color: #8165df;
  font-size: 20px;
  margin-top: 18px;
  ${css`
    &:after {
      content: "  >";
    }
  `}
`;

const Time = styled.input`
  width: 35%;
  margin: 10px;
`;

const ReservationBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CautionBox = styled.div`
  width: 95%;
  margin-top: 10px;
  margin-left: 30px;
  margin-bottom: 10px;
  padding: 10px;
  border: 0.5px solid #9c9c9c;
  background: #ffffff;
`;

const CautionTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 10px;
`;

const CautionText = styled.p`
  font-size: 14px;
  text-align: center;
  color: #535571;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  width: 90%;
  height: 40px;
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 6px;
  margin: 10px;
  margin-top: 20px;
  margin-left: 30px;
  color: #ffffff;
  background: #6f5cea;
  cursor: pointer;

  &:hover{
    background-color: #d8d8d8;
    color: #000;
  }
`;

// 좌측 회의실 info
const InfoSection = styled.section`
  width: 70%;
  height: 100%;
`;

const TopInfoBox = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: space-between;
`;

const OfficeImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  background-color: red;
`;

const PlaceName = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin: 10px;
`;

const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Info = styled.p`
  width: 90%;
  font-size: 14px;
  color: #535571;
  margin: 8px;
`;

const ReservationDetail = ({
  office,
  handleSubmit,
  date,
  setDate,
  handleChange,
  ExampleCustomInput
}) => {
  return (
    <DetailWrap>
      <ReservationForm onSubmit={handleSubmit}>
        <Text>예약일자 </Text>
        <DatePicker
          name='date'
          locale={ko}
          selected={date}
          onChange={(dateData) => {
            setDate(dateData);
          }}
          customInput={<ExampleCustomInput />}
        />
        <Time
          type="time"
          name='startTime'
          onChange={handleChange}
          required
        />
        <Time
          type="time"
          name='endTime'
          onChange={handleChange}
          required
        />
        <ReservationBox>
          <CautionBox>
            <CautionTitle>예약시 주의사항</CautionTitle>
            <CautionText>
              박수, 연호, 환호, 고성 및 언쟁 등이 발생하는 회의는 예약을
              자제부탁드립니다.
            </CautionText>
            <CautionText>
              여러 회의들이 진행되는 장소입니다. 다음 이용자, 다른 회의에
              방해가 되지 않도록 배려와 양해부탁드립니다
            </CautionText>
            <CautionText>
              이용 수칙이 지켜지지 않는 경우, 재예약이 어려울 수 있습니다.
            </CautionText>
            <CautionText>
              주의사항을 숙지하지 않고 있는 불이익은 본인 부담으로 처리될 수
              있습니다.
            </CautionText>
          </CautionBox>
          <SubmitButton disabled={!office.status}>
            {office.status ? '예약하기' : '예약불가'}
          </SubmitButton>
        </ReservationBox>
      </ReservationForm>
      <InfoSection>
        <TopInfoBox>
          <OfficeImg src={office.image}></OfficeImg>
          <Map placeName={office.placeName} />
        </TopInfoBox>
        <PlaceName>{office.placeName}</PlaceName>
        <Info>{office.addressDetail}</Info>
        <InfoWrap>
          <BsTelephone className="SubDivIcons" />
          <Info>{office.telNum}</Info>
        </InfoWrap>
        <InfoWrap>
          <TbMoneybag className="SubDivIcons" />
          <Info>{office.pay}</Info>
        </InfoWrap>
        <InfoWrap>
          <BiTimeFive className="SubDivIcons" />
          <Info>10:00 ~ 17:00</Info>
        </InfoWrap>
        <InfoWrap>
          <BsFillExclamationTriangleFill className="SubDivIcons" />
          <Info>{office.description}</Info>
        </InfoWrap>
      </InfoSection>
    </DetailWrap>
  );
};

export default ReservationDetail;