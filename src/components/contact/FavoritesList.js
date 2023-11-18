import { useQuery } from '@tanstack/react-query';

import { AiOutlineCalendar } from "react-icons/ai";
import { HiHeart } from "react-icons/hi";
import { TiUserDelete } from "react-icons/ti";

import * as S from './styles/FavoritesList.style';

import {
  fetchFavorite,
  useDeleteContacts,
  useOnFavorites
} from '../../query-hooks/useContact';

const FavoritesList = ({
  userId,
  openModal,
}) => {
  const { data: favoritesList } = useQuery(fetchFavorite(userId));
  const { handleDeleteContacts } = useDeleteContacts();
  const { handleOnFavorite } = useOnFavorites();

  return (
    <S.ContactListWrap>
      {favoritesList?.map((item) => {
        return (
          <S.ContactListBox key={item.id}>
            <S.ContactProfileBox>
              <S.ProfileImg src={item.profile ?? "./new.png"} />
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
              <S.Button onClick={() => handleOnFavorite(item.id)}>
                <HiHeart style={{ width: "12px" }} />
              </S.Button>
            </S.ButtonBox>
          </S.ContactListBox>
        )
      })}
    </S.ContactListWrap>
  );
};

export default FavoritesList;