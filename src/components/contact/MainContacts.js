import { FaRegAddressBook } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BsFillPersonPlusFill } from "react-icons/bs";

import Modal from '../../common/Modal';
import * as S from './styles/MainContacts.style';

const MainContacts = ({
  userList,
  handleAddContacts,
  handleChange,
  handleSearchUser,
  isModalOpen,
  modalInfo,
  closeModal,
}) => {
  return (
    <S.ContactWrap>
      <S.TopBox>
        <FaRegAddressBook className="true" style={{ padding: "0" }} />
        <S.PageTitle>Contacts</S.PageTitle>
        <S.SearchDiv>
          <S.SearchInput name='search' onChange={handleChange} />
          <S.SearchButton onClick={handleSearchUser}>
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