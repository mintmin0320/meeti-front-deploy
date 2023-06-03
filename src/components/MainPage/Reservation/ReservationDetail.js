import React from "react";
import DataList from "./../../../reservation.json";
import styled from "styled-components";
import { BsTelephone } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

const ImgDiv = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
`;
const TitleDiv = styled.div`
  font-size: 20px;
  margin: 10px;
`;
const ContentsDiv = styled.div`
  font-size: 12px;
  color: #535571;
  margin: 10px;
`;
const SubDiv = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;
const ReservationDetail = () => {
  const meetingRoom = DataList.filter((it) => it.minclassnm === "회의실");
  const meetingRoomImg = meetingRoom[0].imgurl;
  const meetingRoomTitle = meetingRoom[0].placenm;
  const meetingRoomAddr = meetingRoom[0].svcnm;
  const meetingRoomTel = meetingRoom[0].telno;
  const meetingRoomTime = meetingRoom[0].v_min + "~" + meetingRoom[0].v_max;
  return (
    <>
      <ImgDiv src={meetingRoomImg}></ImgDiv>
      <TitleDiv>{meetingRoomTitle}</TitleDiv>
      <ContentsDiv>{meetingRoomAddr}</ContentsDiv>
      <SubDiv>
        <BsTelephone className="SubDivIcons" />
        <ContentsDiv>{meetingRoomTel}</ContentsDiv>
      </SubDiv>
      <SubDiv>
        <BiTimeFive className="SubDivIcons" />
        <ContentsDiv>{meetingRoomTime}</ContentsDiv>
      </SubDiv>
    </>
  );
};

export default ReservationDetail;
