import React, { useState } from "react";
import styled from "styled-components";

const AddDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
const AddText = styled.div`
  width: 30%;
  color: #8165df;
`;
const AddInput = styled.input`
  width: 50%;
  font-size: 14px;
  border: none;
`;
const AddPayButton = styled.input`
  color: #8165df;
  accent-color: #8165df;
`;
const AddPayLabel = styled.label`
  color: #8165df;
  margin: 10px;
`;

const SubmitButton = styled.button`
  color: #ffffff;
  width: 100px;
  background-color: #8165df;
  height: 30px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;
const ReservationAdd = () => {
  const [pay, setPay] = useState(); //true 가 무료, false 가 유료
  console.log(pay);
  return (
    <>
      <form>
        <AddDiv>
          <AddText>Meeting Room Name : </AddText>
          <AddInput placeholder="회의실 이름" />
        </AddDiv>
        <AddDiv>
          <AddText>Meeting Room Address : </AddText>
          <AddInput placeholder="회의실 주소" />
        </AddDiv>
        <AddDiv>
          <AddText>Meeting Room Tel : </AddText>
          <AddInput placeholder="회의실 전화번호" type="tel" />
        </AddDiv>
        <AddDiv>
          <AddText>Meeting Room Img : </AddText>
          <AddInput placeholder="회의실 이미지" type="file" />
        </AddDiv>
        <AddDiv>
          <AddPayButton
            id="payFree"
            type="radio"
            onClick={() => {
              setPay(true);
            }}
            name="pay"
          />

          <AddPayLabel for="payFree">무료</AddPayLabel>
          <AddPayButton
            id="payCharged"
            type="radio"
            onClick={() => {
              setPay(false);
            }}
            name="pay"
          />
          <AddPayLabel for="payCharged">유료</AddPayLabel>
        </AddDiv>
        <AddDiv>
          <SubmitButton type="submit">회의실 등록하기</SubmitButton>
        </AddDiv>
      </form>
    </>
  );
};

export default ReservationAdd;
