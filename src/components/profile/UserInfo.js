import * as S from './styles/UserInfo.style';

const UserInfo = ({ username, role }) => {
  return (
    <S.UserInfoBox>
      <S.Info>
        이름 l <S.Text>{username}</S.Text>
      </S.Info>
      <S.Info>
        등급 l <S.Text>{role}</S.Text>
      </S.Info>
    </S.UserInfoBox>
  );
};

export default UserInfo;
