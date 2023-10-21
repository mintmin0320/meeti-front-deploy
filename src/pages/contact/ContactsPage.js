import React, { useState } from "react";

import Header from '../../common/Header';
import ContactList from "../../components/contact/ContactList";
import FavoritesList from '../../components/contact/FavoritesList';
import MainContacts from "../../components/contact/MainContacts";
import FriendRequest from '../../components/contact/FriendRequest';

// bg-color, global-styles
import color from "./../../assets/color.png";
import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
  RightSection,
} from '../../styles/CommonStyles';

// styles
import * as S from './styles/ContactsPage.style';
import { fetchContactsList, fetchDeleteContacts, fetchOnFavorite } from '../../api/contact';

const ContactsPage = () => {
  const userId = localStorage.getItem("userId");
  const [isStatus, setIsStatus] = useState(false);
  const [contactsList, setUserList] = useState([]);
  const [refreshKey, setRefreshKey] = useState(false);

  // useEffect(() => {
  //   // getContactsList();
  // }, [refreshKey]);

  // 친구 리스트 조회
  const getContactsList = async () => {
    try {
      const res = await fetchContactsList(userId);

      setUserList(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 즐겨찾기 등록/해제
  const handleOnFavorite = async (friendId) => {
    try {
      await fetchOnFavorite(userId, friendId);

      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  // 즐겨찾기 등록/해제
  const handleDeleteContacts = async (friendId) => {
    try {
      await fetchDeleteContacts(userId, friendId);

      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <MainSection className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <LeftSection>
          <S.TextBox>
            <S.Tittle
              onClick={() => setIsStatus(false)}
              isActive={!isStatus}
            >
              연락처 |
            </S.Tittle>
            &nbsp;
            <S.Tittle
              onClick={() => setIsStatus(true)}
              isActive={isStatus}
            >
              즐겨찾기
            </S.Tittle>
          </S.TextBox>
          {!isStatus ?
            <ContactList
              contactsList={contactsList}
              handleOnFavorite={handleOnFavorite}
              handleDeleteContacts={handleDeleteContacts}
            />
            :
            <FavoritesList />
          }
          <S.TittleText>요청</S.TittleText>
          <FriendRequest />
        </LeftSection>
        <RightSection>
          <MainContacts />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default ContactsPage;
