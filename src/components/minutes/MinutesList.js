import React from "react";
import styled from "styled-components";

const MinutesList = () => {
  return (
    <MinutesDiv>
      <MinutesBox>
        <MinutesContacts>
          <MinutesDate>회의록 작성한 날짜 들어갈 자리</MinutesDate>
          <MinutesTitle>회의록 제목들어갈 자리</MinutesTitle>
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
