import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MdWork, MdPerson } from "react-icons/md";

const SignupDiv = styled.div`
  margin: auto;
  z-index: 3;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #535571;
`;

const SubTitle = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  color: #535571;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Button = styled.button`
  width: 85px;
  height: 115px;
  border-radius: 10px;
  border: solid #9c9c9c 0.5px;
  background-color: white;
  box-shadow: 1px 1px 1px rgb(0.1, 0.1, 0.1, 0.1);
  margin: 0 25px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.div`
  color: #8165df;
  font-size: 12px;
  margin-top: 5px;
`;

const Br = styled.div`
  background-color: #9c9c9c;
  width: 60%;
  height: 1px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Join = styled.div`
  font-size: 8px;
  margin-top: 5px;
  color: #9c9c9c;
`;

const SignUp = () => {
  return (
    <SignupDiv>
      <TitleDiv>
        <Title>Sign up</Title>
        <SubTitle>안녕하세요 회의실과 캘린더를 함께하여</SubTitle>
        <SubTitle>효율적으로 미팅을 진행 할 수 있도록 하는</SubTitle>
        <SubTitle>저희는 “미티” 입니다👋</SubTitle>
      </TitleDiv>
      <ButtonDiv>
        <Link to="/auth/personal" style={{ textDecoration: "none" }}>
          <Button>
            <MdPerson style={{ color: "#8165DF" }} />
            <Text>개인용</Text>
            <Br />
            <Join>회원가입하기</Join>
          </Button>
        </Link>
        <Link to="/auth/corp" style={{ textDecoration: "none" }}>
          <Button>
            <MdWork style={{ color: "#8165DF" }} />
            <Text>기업용</Text>
            <Br />
            <Join>회원가입하기</Join>
          </Button>
        </Link>
      </ButtonDiv>
    </SignupDiv>
  );
};

export default SignUp;
