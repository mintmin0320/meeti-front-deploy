import { useQuery } from '@tanstack/react-query';

import { AiOutlineCalendar } from "react-icons/ai";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { TiUserDelete } from "react-icons/ti";

import * as S from './styles/ContactList.style';

import { fetchContacts } from '../../query-hooks';

const RecentContacts = ({
  userId,
  handleOnFavorite,
  handleDeleteContacts,
  openModal
}) => {
  const { data: contactsList } = useQuery(fetchContacts(userId));

  return (
    <S.ContactListWrap>
      {contactsList?.map((item) => {
        return (
          <S.ContactListBox key={item.id}>
            <S.ContactProfileBox>
              <S.ProfileImg src={item.profile || "./new.png"} />
            </S.ContactProfileBox>
            <S.ContactUserInfoBox>
              <S.ContactUserInfo>{item.username}</S.ContactUserInfo>
            </S.ContactUserInfoBox>
            <S.ButtonBox>
              <S.Button
                onClick={() => openModal(item.id)}
                style={{ backgroundColor: "#9c9c9c" }}
              >
                <AiOutlineCalendar style={{ color: "#fff" }} />
              </S.Button>
              <S.Button onClick={() => handleDeleteContacts(item.id)}>
                <TiUserDelete style={{ color: "#fff" }} />
              </S.Button>
              <S.Button
                onClick={() => handleOnFavorite(item.id)}
              >
                {item.favorite ? (
                  <HiHeart style={{ width: "14px" }} />
                ) : (
                  <HiOutlineHeart style={{ width: "14px" }} />
                )}
              </S.Button>
            </S.ButtonBox>
          </S.ContactListBox>
        )
      })}
    </S.ContactListWrap>
  );
};

export default RecentContacts;
