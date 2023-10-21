import styled from "styled-components";

export const TextBox = styled.div`
  display: flex;
`;

export const Tittle = styled.button`
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${props => props.isActive ? '#000' : '#d8d8d8'};
  border: none;
  background-color:transparent;
  cursor: pointer;
`;

export const TittleText = styled.h1`
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
`;