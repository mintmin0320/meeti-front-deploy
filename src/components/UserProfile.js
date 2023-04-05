import React from "react";
import styled from "styled-components";
import { IoIosShareAlt, IoIosHeart } from "react-icons/io";
import profileExImg from "./../assets/profileExImg.png";

const ProfileBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 245px;
  height: 66px;
  background: #ffffff;
  border: 0.8px solid #595959;
  border-radius: 10px;

  //나중에 위치는 변경
  left: 868px;
  top: 52px;

  display: flex;
`;

const ProfileImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
  background-color: black;
`;

const ProfileText = styled.div`
  margin-left: 9px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const ProfileTextAffiliation = styled.span`
  font-size: 10px;
  color: #000000;
  margin-bottom: 2px;
`;
//소속
const ProfileTextName = styled.span`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 2px;
`;
//userName
const ProfileId = styled.span`
  font-size: 10px;
  color: #acacac;
  margin-bottom: 2px;
`;
const ProfileIcons = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserProfile = () => {
  return (
    <div>
      <ProfileBox>
        <ProfileImg src={profileExImg} />
        <ProfileText>
          <ProfileTextAffiliation>동양미래대학교</ProfileTextAffiliation>
          <ProfileTextName>전유진</ProfileTextName>
          <ProfileId>@dy_yujin</ProfileId>
        </ProfileText>
        <ProfileIcons>
          <IoIosShareAlt className="IoIosShareAlt" />
          <IoIosHeart className="IoIosHeart" />
        </ProfileIcons>
      </ProfileBox>
    </div>
  );
};
export default UserProfile;
