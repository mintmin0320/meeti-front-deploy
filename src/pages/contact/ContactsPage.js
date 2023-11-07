
import React, { useState } from "react";

import Header from '../../common/Header';
import ContactList from "../../components/contact/ContactList";
import FavoritesList from '../../components/contact/FavoritesList';
import MainContacts from "../../components/contact/MainContacts";
import FriendRequest from '../../components/contact/FriendRequest';

import color from "./../../assets/color.png";
import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
  RightSection,
} from '../../styles/CommonStyles';
import * as S from './styles/ContactsPage.style';

import {
  useAddContacts,
  useDeleteContacts,
  useOnFavorites,
  useRequestAccept
} from '../../query-hooks';

const ContactsPage = () => {
  const userId = localStorage.getItem("userId");
  const [isStatus, setIsStatus] = useState(false);
  const addContacts = useAddContacts();
  const onFavorites = useOnFavorites();
  const requestAccept = useRequestAccept();
  const deleteContacts = useDeleteContacts();


  /* 모달 */
  const [modalInfo, setModalInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (id) => {
    setIsModalOpen(true);
    setModalInfo(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 연락처 추가
  const handleAddContacts = async (friendId) => {
    const params = {
      userId,
      friendId,
    };

    try {
      await addContacts.mutateAsync(params);

      alert('친구 신청 완료!');
    } catch (error) {
      alert('실패했습니다!');
      console.log(error);
    }
  };

  /* 연락처 수락  */
  const handleOnAccept = async (friendId) => {
    const params = {
      userId,
      friendId,
    };

    try {
      await requestAccept.mutateAsync(params);

      alert('수락되었습니다!');
    } catch (error) {
      alert('실패했습니다!');
      console.log(error);
    }
  };

  // 연락처 삭제
  const handleDeleteContacts = async (friendId) => {
    const params = {
      userId,
      friendId,
    };

    try {
      await deleteContacts.mutateAsync(params);
      alert("연락처 삭제!");
    } catch (error) {
      alert("연락처 삭제 실패!");
      console.log(error);
    }
  };

  // 즐겨찾기 ON/OFF
  const handleOnFavorite = async (friendId) => {
    const params = {
      userId,
      friendId,
    };

    try {
      await onFavorites.mutateAsync(params);
    } catch (error) {
      alert('즐겨찾기 실패!');
      console.log(error);
    }
  };

  return (
    <Container>
      <MainSection>
        <React.Suspense fallback='로딩!!!'>
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
