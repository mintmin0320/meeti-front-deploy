import React from "react";
import { useNavigate } from 'react-router-dom';
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// icons
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiMapPinLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

// styles
const MenuBox = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
`;

const SearchWrap = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const PageTitle = styled.h1`
  height: 100%;
  display: flex;
  align-items: center;
  color: #6f5cea;
  font-size: 15px;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 28px;
  border-radius: 30px;
  padding-left: 15px;
  border: 1px solid #8165df;
`;

const SearchButton = styled.button`
  width: 35px;
  height: 35px;
  color: #6f5cea;
  border: none;
  background: #f0ebfa;
  border-radius: 50%;
  margin-left: -15px;
  cursor: pointer;
`;

// 지역별 분류
const AreaClassification = styled.div`
  width: 95%;
  height: 80px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(8, 1fr);
  margin-left: 20px;
`;

const AreaButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  border: 1px solid #8165df;
  font-size: 13px;
  font-weight: 700;
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

const OfficeItem = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  margin: 10px;  
  border-bottom: solid 1px #E6E6E6;
`;

const OfficeImgBox = styled.div`
  width: 25%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 오피스 이미지
const OfficeImg = styled.img`
  width: 140px;
  height: 80px;
`;

const OfficeInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OfficeInfoBox = styled.div`
  width: 75%;
  height: 95%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

const PlaceName = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #535571;
  font-size: 14px;
`;

const AreaName = styled.p`
  width: 100px;
  height: 15px;
  font-size: 13px;
  font-weight: 700;
  color: #8165df;
  background: #f8f8f8;
`;

const PayText = styled.p`
  color: #535571;
  font-size: 13px;
  &::before {
    content: "💰";
  }
  margin: 3px;
`;

const OfficeStatus = styled.div`
  color: red;
  font-size: 12px;
`;

// 아이템 좌측 버튼 box
const TooltipBox = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TooltipButton = styled.button`
  width: 65px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 5px;
  font-size: 12px;
  background: #8165df;
  cursor: pointer;
  `;

const TelNumTooltipButton = styled.button`
  width: 65px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #535571;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 12px;
  margin: 5px;
  background: #ffffff;
  cursor: pointer;
`;

// 오피스 리스트
const OfficeListBox = styled.div`
  width: 100%;
  height: calc(100% - 180px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const AddButton = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border: none;
  border-radius: 5px;
  color: #6f5cea;
  background: #f0ebfa;
  cursor: pointer;
`;

const OfficeList = ({
  officeList,
  handleAreaButton,
  handleSearchOffice,
  handleChange,
}) => {
  const areaArr = ["전체", "중구", "동대문구", "용산구", "광진구", "마포구", "종로구", "강북구", "서초구", "양천구", "동작구", "구로구", "노원구", "중랑구", "영등포구",];
  const navigator = useNavigate();

  const Classification = () => {
    return (
      <AreaClassification>
        {areaArr.map((item) =>
          <AreaButton
            key={item}
            onClick={() => handleAreaButton(item)}
          >
            {item}
          </AreaButton>
        )}
      </AreaClassification>
    );
  };

  const Card = () => {
    return (
      <OfficeListBox>
        {officeList.map((office) => (
          <OfficeItem key={office?.id}>
            <OfficeImgBox>
              <OfficeImg src={office?.image} alt="이미지 없음" />
            </OfficeImgBox>
            <OfficeInfoWrap>
              <OfficeInfoBox>
                <PlaceName>{office?.placeName}</PlaceName>
                <AreaName>{office?.address}</AreaName>
                <PayText>{office?.pay}원</PayText>
                {office?.status ? (
                  <OfficeStatus style={{ color: 'green' }}>
                    🟢 대여가능
                  </OfficeStatus>
                ) : (
                  <OfficeStatus style={{ color: 'red' }}>
                    🔴 대여완료
                  </OfficeStatus>
                )}
              </OfficeInfoBox>
              <TooltipBox>
                <Link
                  to="/reservation/detail"
                  state={{ officeId: office.id }}
                  style={{ textDecoration: "none" }}
                >
                  <TooltipButton>예약하기</TooltipButton>
                </Link>
                <TelNumTooltipButton
                  onClick={() => {
                    alert(`${office.telNum}`);
                  }}
                >
                  전화하기
                </TelNumTooltipButton>
              </TooltipBox>
            </OfficeInfoWrap>
          </OfficeItem>
        ))}
      </OfficeListBox>
    );
  };

  return (
    <>
      <MenuBox>
        <SearchWrap>
          <RiMapPinLine className="true" style={{ padding: "0" }} />
          <PageTitle>Reservation</PageTitle>
          <SearchBox>
            <SearchInput onChange={handleChange} />
            <SearchButton
              name='search'
              onClick={handleSearchOffice}>
              <BiSearch size='20px' />
            </SearchButton>
          </SearchBox>
        </SearchWrap>
        <AddButton
          onClick={() => {
            navigator('/reservation/add-office');
          }}
        >
          <AiOutlinePlusCircle size='20px' />
        </AddButton>
      </MenuBox>
      <Classification />
      <Card />
    </>
  );
};

export default OfficeList;