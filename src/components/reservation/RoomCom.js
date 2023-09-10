import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import ReservationAdd from "./ReservationAdd";

// icons
import { AiOutlineUnorderedList, AiOutlinePlusCircle } from "react-icons/ai";
import { RiMapPinLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

// apis
import {
  fetchGetOfficeData,
  fetchSearchOfficeData,
  fetchClassificationOfficeData
} from '../../api/reservation';

// styles
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  width: 90%;
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
  justify-content: center;
`;

const OfficeReservationBtn = styled.div`
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

const SubOptionArea = styled.div`
  margin: 3px;
  padding: 2px;
  padding-left: 6px;
  padding-right: 6px;
  background: #f8f8f8;
  border: 1px solid #8165df;
  border-radius: 50px;
  width: 36px;
  margin-top: 0px;
  height: 15px;
  font-size: 10px;
  color: #8165df;
  text-align: center;
`;

const SubOptionsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const StatusTextRed = styled.div`
  color: red;
  font-size: 12px;
`;

const StatusTextGreen = styled.div`
  color: green;
  font-size: 12px;
`;

const PayText = styled.div`
  color: #535571;
  font-size: 12px;
  &::before {
    content: "💰";
  }
  margin: 3px;
`;

const RoomSubTitle = styled.div`
  color: #535571;
  font-size: 12px;
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

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 28px;
  border: 1px solid #8165df;
  border-radius: 30px;
  padding-left: 15px;
`;

const SearchButton = styled.button`
  background: #f0ebfa;
  width: 32px;
  height: 32px;
  color: #6f5cea;
  border: none;
  cursor: pointer;
  margin-left: -15px;
  border-radius: 50%;
`;

const RoomCom = () => {
  const areaArr = ["전체", "중구", "동대문구", "용산구", "광진구", "마포구", "종로구", "강북구", "서초구", "양천구", "동작구", "구로구", "노원구", "중랑구", "영등포구",];
  const [isOpen, setIsOpen] = useState(true);
  const [officeList, setOfficeList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getOfficeData();
  }, []);

  const handleOnClick = async (address) => {
    if (address === "전체") {
      getOfficeData();

      return;
    }

    try {
      const res = await fetchClassificationOfficeData(address);
      setOfficeList(res);
    } catch (error) {
      alert(error);
    }
  };

  const handleOnClickBtn = () => {
    if (search === "") {
      alert("검색어를 입력해 주세요!");
    } else {
      getSearchData();
    }
  };

  const getSearchData = async () => {
    try {
      const res = await fetchSearchOfficeData(search);
      setOfficeList(res);
    } catch (error) {
      alert(error);
    }
  };

  const getOfficeData = async () => {
    try {
      const res = await fetchGetOfficeData(1);

      if (!res || res.length === 0) {
        setOfficeList([]);

        return;
      }

      setOfficeList(res);
    } catch (error) {
      alert.log(error);
    }
  };

  const Classification = () => {
    return (
      <RoomArrayClass>
        {areaArr.map((item) =>
          <SubOption
            key={item}
            onClick={() => handleOnClick(item)}
          >
            {item}
          </SubOption>
        )}
      </RoomArrayClass>
    );
  };

  const Card = () => {
    return (
      <RoomArrayList>
        {officeList.map((office) => (
          <RoomDiv key={office.id}>
            <RoomImgDiv>
              <RoomImg src={office.image} alt="이미지 없음" />
            </RoomImgDiv>
            <RoomContents>
              <RoomTitleDiv>
                <SubOptionArea>{office.address}</SubOptionArea>
                <RoomTitle>{office.addressDetail}</RoomTitle>
                <PayText>{office.pay}</PayText>
                {office.status ? (
                  <StatusTextGreen>🟢 {office.status}</StatusTextGreen>
                ) : (
                  <StatusTextRed>🔴 {office.status}</StatusTextRed>
                )}
                <RoomSubTitle>{office.placeName}</RoomSubTitle>
              </RoomTitleDiv>
              <ButtonsDiv>
                <Link
                  to="/reservation/detail"
                  state={{ officeId: office.id }}
                  style={{ textDecoration: "none" }}
                >
                  <OfficeReservationBtn>예약하기</OfficeReservationBtn>
                </Link>
                <RoomCallButton
                  onClick={() => {
                    window.alert(`${office.telNum}`);
                  }}
                >
                  전화하기
                </RoomCallButton>
              </ButtonsDiv>
            </RoomContents>
          </RoomDiv>
        ))}
      </RoomArrayList>
    );
  };

  return (
    <>
      <Header>
        <HeaderLeft>
          <RiMapPinLine className="true" style={{ padding: "0" }} />
          <HeadTitle>Reservation</HeadTitle>
          {isOpen && (
            <SearchDiv>
              <SearchInput onChange={e => setSearch(e.target.value)} />
              <SearchButton onClick={() => handleOnClickBtn()}>
                <BiSearch />
              </SearchButton>
            </SearchDiv>
          )}
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
          <Classification />
          <Card />
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