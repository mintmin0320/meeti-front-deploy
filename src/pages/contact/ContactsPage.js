import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";

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

// apis
import {
  fetchAddFriend,
  fetchAllUser,
  fetchContactsList,
  fetchDeleteContacts,
  fetchFavoriteList,
  fetchOnFavorite,
  fetchRequestAccept,
  fetchRequestUserList,
  fetchSearchList
} from '../../api/contact';
import Modal from '../../common/Modal';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  width: 70%;
  height: 80%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

const ContactsPage = () => {
  const userId = localStorage.getItem("userId");
  const [contactsList, setContactsList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  const [requestList, setRequestList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");
  const [isStatus, setIsStatus] = useState(false);
  const [refreshKey, setRefreshKey] = useState(false);

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

  useEffect(() => {
    getContactsList();
  }, [refreshKey]);

  useEffect(() => {
    getFriendList();
  }, [refreshKey]);

  useEffect(() => {
    getRequestList();
  }, [refreshKey]);

  useEffect(() => {
    getAllContacts();
  }, [refreshKey]);

  /* 연락처/즐겨찾기 리스트 */
  // 친구 리스트 조회
  const getContactsList = async () => {
    try {
      const res = await fetchContactsList(userId);

      setContactsList(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 즐겨찾기 리스트 조회
  const getFriendList = async () => {
    try {
      const res = await fetchFavoriteList(userId);

      setFavoritesList(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 연락처 수락 요청 리스트
  const getRequestList = async () => {
    try {
      const res = await fetchRequestUserList(userId);

      setRequestList(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 모든 연락처 조회
  const getAllContacts = async () => {
    try {
      const res = await fetchAllUser();

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

  // 연락처 삭제
  const handleDeleteContacts = async (friendId) => {
    try {
      await fetchDeleteContacts(userId, friendId);

      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  /* 연락처 수락  */
  const handleOnAccept = async (userId, friendId) => {
    try {
      await fetchRequestAccept(userId, friendId);

      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  // 연락처 추가
  const handleAddContacts = async (friendId) => {
    try {
      await fetchAddFriend(userId, friendId);

      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  // 유저 검색
  const handleSearchUser = async () => {
    if (search === "") {
      alert("검색어를 입력해 주세요!");

      return;
    }

    try {
      const res = await fetchSearchList(search);
      setUserList(res?.data);
      setRefreshKey(!refreshKey);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setSearch((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  return (
    <Container>
      <MainSection>
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
              openModal={openModal}
            />
            :
            <FavoritesList
              favoritesList={favoritesList}
              handleOnFavorite={handleOnFavorite}
              handleDeleteContacts={handleDeleteContacts}
              openModal={openModal}
            />
          }
          <S.TittleText>요청</S.TittleText>
          <FriendRequest
            requestList={requestList}
            handleOnAccept={handleOnAccept}
          />
        </LeftSection>
        <RightSection>
          <MainContacts
            userList={userList}
            handleAddContacts={handleAddContacts}
            handleChange={handleChange}
            handleSearchUser={handleSearchUser}
            isModalOpen={isModalOpen}

            modalInfo={modalInfo}
            setModalInfo={setModalInfo}
          />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default ContactsPage;
