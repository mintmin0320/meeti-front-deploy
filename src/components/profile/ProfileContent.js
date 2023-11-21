import { useRef } from "react";

import UserInfo from './UserInfo';
import * as S from './styles/ProfileContent.style';

import { FcAddImage } from "../../common/icons/index";

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
    <S.ProfileSection>
      <S.PageTitle>마이페이지</S.PageTitle>
      <S.ProfileBox>
        {!isEdit ? (
          <>
            <S.ProfileImg
              src={info.profile || "./new.png"}
              alt='user profile'
            />
            <UserInfo username={info.username} role={info.role} />
          </>
        ) : (
          <>
            <S.AddProfileBox
              onClick={() => {
                InputRef.current?.click();
              }}
            >
              <FcAddImage size="45px" />
            </S.AddProfileBox>
            <S.Input
              type="file"
              hidden={true}
              ref={InputRef}
              multiple="multiple"
              onChange={handleImgUpload}
              accept="image/jpg, image/png, image/jpeg"
            />
            <UserInfo
              username={
                <S.NameInput
                  name="editName"
                  onChange={handleChange}
                />
              }
              role={info.role}
            />
          </>
        )}
      </S.ProfileBox>
      <S.ButtonBox>
        {!isEdit ? (
          <S.Button onClick={handleEditButton} aria-label='edit_user_info'>회원 정보 수정</S.Button>
        ) : (
          <S.Button onClick={handleEditInfo} aria-label='edit_user_info_save'>변경된 정보 저장</S.Button>
        )}
        <S.Button onClick={() => handleSignOut()}>로그아웃</S.Button>
        <S.Button onClick={() => handleAccountDeletionClick()}>회원탈퇴</S.Button>
      </S.ButtonBox>
    </S.ProfileSection>
  );
};

export default ProfileContent;