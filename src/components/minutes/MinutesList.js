import React from "react";
import styled from "styled-components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const MinutesList = () => {
  return (
    <MinutesDiv>
      <MinutesBox>
        <MinutesContacts>
          <MinutesContactsLeft>
            <MinutesDate>2023-09-01</MinutesDate>
            <MinutesTitle>회의 제목</MinutesTitle>
          </MinutesContactsLeft>
          <MinutesContactsRight>
            <MinutesButton>
              <BsFillArrowRightCircleFill />
            </MinutesButton>
          </MinutesContactsRight>
        </MinutesContacts>
      </MinutesBox>
    </MinutesDiv>
  );
};

export default MinutesList;

//styled

const MinutesDiv = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const MinutesBox = styled.div`
  background-color: #fff;
  width: 90%;
  height: 80px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 6px;
`;
const MinutesContacts = styled.div`
  margin-top: 8px;
  margin-left: 8px;
  display: flex;
`;
const MinutesDate = styled.div`
  color: #374957;
  font-size: 11px;
  margin-bottom: 8px;
`;
const MinutesTitle = styled.div`
  color: #374957;
  font-size: 16px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const MinutesContactsLeft = styled.div`
  width: 80%;
`;
const MinutesContactsRight = styled.div`
  width: 20%;
`;
const MinutesButton = styled.div`
  color: #8165df;
  background-color: #f0ebfa;
  padding: 10px;
  margin: 20px;
  border-radius: 20px;
  cursor: pointer;
  width: 20%;
  align-items: center;
  display: flex;
  justify-content: center;
  &:hover {
    color: #f0ebfa;
    background-color: #8165df;
  }
`;
