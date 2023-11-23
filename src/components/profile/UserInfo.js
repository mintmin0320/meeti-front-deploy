import { useRef } from "react";

import * as S from './styles/UserInfo.style';

import { FcAddImage } from "../../common/icons/index";

const UserInfo = ({
  info,
  isEdit,
  setEditName,
  handleImgUpload }) => {
  const InputRef = useRef(null);

  return (
    <>
      {isEdit ? (
        <>
          <S.AddProfileBox onClick={() => InputRef.current?.click()}>
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
        </>
      ) : (
        <S.ProfileImg src={info?.profile || "./new.png"} alt='user profile' />
      )}
      <S.UserInfoBox>
        <S.InfoLabel>
          이름 :
          <S.Text>
            {isEdit
              ? <S.NameInput
                name="editName"
                onChange={e => setEditName(e.target.value)}
              />
              : info?.username}
          </S.Text>
        </S.InfoLabel>
        <S.InfoLabel>
          등급 : <S.Text>{info?.role}</S.Text>
        </S.InfoLabel>
      </S.UserInfoBox>
    </>
  );
};

export default UserInfo;
