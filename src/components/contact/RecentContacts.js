import React, { useState } from "react";
import styled from "styled-components";

import profileImg from "./../../assets/profileExImg.png";

// icon
import { AiOutlineCalendar } from "react-icons/ai";
import { HiHeart, HiOutlineHeart, HiOutlineDotsHorizontal, } from "react-icons/hi";
import { TiUserDelete } from "react-icons/ti";

const RecentContacts = () => {
  const [heart, setHeart] = useState(false);

  return (
    <ContactDiv>
      <ContactLeft>
        <ProfileImg src={profileImg} />
      </ContactLeft>
      <ContactRight>
        <CalendarButton>
          <AiOutlineCalendar style={{ color: "#fff" }} />
        </CalendarButton>
        <OtherButtons>
          <TiUserDelete style={{ color: "#fff" }} />
        </OtherButtons>
        <OtherButtons
          onClick={() => {
            setHeart(!heart);
          }}
        >
          {heart ? (
            <HiHeart style={{ width: "12px" }} />
          ) : (
            <HiOutlineHeart style={{ width: "12px" }} />
          )}
        </OtherButtons>
      </ContactRight>
    </ContactDiv>
  );
};
//styled
const ContactDiv = styled.div`
  width: 232px;
  height: 47px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  margin-bottom: 10px;
`;
const ContactLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const ContactRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 34px;
  margin-left: 20px;
`;
const CalendarButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background: #9c9c9c;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px;
`;
const OtherButtons = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background: #8165df;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px;
  cursor: pointer;
  color: #fff;
`;
export default RecentContacts;
