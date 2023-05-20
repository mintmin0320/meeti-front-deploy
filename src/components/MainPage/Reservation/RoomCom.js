import React from "react";
import DataList from "../../../reservation.json";
import styled from "styled-components";

const RoomDiv = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  height: 87px;
  margin: 10px;
`;
const RoomImgDiv = styled.div`
  width: 25%;
`;
const RoomImg = styled.img`
  width: 140px;
  height: 87px;
  margin: 10px;
`;

const RoomArrayList = styled.div`
  display: flex;
  flex-direction: column;
`;
const RoomContents = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 87px;

  justify-content: space-between;
`;

const RoomTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  height: 87px;
  margin: 10px;
`;
const RoomTitle = styled.div`
  font-size: 14px;
  font-style: border;
  display: flex;
  flex-direction: row;
  margin: 3px;
`;
const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;
const RoomReservButton = styled.div`
  width: 61px;
  height: 18px;
  background: #8165df;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 10px;
  text-align: center;
  margin: 5px;
  color: #ffffff;
  cursor: pointer;
`;
const RoomCallButton = styled.div`
  width: 61px;
  height: 18px;
  background: #ffffff;
  border: 0.5px solid #535571;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 10px;
  text-align: center;
  margin: 5px;
  cursor: pointer;
`;
const SubOption = styled.div`
  margin: 3px;
  padding: 2px;
  padding-left: 6px;
  padding-right: 6px;
  background: #f8f8f8;
  border: 1px solid #8165df;
  border-radius: 50px;
  width: auto;
  height: 15px;
  font-size: 10px;
  color: #8165df;
  text-align: center;
`;
const SubOptionsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const RoomCom = () => {
  const meetingRoom = DataList.filter((it) => it.minclassnm === "회의실");

  //const room = meetingRoom.map((it)=>{it.areanm + it.svcnm})

  return (
    <RoomArrayList>
      {meetingRoom.map((arr) => (
        <RoomDiv>
          <RoomImgDiv>
            <RoomImg src={arr.imgurl} />
          </RoomImgDiv>
          <RoomContents>
            <RoomTitleDiv>
              <SubOption
                style={{
                  width: "40px",
                  border: "1px solid #9C9C9C",
                  color: "#9C9C9C",
                  margin: "2px",
                }}
              >
                {arr.areanm}
              </SubOption>
              <RoomTitle>{arr.svcnm}</RoomTitle>
              <SubOptionsDiv>
                <SubOption>미팅룸</SubOption>
                <SubOption>프레젠테이션룸</SubOption>
              </SubOptionsDiv>
            </RoomTitleDiv>

            <ButtonsDiv>
              <RoomReservButton>예약하기</RoomReservButton>
              <RoomCallButton>전화하기</RoomCallButton>
            </ButtonsDiv>
          </RoomContents>
        </RoomDiv>
      ))}
    </RoomArrayList>
  );
};

export default RoomCom;
