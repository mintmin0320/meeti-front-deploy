import { useState, Suspense } from "react";

import Header from '../../common/Header';
import ContactList from "../../components/contact/ContactList";
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

const ContactsPage = () => {
  const userId = localStorage.getItem("userId");

  const [isFavorites, setIsFavorites] = useState(false);

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

  return (
    <Container>
      <MainSection>
        <BackColor src={color} alt='background image' style={{ opacity: 0.2 }} />
        <Header />
        <Suspense fallback={<SkeletonUI count={3} />}>
          <LeftSection>
            <S.TextBox>
              <S.Tittle
                onClick={() => setIsFavorites(!isFavorites)}
                isActive={!isFavorites}
              >
                연락처 |
              </S.Tittle>
              &nbsp;
              <S.Tittle
                onClick={() => setIsFavorites(!isFavorites)}
                isActive={isFavorites}
              >
                즐겨찾기
              </S.Tittle>
            </S.TextBox>
            <ContactList
              userId={userId}
              openModal={openModal}
              isFavorites={isFavorites}
            />
            <S.TittleText>요청</S.TittleText>
            <FriendRequest
              userId={userId}
            />
          </LeftSection>
          <RightSection>
            <MainContacts
              userId={userId}
              isModalOpen={isModalOpen}
              closeModal={closeModal}
              modalInfo={modalInfo}
            />
          </RightSection>
        </Suspense>
      </MainSection>
    </Container>
  );
};

export default ContactsPage;
