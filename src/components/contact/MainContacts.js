import React, { useState, useEffect } from "react";
import styled from "styled-components";

// icons
import { FaRegAddressBook } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonPlusFill } from "react-icons/bs";

import { fetchAddFriend, fetchAllUser, fetchSearchList } from '../../api/contact';

// style
const ContactWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

// 상단 검색, 페이지명
const TopBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

const PageTitle = styled.p`
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

// 하단 회원 목록
const BottomBox = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

// 회원 카드 디자인 box
const ContactDiv = styled.div`
  width: 150px;
  height: 220px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;

const NameText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
`;

// 스케줄 확인 버튼
const ScheduleCheckButton = styled.button`
  width: 114px;
  border-radius: 4px;
  background: #9c9c9c;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: bolder;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
    color: #000;
  }
`;

const ButtonBox = styled.div`
  width: 114px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 114px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  background: #8165df;
  cursor: pointer;
`;

const MainContacts = () => {
  const userId = localStorage.getItem("userId");
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshKey, setRefreshKey] = useState(false);

  useEffect(() => {
    // getFriendList();
  }, [refreshKey]);

  const getFriendList = async () => {
    try {
      const res = await fetchAllUser(userId);

      setUserList(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestFriend = async (friendId) => {
    try {
      await fetchAddFriend(userId, friendId);

      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSearchButton = async () => {
    if (search === "") {
      alert("검색어를 입력해 주세요!");

      return;
    }

    try {
      const res = await fetchSearchList(search);
      setUserList(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactWrap>
      <TopBox>
        <FaRegAddressBook className="true" style={{ padding: "0" }} />
        <PageTitle>Contacts</PageTitle>
        <SearchDiv>
          <SearchInput onChange={(e) => setSearch(e.target.value)} />
          <SearchButton onClick={handleOnSearchButton}>
            <BiSearch />
          </SearchButton>
        </SearchDiv>
      </TopBox>
      <BottomBox>
        {userList.map((user) => {
          return (
            <ContactDiv key={user.id}>
              <ProfileImg src={user.profile} />
              <NameText>{user.username}</NameText>
              <ScheduleCheckButton>Schedule</ScheduleCheckButton>
              <ButtonBox
                onClick={() => handleRequestFriend(user.id)}
              >
                <Button>
                  <BsFillPersonPlusFill />
                </Button>
              </ButtonBox>
            </ContactDiv>
          );
        })}
      </BottomBox>
    </ContactWrap>
  );
};

export default MainContacts;
