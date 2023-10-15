import React from "react";
import styled from "styled-components";

import Header from '../../common/Header';
import ContactList from "../../components/contact/ContactList";
import FavoritesList from '../../components/contact/FavoritesList';
import MainContacts from "../../components/contact/MainContacts";

// bg-color, global-styles
import color from "./../../assets/color.png";
import {
  Container,
  BackColor,
  MainSection,
  LeftSection,
} from '../../styles/CommonStyles';

// styles
const Title = styled.p`
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
  return (
    <Container>
      <MainSection className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Header />
        <LeftSection>
          <Title>연락처</Title>
          <ContactList />
          <Title>즐겨찾기</Title>
          <FavoritesList />
        </LeftSection>
        <RightSection>
          <MainContacts />
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default ContactsPage;
