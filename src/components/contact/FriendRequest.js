import { useQuery } from '@tanstack/react-query';

import { TiUserAdd } from "../../common/icons/index";

import * as S from './styles/FriendRequest.style';

import {
  fetchRequestUser,
  useRequestAccept
} from '../../query-hooks/useContact';

const FriendRequest = ({ userId }) => {
  const { data: requestList } = useQuery(fetchRequestUser(userId));
  const { handleOnAccept } = useRequestAccept();

  return (
    <S.ContactListWrap>
      {requestList?.map((item) => {
        return (
          <S.ContactListBox key={item.id}>
            <S.ContactProfileBox>
              <S.ProfileImg
                src={item.profile ?? "./new.png"}
                alt='user profile'
              />
            </S.ContactProfileBox>
            <S.ContactUserInfoBox>
              <S.ContactUserInfo>{item.username}</S.ContactUserInfo>
            </S.ContactUserInfoBox>
            <S.ButtonBox>
              <S.Button
                onClick={() => handleOnAccept(userId, item.id)}
                aria-label='요청 수락'
              >
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