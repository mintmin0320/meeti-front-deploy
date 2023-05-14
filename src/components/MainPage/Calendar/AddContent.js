import React, { useState } from "react";
import styled, { css } from "styled-components";
import MiniCalendar from "./MiniCalendar";
import ColorCom from "./ColorCom";
import { BiMinus, BiSearch } from "react-icons/bi";

const AddTitle = styled.input`
  font-size: 24px;
  border: none;
  margin-top: -5px;
  margin-bottom: 10px;
  padding: 5px;
  background-color: #f8f8f8;
  //box-shadow: 3px 3px 10px #b3b3b3;
  width: 80%;
`;
const TitleFont = styled.div`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #535571;
  padding: 10px;
  ${css`
    &:after {
      content: "  >";
    }
  `}
`;
const AddOther = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 60%;
`;
const Right = styled.div`
  width: 40%;
`;
const TimeDiv = styled.div`
  display: flex;
  width: 100%;
`;

const Time = styled.input`
  width: 40%;
  margin: 10px;
`;

const PlaceButton = styled.div`
  width: 117px;
  height: 23px;
  background: #ffffff;
  border: 0.5px solid #535571;
  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
  display: flex;
`;
const PlaceText = styled.div`
  font-size: 11px;
  line-height: 13px;
  margin: 5px;
  color: #535571;
`;
const AddContent = () => {
  return (
    <>
      <AddTitle type="text" placeholder="일정 제목"></AddTitle>

      <AddOther>
        <Left>
          <ColorCom />
          <TitleFont>날짜</TitleFont>
          <MiniCalendar className="MiniCalendar" />
          {/* <TestCal /> */}
        </Left>
        <Right>
          <TitleFont>시간</TitleFont>
          <TimeDiv>
            <Time type="time"></Time>
            <BiMinus className="BiMinus" />
            <Time type="time"></Time>
          </TimeDiv>
          <TitleFont>장소</TitleFont>
          <PlaceButton>
            <BiSearch className="BiSearch" />
            <PlaceText>회의실 예약하기</PlaceText>
          </PlaceButton>
          <TitleFont>멤버</TitleFont>
        </Right>
      </AddOther>
    </>
  );
};

export default AddContent;
