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