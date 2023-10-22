import React, { useState } from "react";
import styled from "styled-components";

// icons
import { FaRegAddressBook } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Modal from '../../common/Modal';

// style
const ContactWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

// 상단 검색, 페이지명
const TopBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

const PageTitle = styled.p`
  color: #6f5cea;
  font-size: 14px;
  margin-top: 30px;
  margin-left: -10px;
`;

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 28px;
  border: 1px solid #8165df;
  border-radius: 30px;
  padding-left: 15px;
`;

const SearchButton = styled.button`
  background: #f0ebfa;
  width: 32px;
  height: 32px;
  color: #6f5cea;
  border: none;
  cursor: pointer;
  margin-left: -15px;
  border-radius: 50%;
`;

// 하단 회원 목록
const BottomBox = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

// 회원 카드 디자인 box
const ContactDiv = styled.div`
  width: 150px;
  height: 170px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 60px;
`;

const NameText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const ButtonBox = styled.div`
  width: 114px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 114px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  background: #8165df;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
    color: #000;
  }
`;

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
  width: 60%;
  height: 80%;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

// const userList = [
//   {
//     id: 1,
//     profile: "https://placekitten.com/50/50",
//     username: "John Doe"
//   },
//   {
//     id: 2,
//     profile: "https://placekitten.com/g/50/50",
//     username: "Jane Smith"
//   },
//   {
//     id: 3,
//     profile: "https://placekitten.com/51/51",
//     username: "Bob Johnson"
//   },
//   {
//     id: 4,
//     profile: "https://placekitten.com/g/51/51",
//     username: "Alice Kim"
//   },
//   {
//     id: 5,
//     profile: "https://placekitten.com/52/52",
//     username: "Charlie Lee"
//   },
// ];


const MainContacts = ({
  userList,
  handleAddContacts,
  handleChange,
  handleSearchUser,
  isModalOpen,
  modalInfo,
  setModalInfo,
}) => {
  const closeModal = () => {
    setModalInfo(null);
  };

  const showContactDetail = (user) => {
    setModalInfo({ isOpen: true, user });
  };


  return (
    <ContactWrap>
      <TopBox>
        <FaRegAddressBook className="true" style={{ padding: "0" }} />
        <PageTitle>Contacts</PageTitle>
        <SearchDiv>
          <SearchInput onChange={handleChange} />
          <SearchButton onClick={handleSearchUser}>
            <BiSearch />
          </SearchButton>
        </SearchDiv>
      </TopBox>
      <BottomBox>
        {userList.map((item) => {
          return (
            <ContactDiv key={item.id} onClick={() => showContactDetail(item)}>
              <ProfileImg src={item.profile} />
              <NameText>{item.username}</NameText>
              <ButtonBox onClick={(e) => handleAddContacts(item.id)}>
                <Button>
                  <BsFillPersonPlusFill />
                </Button>
              </ButtonBox>
            </ContactDiv>
          );
        })}
      </BottomBox>
      {/* {modalInfo && modalInfo.isOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <Modal user={modalInfo.user} onClose={closeModal} />
          </ModalBox>
        </ModalOverlay>
      )} */}
    </ContactWrap>
  );
};

export default MainContacts;