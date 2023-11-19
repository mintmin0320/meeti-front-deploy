import { FaRegAddressBook, BiSearch } from "../../../common/icons/index";
import { } from "@react-icons/all-files/bi/BiSearch";

import { LeftSection, RightSection } from '../../../styles/CommonStyles';

import * as S from './Contact.style'

const SkeletonAllContactCard = () => {
  return (
    <S.SkeletonWrapper>
      <S.SkeletonProfileImg />
      <S.SkeletonText />
      <S.SkeletonText />
      <S.SkeletonButton />
    </S.SkeletonWrapper>
  );
};

const SkeletonContactCard = () => {
  return (
    <S.ContactListBox>
      <S.ContactProfileBox>
        <S.ProfileImg />
      </S.ContactProfileBox>
      <S.ContactUserInfoBox>
        <S.ContactUserInfo />
      </S.ContactUserInfoBox>
      <S.ButtonBox>
        <S.Button />
        <S.Button />
        <S.Button />
      </S.ButtonBox>
    </S.ContactListBox>
  );
};

const SkeletonUI = ({ count }) => {
  return (
    <>
      <LeftSection>
        <S.TittleText>연락처</S.TittleText>
        <S.ContactListWrap>
          {Array.from({ length: count }, (_, i) => <SkeletonContactCard key={i} />)}
        </S.ContactListWrap>
        <S.TittleText>승인</S.TittleText>
        <S.ContactReqListWrap>
          {Array.from({ length: count }, (_, i) => <SkeletonContactCard key={i} />)}
        </S.ContactReqListWrap>
      </LeftSection>
      <RightSection>
        <S.TopBox>
          <FaRegAddressBook className="true" style={{ padding: "0" }} />
          <S.PageTitle>Contacts</S.PageTitle>
          <S.SearchDiv>
            <S.SearchInput />
            <S.SearchButton>
              <BiSearch />
            </S.SearchButton>
          </S.SearchDiv>
        </S.TopBox>
        <S.BottomBox>
          {Array.from({ length: count * 4 }, (_, i) => <SkeletonAllContactCard key={i} />)}
        </S.BottomBox>
      </RightSection>
    </>
  );
};

export default SkeletonUI;