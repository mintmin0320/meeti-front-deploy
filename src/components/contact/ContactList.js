import React, { useState } from "react";

// icons
import { AiOutlineCalendar } from "react-icons/ai";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { TiUserDelete } from "react-icons/ti";

// styles
import * as S from './styles/ContactList.style';


const userList = [
  {
    id: 1,
    profile: "https://placekitten.com/50/50",
    username: "John Doe"
  },
  {
    id: 2,
    profile: "https://placekitten.com/g/50/50",
    username: "Jane Smith"
  },
  {
    id: 3,
    profile: "https://placekitten.com/51/51",
    username: "Bob Johnson"
  },
  {
    id: 4,
    profile: "https://placekitten.com/g/51/51",
    username: "Alice Kim"
  },
  {
    id: 5,
    profile: "https://placekitten.com/52/52",
    username: "Charlie Lee"
  },
];

const RecentContacts = ({
  contactsList,
  handleOnFavorite,
  handleDeleteContacts,
  openModal
}) => {
  return (
    <S.ContactListWrap>
      {contactsList.map((item) => {
        return (
          <S.ContactListBox key={item.id}>
            <S.ContactProfileBox>
              <S.ProfileImg src={item.profile || "./new.png"} />
            </S.ContactProfileBox>
            <S.ContactUserInfoBox>
              <S.ContactUserInfo>{item.username}</S.ContactUserInfo>
            </S.ContactUserInfoBox>
            <S.ButtonBox>
              <S.Button
                onClick={() => openModal(item.id)}
                style={{ backgroundColor: "#9c9c9c" }}
              >
                <AiOutlineCalendar style={{ color: "#fff" }} />
              </S.Button>
              <S.Button onClick={() => handleDeleteContacts(item.id)}>
                <TiUserDelete style={{ color: "#fff" }} />
              </S.Button>
              <S.Button
                onClick={() => handleOnFavorite(item.id)}
              >
                {item.favorite ? (
                  <HiHeart style={{ width: "14px" }} />
                ) : (
                  <HiOutlineHeart style={{ width: "14px" }} />
                )}
              </S.Button>
            </S.ButtonBox>
          </S.ContactListBox>
        )
      })}
    </S.ContactListWrap>
  );
};

export default RecentContacts;
