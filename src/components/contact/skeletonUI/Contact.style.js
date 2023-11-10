import styled from 'styled-components';

export const ContactWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`;

/* 내 연락처 */
export const ContactListWrap = styled.div`
  width: 78%;
  height: calc(47% - 60px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContactListBox = styled.article`
  width: 100%;
  height: 65px;
  display: flex;
  border-radius: 8px;
  margin-bottom: 13px;
  background: #eee;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }
`;

// 프로필
export const ContactProfileBox = styled.div`
  width: 55px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px 0 0 0;

`;

export const ProfileImg = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 34px;
  background: #ddd;
`;

// 유저, 소속 정보
export const ContactUserInfoBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactUserInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  font-size: 13px;
  font-weight: bolder;
`;

// 일정 확인, 친구 삭제, 즐겨찾기 추가 버튼 박스 
export const ButtonBox = styled.div`
  width: calc(100% - (45% + 55px));
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  background: #ddd;
  cursor: pointer;
`;

/* 친구 요청 대기 리스트 */
export const ContactReqListWrap = styled.div`
  width: 78%;
  height: calc(47% - 60px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* 모든 연락처 */
// 상단 검색, 페이지명
export const TopBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const PageTitle = styled.p`
  color: #6f5cea;
  font-size: 14px;
  margin-top: 30px;
  margin-left: -10px;
`;

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 28px;
  border: 1px solid #8165df;
  border-radius: 30px;
  padding-left: 15px;
`;

export const SearchButton = styled.button`
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
export const BottomBox = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: grid;
  justify-items: center;
  align-content: flex-start;
  grid-template-columns: repeat(4, 1fr);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const TittleText = styled.h1`
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const SkeletonWrapper = styled.div`
  width: 150px;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #eee;
  animation: pulse 1.5s infinite ease-in-out;
  margin: 15px;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }
`;

export const SkeletonProfileImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background: #ddd;
  margin-top: 20px;
`;

export const SkeletonText = styled.div`
  width: 80%;
  height: 10px;
  background: #ddd;
  margin-top: 10px;
  border-radius: 5px;
`;

export const SkeletonButton = styled.div`
  width: 114px;
  height: 26px;
  background: #ddd;
  margin-top: 10px;
  border-radius: 4px;
`;