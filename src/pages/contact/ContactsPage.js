import React, { useState } from "react";

import Header from '../../common/Header';
import ContactList from "../../components/contact/ContactList";
import FavoritesList from '../../components/contact/FavoritesList';
import MainContacts from "../../components/contact/MainContacts";
import FriendRequest from '../../components/contact/FriendRequest';
import SkeletonUI from '../../components/contact/skeletonUI';

import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
  RightSection,
} from '../../styles/CommonStyles';
import color from "./../../assets/color.png";
import * as S from './styles/ContactsPage.style';

import {
  useAddContacts,
  useDeleteContacts,
  useOnFavorites,
  useRequestAccept
} from '../../query-hooks/useContact';

const ContactsPage = () => {
  const userId = localStorage.getItem("userId");
  const [isStatus, setIsStatus] = useState(false);

  /* 모달 */
  const [modalInfo, setModalInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { handleAddContacts } = useAddContacts();
  const { handleOnAccept } = useRequestAccept();
  const { handleDeleteContacts } = useDeleteContacts();
  const { handleOnFavorite } = useOnFavorites();


  const openModal = (id) => {
    setIsModalOpen(true);
    setModalInfo(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <MainSection>
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <React.Suspense fallback={<SkeletonUI count={3} />}>
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
                userId={userId}
                handleOnFavorite={handleOnFavorite}
                handleDeleteContacts={handleDeleteContacts}
                openModal={openModal}
              />
              :
              <FavoritesList
                userId={userId}
                handleOnFavorite={handleOnFavorite}
                handleDeleteContacts={handleDeleteContacts}
                openModal={openModal}
              />
            }
            <S.TittleText>요청</S.TittleText>
            <FriendRequest
              userId={userId}
              handleOnAccept={handleOnAccept}
            />
          </LeftSection>
          <RightSection>
            <MainContacts
              userId={userId}
              handleAddContacts={handleAddContacts}
              isModalOpen={isModalOpen}
              closeModal={closeModal}
              modalInfo={modalInfo}
            />
          </RightSection>
        </React.Suspense>
      </MainSection>
    </Container>
  );
};

export default ContactsPage;
