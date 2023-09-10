import React, { useState } from "react";
import styled from "styled-components";

// icon, dummy-data
import { FiSend } from "react-icons/fi";
import { FaRegAddressBook } from "react-icons/fa";
import { HiHeart, HiOutlineHeart, HiOutlineDotsHorizontal, } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import profileExImg from "./../../assets/profileExImg.png";

import data from "./contactsData.json";

const MainContacts = () => {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(false);
  const handleOnClickBtn = () => {
    if (search === "") alert("검색어를 입력해 주세요!");
  };
  const arr = data;
  const [heart, setHeart] = useState(false);
  return (
    <ContactWrap>
      <HeaderLeft>
        <FaRegAddressBook className="true" style={{ padding: "0" }} />
        <HeadTitle>Contacts</HeadTitle>
        <SearchDiv>
          <SearchInput onChange={(e) => setSearch(e.target.value)} />
          <SearchButton onClick={handleOnClickBtn}>
            <BiSearch />
          </SearchButton>
        </SearchDiv>
      </HeaderLeft>
      {arr.map((item, idx) => {
        return (
          <ContactDiv>
            <MenuDiv>
              <HiOutlineDotsHorizontal style={{ color: "lightgray" }} />
            </MenuDiv>
            <ProfileImg src={profileExImg} />
            <NameText>{item.name}</NameText>
            <CalendarButton>Calendar</CalendarButton>
            <ButtonsDiv>
              <IconButton>
                <FiSend style={{ width: "12px" }} />
              </IconButton>
              <IconButton
                onClick={() => {
                  setHeart(!heart);
                }}
              >
                {heart ? (
                  <HiHeart style={{ width: "12px" }} />
                ) : (
                  <HiOutlineHeart style={{ width: "12px" }} />
                )}
              </IconButton>
            </ButtonsDiv>
          </ContactDiv>
        );
      })}
    </ContactWrap>
  );
};
//styled
const ContactWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: scroll;
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

const ContactDiv = styled.div`
  width: 147px;
  height: 219px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
const MenuDiv = styled.div`
  margin-left: 110px;
  margin-top: -30px;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;
const NameText = styled.div`
  margin-top: 10px;
  font-size: 13px;
`;
const CalendarButton = styled.div`
  width: 114px;
  border-radius: 4px;
  background: #9c9c9c;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  font-size: 8px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 114px;
`;
const IconButton = styled.div`
  color: #fff;
  border-radius: 4px;
  background: #8165df;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  width: 52px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export default MainContacts;
