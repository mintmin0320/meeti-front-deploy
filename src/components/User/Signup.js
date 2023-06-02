import React from "react";
import styled from "styled-components";
import color from "./../assets/color.png";
import { FaBookOpen } from "react-icons/fa";
import { MdWork, MdPerson } from "react-icons/md";

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
const SignupDiv = styled.div`
  margin: auto;
  z-index: 3;
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
  margin-bottom: 25px;
  color: #535571;
`;
const Button = styled.button`
  width: 85px;
  height: 115px;
  border-radius: 10px;
  border: solid #9c9c9c 0.5px;
  background-color: white;
  box-shadow: 1px 1px 1px rgb(0.1, 0.1, 0.1, 0.1);
  margin: 0 25px;
`;
const Text = styled.div`
  color: #8165df;
  font-size: 12px;
`;
const Join = styled.div`
  font-size: 8px;
`;

const Signup = () => {
  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <SignupDiv>
          <Title>Sign up</Title>
          <SubTitle>
            안녕하세요 회의실과 캘린더를 함께하여
            <br />
            효율적으로 미팅을 진행 할 수 있도록 하는
            <br />
            저희는 “미티” 입니다👋
          </SubTitle>
          <Button>
            <FaBookOpen style={{ color: "#8165DF" }} />
            <br />
            <Text>학생용</Text>
            <hr />
            <Join>회원가입하기</Join>
          </Button>
          <Button>
            <MdWork style={{ color: "#8165DF" }} />
            <br />
            <Text>기업용</Text>
            <hr />
            <Join>회원가입하기</Join>
          </Button>
          <Button>
            <MdPerson style={{ color: "#8165DF" }} />
            <br />
            <Text>개인용</Text>
            <hr />
            <Join>회원가입하기</Join>
          </Button>
        </SignupDiv>
      </MainDiv>
    </Test>
  );
};

export default Signup;
