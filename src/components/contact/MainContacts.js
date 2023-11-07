import { useQuery } from '@tanstack/react-query';

import { FaRegAddressBook } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonPlusFill } from "react-icons/bs";

import Modal from '../../common/Modal';
import * as S from './styles/MainContacts.style';

import { fetchAllUser, fetchSearchContacts } from '../../query-hooks';
import { useState } from 'react';

const MainContacts = ({
  userId,
  handleAddContacts,
  isModalOpen,
  modalInfo,
  closeModal,
}) => {
  const [keyword, setKeyword] = useState('');

  const { data: allUsers } = useQuery(fetchAllUser(userId));

  const { data: searchResults, refetch: refetchSearchResults } = useQuery(
    fetchSearchContacts(keyword),
  );

  const handleSearchClick = () => {
    if (keyword.trim() === '') {
      alert('검색어를 입력해주세요.');

      return;
    }

    refetchSearchResults();
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const userList = keyword && searchResults ? searchResults : allUsers;

  return (
    <S.ContactWrap>
      <S.TopBox>
        <FaRegAddressBook className="true" style={{ padding: "0" }} />
        <S.PageTitle>Contacts</S.PageTitle>
        <S.SearchDiv>
          <S.SearchInput
            name='search'
            onChange={handleChange}
            value={keyword}
          />
          <S.SearchButton onClick={handleSearchClick}>
            <BiSearch />
          </S.SearchButton>
        </S.SearchDiv>
      </S.TopBox>
      <S.BottomBox>
        {userList?.map((item) => {
          return (
            <S.ContactDiv key={item.id}>
              <S.ProfileImg src={item.profile || "./new.png"} />
              <S.NameText>{item.username}</S.NameText>
              <S.ButtonBox onClick={() => handleAddContacts(item.id)}>
                <S.Button>
                  <BsFillPersonPlusFill />
                </S.Button>
              </S.ButtonBox>
            </S.ContactDiv>
          );
        })}
      </S.BottomBox>
      {isModalOpen && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalBox onClick={(e) => e.stopPropagation()}>
            <Modal friendId={modalInfo} onClose={closeModal} />
          </S.ModalBox>
        </S.ModalOverlay>
      )}
    </S.ContactWrap>
  );
};

export default MainContacts;
