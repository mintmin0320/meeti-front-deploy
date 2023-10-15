import React, { useState } from "react";
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
} from '../../styles/CommonStyles';

// styles
const TextBox = styled.div`
  display: flex;
`;

const Tittle = styled.button`
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${props => props.isActive ? '#000' : '#d8d8d8'};
  border: none;
  background-color:transparent;
  cursor: pointer;
`;

const TittleText = styled.p`
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const RightSection = styled.section`
  width: 60%;
  height: 100%;
  z-index: 3;
`;

const ContactsPage = () => {
  const [isStatus, setIsStatus] = useState(false);

  return (
    <Container>
      <MainSection className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <LeftSection>
          <TextBox>
            <Tittle
              onClick={() => setIsStatus(false)}
              isActive={!isStatus}
            >
              연락처 |
            </Tittle>
            &nbsp;
            <Tittle
              onClick={() => setIsStatus(true)}
              isActive={isStatus}
            >
              즐겨찾기
            </Tittle>
          </TextBox>
          {!isStatus ?
            <ContactList />
            :
            <FavoritesList />
          }
          <TittleText>요청</TittleText>
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
