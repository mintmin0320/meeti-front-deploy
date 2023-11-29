import styled, { css } from 'styled-components';

// 지역별 분류
export const AreaClassification = styled.div`
  width: 95%;
  height: 80px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(8, 1fr);
  margin-left: 20px;
`;

export const AreaButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  border: 1px solid #8165df;
  font-size: 13px;
  font-weight: 700;
  color: #9F81F7;
  text-align: center;
  cursor: pointer;
  ${css`
    &:hover {
      background-color: #8165df;
      color: #ffffff;
    }
  `}
`;