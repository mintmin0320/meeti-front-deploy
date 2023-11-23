import { useQuery } from '@tanstack/react-query';
import { useState } from "react";

import UserInfo from './UserInfo';

import * as S from './styles/ProfileContent.style';

import { fetchUserData, useEditInfo } from '../../query-hooks/useProfile';

const ProfileContent = ({
  handleAccountDeletion,
  handleSignOut,
}) => {
  const userId = localStorage.getItem("userId");
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState('');
  const [profile, setProfile] = useState('');

  const { data: info } = useQuery(fetchUserData(userId));
  const { postEdit } = useEditInfo();

  const handleImgUpload = (e) => {
    if (!e.target.files) {
      return;
    }

    setProfile(e.target.files[0]);
  };

  // 프로필, 이름 수정 저장
  const handleClick = async () => {
    if (editName === '' || profile === '') {
      alert('변경할 이름을 입력하고, 프로필 사진을 선택해 주세요');

      return;
    }

    const formData = new FormData();

    formData.append("image", profile);
    formData.append("username", editName);

    await postEdit({ userId, formData });

    setIsEdit(false);
  };

  return (
    <S.ProfileSection>
      <S.PageTitle>마이페이지</S.PageTitle>
      <S.ProfileBox>
        <UserInfo
          info={info}
          setEditName={setEditName}
          isEdit={isEdit}
          handleImgUpload={handleImgUpload}
        />
      </S.ProfileBox>
      <S.ButtonBox>
        {!isEdit ? (
          <S.Button
            onClick={() => setIsEdit(true)}
            aria-label='정보 수정'
          >
            정보 수정
          </S.Button>
        ) : (
          <S.Button
            onClick={handleClick}
            aria-label='변경된 정보 저장'
          >
            변경된 정보 저장
          </S.Button>
        )}
        <S.Button
          onClick={() => handleSignOut(userId)}
          aria-label='로그아웃'
        >
          로그아웃
        </S.Button>
        <S.Button
          onClick={() => handleAccountDeletion(userId)}
          aria-label='회원탈퇴'
        >
          회원탈퇴
        </S.Button>
      </S.ButtonBox>
    </S.ProfileSection>
  );
};

export default ProfileContent;