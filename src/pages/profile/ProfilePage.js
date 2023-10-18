import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Header from "../../common/Header";
import UserInfo from "../../components/profile/UserInfo";

// bg-color
import color from "./../../assets/color.png";

// icons
import { FcAddImage } from "react-icons/fc";

// apis
import { fetchEditInfo, fetchGetUserInfo } from "../../api/profile";
import { fetchAccountDeletion, fetchSignOut } from "../../api/auth";

// styles
import { Container, BackColor, MainSection } from '../../styles/CommonStyles';

const Mid = styled.div`
  background: #f8f8f8;
  width: 100%;
  margin-left: 35px;
  border-radius: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const NameInput = styled.input`
  width: 100%;
  height: 20px;
  font-size: 14px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Buttons = styled.div`
  margin-top: 20vh;
  margin-left: 55vw;
  width: 250px;
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
`;

const Profile = styled.div`
  margin-top: 80px;
  margin-left: 120px;
`;

const ProfileImg = styled.img`
  width: 128px;
  height: 128px;
  margin-right: 50px;
  border-radius: 50%;
  border: solid 1px #d8d8d8;
  float: left;
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

const Btn = styled.button`
  padding: 5px 9px;
  font-size: 12px;
  border: solid 1px #8165df;
  border-radius: 5px;
  background: none;
  color: #8165df;
  cursor: pointer;
`;

const Last = styled.div`
  background: #f8f8f8;
  width: 60vw;
  height: 340px;
  border-radius: 20px;
`;

const ProfilePage = () => {
  const navigate = useNavigate();
  const InputRef = useRef(null);
  const formData = new FormData();
  const userId = localStorage.getItem("userId");
  const [info, setInfo] = useState({
    username: "",
    profile: "./profile.png",
    role: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState(info.username);

  useEffect(() => {
    getUserInfo();
  }, []);

  // 유저정보 조회
  const getUserInfo = async () => {
    try {
      const res = await fetchGetUserInfo();

      setInfo({
        ...info,
        username: res.data.username,
        profile: res.data.profile,
        role: res.data.role,
      });
    } catch (error) {
      alert(error);
    }
  };

  // 회원탈퇴 버튼 클릭
  const handleAccountDeletionClick = async () => {
    const userConfirmation = prompt(
      "회원탈퇴를 진행하려면 '회원탈퇴'라고 입력해주세요."
    );
    try {
      if (userConfirmation === "회원탈퇴") {
        const res = await fetchAccountDeletion(userId);

        if (res.data) {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("userId");

          navigate("/auth/sign-in");
        }
      } else {
        alert(
          "입력이 일치하지 않습니다. 회원탈퇴를 원하시면 '회원탈퇴'라고 정확히 입력해주세요."
        );
      }
    } catch (error) {
      alert(error);
    }
  };

  // 로그아웃 버튼 클릭
  const handleSignOutClick = async () => {
    try {
      const res = await fetchSignOut();

      if (res.data) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userId");

        navigate("/auth/sign-in");
      } else {
        alert("로그아웃 실패!");
      }
    } catch (error) {
      alert(error);
    }
  };

  // 프로필, 이름 수정 버튼 클릭
  const handleOnEditInfoBtn = async () => {
    formData.append("image", info.profile);
    formData.append("username", info.username);

    try {
      const res = await fetchEditInfo(userId, formData);

      if (res.data) {
        alert("수정 성공!");

        setIsEdit(false);
      } else {
        alert("수정 실패!");
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleOnImgUpload = async e => {
    if (!e.target.files) {
      return;
    }

    setInfo({
      ...info,
      profile: e.target.files[0],
    });
  };

  return (
    <Container>
      <MainSection className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <Mid>
          <Title>마이페이지</Title>
          <Profile>
            {!isEdit ? (
              <>
                <ProfileImg src={info.profile} />
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
                  onChange={handleOnImgUpload}
                  type="file"
                  hidden={true}
                  ref={InputRef}
                  multiple="multiple"
                  accept="image/jpg, image/png, image/jpeg"
                />
                <UserInfo
                  username={
                    <NameInput
                      name="editName"
                      value={editName}
                      onChange={e => setEditName(e.target.value)}
                    />
                  }
                  role={info.role}
                />
              </>
            )}
          </Profile>
          <Buttons>
            {!isEdit ? (
              <Btn onClick={() => setIsEdit(true)}>회원 정보 수정</Btn>
            ) : (
              <Btn onClick={() => handleOnEditInfoBtn()}>변경된 정보 저장</Btn>
            )}
            <Btn onClick={() => handleSignOutClick()}>로그아웃</Btn>
            <Btn onClick={() => handleAccountDeletionClick()}>회원탈퇴</Btn>
          </Buttons>
        </Mid>
        <Last />
      </MainSection>
    </Container>
  );
};

export default ProfilePage;
