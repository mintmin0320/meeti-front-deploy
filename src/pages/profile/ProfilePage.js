import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../common/Header";
import ProfileContent from '../../components/profile/ProfileContent';

// bg-color
import color from "./../../assets/color.png";

// apis
import { fetchEditInfo, fetchGetUserInfo } from "../../api/profile";
import { fetchAccountDeletion, fetchSignOut } from "../../api/auth";

// styles
import { Container, BackColor, MainSection } from '../../styles/CommonStyles';

const ProfilePage = () => {
  const navigate = useNavigate();
  const formData = new FormData();
  const userId = localStorage.getItem("userId");
  const [isEdit, setIsEdit] = useState(false);
  const [info, setInfo] = useState({
    username: "",
    profile: "./profile.png",
    role: "",
  });

  useEffect(() => {
    // getUserInfo();
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

  const [editName, setEditName] = useState(info.username);

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
      alert('회원탈퇴 실패');
      console.log(error);
    }
  };

  // 로그아웃 버튼 클릭
  const handleSignOut = async () => {
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

  // 프로필, 이름 수정 저장
  const handleEditInfo = async () => {
    formData.append("image", info.profile);
    formData.append("username", editName);

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

  const handleImgUpload = (e) => {
    if (!e.target.files) {
      return;
    }

    setInfo({
      ...info,
      profile: e.target.files[0],
    });
  };

  const handleEditButton = () => {
    setIsEdit(true);
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setEditName((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  return (
    <Container>
      <MainSection>
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <ProfileContent
          info={info}
          isEdit={isEdit}
          handleAccountDeletionClick={handleAccountDeletionClick}
          handleEditInfo={handleEditInfo}
          handleImgUpload={handleImgUpload}
          handleSignOut={handleSignOut}
          handleEditButton={handleEditButton}
          handleChange={handleChange}
        />
      </MainSection>
    </Container>
  );
};

export default ProfilePage;
