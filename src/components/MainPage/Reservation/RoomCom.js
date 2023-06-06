import React, { useState } from "react";
import DataList from "../../../reservation.json";
import styled, { css } from "styled-components";
import { RiMapPinLine } from "react-icons/ri";
import { AiOutlineUnorderedList, AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import ReservationAdd from "./ReservationAdd";
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const HeaderLeft = styled.div`
  display: flex;
`;

const HeadTitle = styled.div`
  color: #6f5cea;
  font-size: 14px;
  margin-top: 30px;
  margin-left: -10px;
`;
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
const RoomArrayClass = styled.div`
  display: flex;
  margin-left: 20px;
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
  justify-content: center;
  margin: 5px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const RoomCallButton = styled.div`
  width: 61px;
  height: 18px;
  background: #ffffff;
  border: 0.5px solid #535571;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 10px;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
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
  cursor: pointer;
  ${css`
    &:hover {
      background-color: #8165df;
      color: #ffffff;
    }
  `}
`;
const SubOptionsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const AddButton = styled.div`
  width: 32px;
  height: 32px;
  background: #f0ebfa;
  border-radius: 5px;
  cursor: pointer;
  color: #6f5cea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  margin-right: 50px;
`;
const RoomCom = () => {
  const meetingRoom = DataList.filter((it) => it.minclassnm === "회의실"); //회의실만
  // const place = meetingRoom.map((it) => it.areanm); // 지역만 (임시))
  // //지역별 배열
  // const yongsangu = meetingRoom.filter((it) => it.areanm === "용산구");
  // const seochogu = meetingRoom.filter((it) => it.areanm === "서초구");
  // const gwangjingu = meetingRoom.filter((it) => it.areanm === "광진구");
  // const songpagu = meetingRoom.filter((it) => it.areanm === "송파구");
  // const junggu = meetingRoom.filter((it) => it.areanm === "중구");
  // const ddmgu = meetingRoom.filter((it) => it.areanm === "동대문구");
  // const jongnogu = meetingRoom.filter((it) => it.areanm === "종로구");
  // const gangbukgu = meetingRoom.filter((it) => it.areanm === "강북구");
  // const yangcheongu = meetingRoom.filter((it) => it.areanm === "양천구");
  // const dongjakgu = meetingRoom.filter((it) => it.areanm === "동작구");
  // const gurogu = meetingRoom.filter((it) => it.areanm === "구로구");
  // const nowongu = meetingRoom.filter((it) => it.areanm === "노원구");
  // const jungnanggu = meetingRoom.filter((it) => it.areanm === "중랑구");
  // const ydpgu = meetingRoom.filter((it) => it.areanm === "영등포구");

  // //지역별 State
  const [yongsanguState, setYongsanguState] = useState(false);
  const [seochoguState, setSeochoguState] = useState(false);
  const [gwangjinguState, setGwangjinguState] = useState(false);
  const [songpaguState, setSongpaguState] = useState(false);
  const [jungguState, setJungguState] = useState(false);
  const [ddmguState, setDdmguState] = useState(false);
  const [jongnoguState, setJongnoguState] = useState(false);
  const [gangbukguState, setGangbukguState] = useState(false);
  const [yangcheonguState, setYangcheonguState] = useState(false);
  const [dongjakguState, setDongjakguState] = useState(false);
  const [guroguState, setGuroguState] = useState(false);
  const [nowonguState, setNowonguState] = useState(false);
  const [jungnangguState, setJungnangguState] = useState(false);
  const [ydpguState, setYdpguState] = useState(false);

  const [meetiArr, setMeetiArr] = useState(meetingRoom);

  const HandleonClick = (params, e) => {
    if (params === "용산구") {
      setMeetiArr(meetingRoom.filter((it) => it.areanm === "용산구"));
    } else if (params === "서초구") {
      setMeetiArr(meetingRoom.filter((it) => it.areanm === "서초구"));
    } else {
      setMeetiArr(meetingRoom);
    }
  };
  const arrayFilter = (local) => {
    setMeetiArr(
      meetingRoom.filter((it) => it.areanm === local.target.innerHTML)
    );
  };
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <Header>
        <HeaderLeft>
          <RiMapPinLine className="true" style={{ padding: "0" }} />
          <HeadTitle>Reservation</HeadTitle>
        </HeaderLeft>

        <AddButton
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <AiOutlinePlusCircle /> : <AiOutlineUnorderedList />}
        </AddButton>
      </Header>

      {isOpen ? (
        <>
          <RoomArrayClass>
            <SubOption
              className={yongsanguState ? "PlaceTrue" : "PlaceFalse"}
              onClick={(e) => {
                HandleonClick("용산구", e);
              }}
            >
              용산구
            </SubOption>
            <SubOption
              className={seochoguState ? "PlaceTrue" : "PlaceFalse"}
              onClick={(e) => {
                HandleonClick("서초구", e);
              }}
            >
              서초구
            </SubOption>
          </RoomArrayClass>
          <RoomArrayList>
            {meetiArr.map((arr) => (
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
                    <Link
                      to="/reservationdetail"
                      style={{ textDecoration: "none" }}
                    >
                      <RoomReservButton>예약하기</RoomReservButton>
                    </Link>
                    <RoomCallButton
                      onClick={() => {
                        window.alert(`${meetingRoom[0].telno}`);
                      }}
                    >
                      전화하기
                    </RoomCallButton>
                  </ButtonsDiv>
                </RoomContents>
              </RoomDiv>
            ))}
          </RoomArrayList>
        </>
      ) : (
        <RoomArrayList>
          <ReservationAdd />
        </RoomArrayList>
      )}
    </>
  );
};

export default RoomCom;
