import React from "react";
import styled from "styled-components";

// icons, dummy-data
import { AiOutlineCalendar } from "react-icons/ai";
import { HiHeart } from "react-icons/hi";
import { TiUserDelete } from "react-icons/ti";

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

const FavoritesList = ({
  favoritesList,
  handleDeleteContacts,
  handleOnFavorite,
  openModal,
}) => {
  return (
    <ContactListWrap>
      {favoritesList.map((item) => {
        return (
          <ContactListBox key={item.id}>
            <ContactProfileBox>
              <ProfileImg src={item.profile} />
            </ContactProfileBox>
            <ContactUserInfoBox>
              <ContactUserInfo>{item.username}</ContactUserInfo>
            </ContactUserInfoBox>
            <ButtonBox>
              <Button
                onClick={() => openModal(item.id)}
                style={{ backgroundColor: "#9c9c9c" }}
              >
                <AiOutlineCalendar style={{ color: "#fff" }} />
              </Button>
              <Button onClick={() => handleDeleteContacts(item.id)}>
                <TiUserDelete style={{ color: "#fff" }} />
              </Button>
              <Button onClick={() => handleOnFavorite(item.id)}>
                <HiHeart style={{ width: "12px" }} />
              </Button>
            </ButtonBox>
          </ContactListBox>
        )
      })}
    </ContactListWrap>
  );
};

export default FavoritesList;