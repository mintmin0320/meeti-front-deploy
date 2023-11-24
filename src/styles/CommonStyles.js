import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f3fe;
`;

export const BackColor = styled.img`
  position: absolute;
  width: 548px;
  height: 503px;
  margin-left: 100px;
  margin-top: 100px;
  background: #f8f8f8;
  z-index: 2;
`;

// 컨텐츠 페이지 메인 섹션
export const MainSection = styled.section`
  width: 90vw;
  height: 85vh;
  display: flex;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 1;
  background: #f8f8f8;
`;

// 컨텐츠 헤더 옆 좌측 섹션
export const LeftSection = styled.section`
  width: 30%;
  z-index: 3;
`;

// 컨텐츠 헤더 옆 우측 섹션
export const RightSection = styled.section`
  width: 60vw;
  height: 100%;
  z-index: 3;
`;

// 페이지 타이틀
export const TitleText = styled.h1`
  height: 30px;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 5px;
`;

// 좌측 단일 메뉴 wrap
export const ListWrap = styled.div`
  width: 90%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

/* 회원가입 */
export const SignUpTypeText = styled.h1`
  width: 25vw;
  margin: 3.5rem 10rem;
  color: #8165df;
  font-size: 1.6rem;
  line-height: 2.4rem;
  position: absolute;
`;

export const SignUpWrap = styled.div`
  margin: 30px auto;
  padding: 30px;
  z-index: 3;
`;

export const InputText = styled.div`
  color: #404248;
  text-align: left;
  margin: 5vh 0 3vh 0;
  margin-bottom: 2vh;
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.3rem;
`;

export const Input = styled.input`
  width: 18em;
  height: 2em;
  border: solid #9c9c9c 0.5px;
  background: #ffffff;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 0.9em;
  margin-left: 20px;
  border-radius: 0.4rem;
  border: none;
  background: #8165df;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 10px;
  color: #ffffff;
  cursor: pointer;
`;

export const ValidText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.1rem;
  color: #d63031;
  margin-top: 0.8rem;
`;

export const ButtonBox = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const SignUpButton = styled.button`
  padding: 0.7vw 3.5vh;
  border-radius: 10%;
  border: none;
  color: white;
  background: #8165df;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  font-size: 1rem;
  cursor: pointer;
`;