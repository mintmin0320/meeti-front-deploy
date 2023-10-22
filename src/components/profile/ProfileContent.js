import React, { useRef } from "react";
import styled from "styled-components";

import UserInfo from './UserInfo';

// icons
import { FcAddImage } from "react-icons/fc";

// styles
const ProfileSection = styled.section`
  width: 100%;
  z-index: 3;
`;

const PageTitle = styled.h1`
  height: 30px;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 5px;
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: solid 1px #d8d8d8;
`;

const ButtonBox = styled.div`
  width: 40%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  width: 130px;
  height: 40px;
  padding: 5px 9px;
  font-size: 14px;
  font-weight: 700;
  border: solid 1px #8165df;
  border-radius: 5px;
  background: none;
  color: #8165df;
  cursor: pointer;

  &:hover {
    background: #8165df;
    color: #fff;
  }
`;

const NameInput = styled.input`
  width: 100%;
  height: 20px;
  font-size: 14px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AddProfileBox = styled.button`
  width: 128px;
  height: 128px;
  margin-right: 50px;
  border-radius: 50%;
  border: solid 1px #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  float: left;
`;

const Input = styled.input`
  width: 150px;
  height: 80px;
  border: 0;
`;

const ProfileContent = ({
  info,
  isEdit,
  handleAccountDeletionClick,
  handleEditInfo,
  handleImgUpload,
  handleSignOut,
  handleEditButton,
  handleChange
}) => {
  const InputRef = useRef(null);

  return (
    <ProfileSection>
      <PageTitle>마이페이지</PageTitle>
      <ProfileBox>
        {!isEdit ? (
          <>
            <ProfileImg src={info.profile || "./new.png"} />
            <UserInfo username={info.username} role={info.role} />
          </>
        ) : (
          <>
            <AddProfileBox
              onClick={() => {
                InputRef.current?.click();
              }}
            >
              <FcAddImage size="45px" />
            </AddProfileBox>
            <Input
              type="file"
              hidden={true}
              ref={InputRef}
              multiple="multiple"
              onChange={handleImgUpload}
              accept="image/jpg, image/png, image/jpeg"
            />
            <UserInfo
              username={
                <NameInput
                  name="editName"
                  onChange={handleChange}
                />
              }
              role={info.role}
            />
          </>
        )}
      </ProfileBox>
      <ButtonBox>
        {!isEdit ? (
          <Button onClick={handleEditButton}>회원 정보 수정</Button>
        ) : (
          <Button onClick={handleEditInfo}>변경된 정보 저장</Button>
        )}
        <Button onClick={() => handleSignOut()}>로그아웃</Button>
        <Button onClick={() => handleAccountDeletionClick()}>회원탈퇴</Button>
      </ButtonBox>
    </ProfileSection>
  );
};

export default ProfileContent;