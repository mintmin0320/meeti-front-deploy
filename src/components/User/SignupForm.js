import React, { useState } from "react";
import styled from "styled-components";
import color from "./../assets/color.png";
import { FaBookOpen } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Test = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f5f3fe;
`;
const MainDiv = styled.div`
  position: absolute;
  width: 90vw;
  height: 80vh;
  margin-top: 78px;
  margin-left: 69px;
  margin-right: 69px;
  background: #f8f8f8;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  z-index: 2;
`;
const BackColor = styled.img`
  position: absolute;
  width: 548px;
  height: 503px;
  margin-left: 100px;
  margin-top: 100px;
  background: #f8f8f8;
  z-index: 1;
`;
const Usertype = styled.div`
  position: absolute;
  margin: 35px 100px;
  color: #8165df;
  width: 500px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
`;
const SignupDiv = styled.div`
  margin: 30px auto;
  padding: 30px;
  z-index: 3;
  overflow: scroll;
`;
const Label = styled.div`
  color: #404248;
  text-align: left;
  margin-bottom: 5px;
`;
const Input = styled.input`
  width: 300px;
  height: 25px;
  margin-bottom: 15px;
  border: solid #9c9c9c 0.1px;
`;
const Button = styled.button`
  height: 22px;
  margin-left: 20px;
  border-radius: 4px;
  border: none;
  background-color: #8165df;
  color: white;
  font-size: 10px;
`;
const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const NextBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  color: white;
  background-color: #8165df;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
`;

const SignupForm = () => {
  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Usertype>
          <FaBookOpen /> 학생용
        </Usertype>
        <SignupDiv>
          <Label>ID를 입력해주세요.</Label>
          <Input type="text"></Input>
          <Button>중복확인</Button>
          <Label>비밀번호를 입력해주세요.</Label>
          <Input type="password"></Input>
          <Label>비밀번호를 다시 입력해주세요.</Label>
          <Input type="password"></Input>
          <Label>이메일을 입력해주세요.</Label>
          <Input type="email"></Input>
          <Label>이름을 입력해주세요.</Label>
          <Input type="text"></Input>
          <Label>전화번호을 입력해주세요.</Label>
          <Input type="text"></Input>
          <Button>인증번호받기</Button>
          <Label>인증번호를 입력해주세요.</Label>
          <Input></Input>
        </SignupDiv>
        <BtnDiv>
          <NextBtn>
            <IoIosArrowForward style={{ width: 25, height: 25 }} />
          </NextBtn>
        </BtnDiv>
      </MainDiv>
    </Test>
  );
};

export default SignupForm;
