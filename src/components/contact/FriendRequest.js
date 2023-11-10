import { useQuery } from '@tanstack/react-query';

import { TiUserAdd } from "react-icons/ti";

import * as S from './styles/FriendRequest.style';

import { fetchRequestUser } from '../../query-hooks/useContact';

const FriendRequest = ({
  userId,
  handleOnAccept
}) => {
  const { data: requestList } = useQuery(fetchRequestUser(userId));

  return (
    <S.ContactListWrap>
      {requestList?.map((item) => {
        return (
          <S.ContactListBox key={item?.id}>
            <S.ContactProfileBox>
              <S.ProfileImg src={item?.profile || "./new.png"} />
            </S.ContactProfileBox>
            <S.ContactUserInfoBox>
              <S.ContactUserInfo>{item?.username}</S.ContactUserInfo>
            </S.ContactUserInfoBox>
            <S.ButtonBox>
              <S.Button onClick={() => handleOnAccept(item?.id)}>
                <TiUserAdd color='#fff' size='20px' />
              </S.Button>
            </S.ButtonBox>
          </S.ContactListBox>
        )
      })}
    </S.ContactListWrap>
  );
};

export default FriendRequest;