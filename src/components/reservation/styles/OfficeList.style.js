import styled, { css } from "styled-components";

export const MenuBox = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
`;

export const SearchWrap = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const PageTitle = styled.h1`
  height: 100%;
  display: flex;
  align-items: center;
  color: #6f5cea;
  font-size: 15px;
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 28px;
  border-radius: 30px;
  padding-left: 15px;
  border: 1px solid #8165df;
`;

export const SearchButton = styled.button`
  width: 35px;
  height: 35px;
  color: #6f5cea;
  border: none;
  background: #f0ebfa;
  border-radius: 50%;
  margin-left: -15px;
  cursor: pointer;
`;

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

export const AddButton = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border: none;
  border-radius: 5px;
  color: #6f5cea;
  background: #f0ebfa;
  cursor: pointer;
`;