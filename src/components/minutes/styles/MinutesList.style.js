import styled from "styled-components";

export const MinutesWrap = styled.div`
  width: 100%;
  height: calc(100% - 105px);
  margin-top: 20px;
`;

export const MinutesItem = styled.div`
  width: 90%;
  height: 80px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  border: solid 1px #d8d8d8;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #fff;
`;

export const MinutesInfoBox = styled.div`
  width: 80%;
`;

export const MinutesContacts = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 10px;
`;

export const MinutesDate = styled.p`
  width: 95%;
  height: 30px;
  display: flex;
  align-items: center;
  color: #374957;
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 3px;
`;

export const MinutesTitle = styled.p`
  width: 95%;
  height: 50px;
  display: flex;
  font-size: 17px;
  font-weight: 900;
  margin-left: 10px;
  color: #374957;
`;

export const MinutesContactsRight = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MinutesButton = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  color: #8165df;
  background-color: #f0ebfa;
  cursor: pointer;

  &:hover {
    color: #f0ebfa;
    background-color: #8165df;
  }
`;
