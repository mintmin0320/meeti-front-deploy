import { useQuery } from '@tanstack/react-query';

import {
  AiOutlineCalendar,
  HiHeart,
  HiOutlineHeart,
  TiUserDelete
} from "../../common/icons/index";

import * as S from './styles/ContactList.style';

import {
  fetchContacts,
  fetchFavorite,
  useDeleteContacts,
  useOnFavorites,
} from '../../query-hooks/useContact';

const ContactList = ({
  userId,
  openModal,
  isFavorites,
}) => {

  const { data: contacts } = useQuery(fetchContacts(userId));
  const { data: favorites } = useQuery(fetchFavorite(userId));
  const { handleDeleteContacts } = useDeleteContacts();
  const { handleOnFavorite } = useOnFavorites();

  const contactsList = isFavorites ? favorites : contacts;

  return (
    <S.ContactWrap>
      {contactsList?.map((item) => {
        return (
          <S.ContactBox key={item.id}>
            <S.ContactProfileBox>
              <S.ProfileImg
                src={item.profile ?? "./new.png"}
                alt='user profile' />
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
              <S.Button
                onClick={() => handleDeleteContacts(userId, item.id)}
              >
                <TiUserDelete style={{ color: "#fff" }} />
              </S.Button>
              <S.Button
                onClick={() => handleOnFavorite(userId, item.id)}
              >
                {item.favorite || isFavorites ? (
                  <HiHeart style={{ width: "14px" }} />
                ) : (
                  <HiOutlineHeart style={{ width: "14px" }} />
                )}
              </S.Button>
            </S.ButtonBox>
          </S.ContactBox>
        )
      })}
    </S.ContactWrap>
  );
};

export default ContactList;
