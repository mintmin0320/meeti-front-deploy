import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import {
  FaRegAddressBook,
  BiSearch,
  BsFillPersonPlusFill
} from "../../common/icons/index";

import Modal from '../../common/Modal';

import * as S from './styles/MainContacts.style';

import {
  fetchAllUser,
  fetchSearchContacts,
  useAddContacts,
} from '../../query-hooks/useContact';

const MainContacts = ({
  userId,
  isModalOpen,
  modalInfo,
  closeModal,
}) => {
  const [keyword, setKeyword] = useState('');

  const { data: allUsers } = useQuery(fetchAllUser(userId));
  const { data: searchResults, refetch: refetchSearchResults } = useQuery(
    fetchSearchContacts(keyword),
  );
  const { handleAddContacts } = useAddContacts();

  const handleSearch = () => {
    if (keyword.trim() === '') {
      alert('검색어를 입력해주세요.');

      return;
    }

    refetchSearchResults();
  };

  const userList = keyword && searchResults ? searchResults : allUsers;

  return (
    <S.ContactWrap>
      <S.TopBox>
        <FaRegAddressBook className="true" style={{ padding: "0" }} />
        <S.PageTitle>Contacts</S.PageTitle>
        <S.SearchLabel>
          <S.SearchInput
            name='keyword'
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
          <S.SearchButton
            onClick={handleSearch}
            aria-label='연락처 검색'
          >
            <BiSearch />
          </S.SearchButton>
        </S.SearchLabel>
      </S.TopBox>
      <S.BottomBox>
        {userList?.map((item) => {
          return (
            <S.ContactDiv key={item.id}>
              <S.ProfileImg
                src={item.profile ?? "./new.png"}
                alt='user profile'
              />
              <S.NameText>{item.username}</S.NameText>
              <S.ButtonBox>
                <S.Button
                  onClick={() => handleAddContacts(userId, item.id)}
                  aria-label='연락처 추가'
                >
                  <BsFillPersonPlusFill />
                </S.Button>
              </S.ButtonBox>
            </S.ContactDiv>
          );
        })}
      </S.BottomBox>
      {isModalOpen && (
        <S.ModalOverlay onClick={closeModal} aria-label='모달 닫기'>
          <S.ModalBox
            onClick={(e) => e.stopPropagation()}
            aria-label='모달 닫기'>
            <Modal friendId={modalInfo} onClose={closeModal} />
          </S.ModalBox>
        </S.ModalOverlay>
      )}
    </S.ContactWrap>
  );
};

export default MainContacts;
