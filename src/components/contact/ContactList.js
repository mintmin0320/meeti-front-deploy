import React, { useEffect, useState } from "react";
import styled from "styled-components";

// icons, dummy-data
import { AiOutlineCalendar } from "react-icons/ai";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { TiUserDelete } from "react-icons/ti";

// apis
import { fetchDeleteFriend, fetchMyFriend, fetchOnFavorite } from '../../api/contact';

// styles
const ContactListWrap = styled.div`
  width: 78%;
  height: calc(47% - 60px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContactListBox = styled.article`
  width: 100%;
  height: 65px;
  display: flex;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.09);
  margin-bottom: 13px;
  background: #fff;
`;

// 프로필
const ContactProfileBox = styled.div`
  width: 55px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px 0 0 0;
`;

const ProfileImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 34px;
`;

// 유저, 소속 정보
const ContactUserInfoBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactUserInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  font-size: 13px;
  font-weight: bolder;
`;

// 일정 확인, 친구 삭제, 즐겨찾기 추가 버튼 박스 
const ButtonBox = styled.div`
  width: calc(100% - (45% + 55px));
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  background: #8165df;
  cursor: pointer;
`;



const RecentContacts = () => {
  const userId = localStorage.getItem("userId");
  const [userList, setUserList] = useState([]);
  const [refreshKey, setRefreshKey] = useState(false);

  useEffect(() => {
    getFriendList();
  }, [refreshKey]);

  const getFriendList = async () => {
    try {
      const res = await fetchMyFriend(userId);

      setUserList(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteFriend = async (friendId) => {
    try {
      await fetchDeleteFriend(userId, friendId);

      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnFavorite = async (friendId) => {
    try {
      await fetchOnFavorite(userId, friendId);

      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactListWrap>
      {userList.map((user) => {
        return (
          <ContactListBox key={user.id}>
            <ContactProfileBox>
              <ProfileImg src={user.profile} />
            </ContactProfileBox>
            <ContactUserInfoBox>
              <ContactUserInfo>{user.username}</ContactUserInfo>
            </ContactUserInfoBox>
            <ButtonBox>
              <Button
                style={{ backgroundColor: "#9c9c9c" }}
              >
                <AiOutlineCalendar style={{ color: "#fff" }} />
              </Button>
              <Button onClick={() => handleDeleteFriend(user.id)}>
                <TiUserDelete style={{ color: "#fff" }} />
              </Button>
              <Button
                onClick={() => handleOnFavorite(user.id)}
              >
                {user.favorite ? (
                  <HiHeart style={{ width: "14px" }} />
                ) : (
                  <HiOutlineHeart style={{ width: "14px" }} />
                )}
              </Button>
            </ButtonBox>
          </ContactListBox>
        )
      })}
    </ContactListWrap>
  );
};

export default RecentContacts;
