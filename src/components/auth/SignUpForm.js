import React, { useState, useCallback } from "react";
import styled from "styled-components";

import color from "./../../assets/color.png";
import { FaBookOpen } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

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
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;
const SignupDiv = styled.div`
  margin: 30px auto;
  padding: 30px;
  z-index: 3;
  text-align: left;
`;
const Ms = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 7px;
  line-height: 8px;
  color: #d63031;
  text-align: left;
`;
const Label = styled.div`
  color: #404248;
  text-align: left;
  margin: 15px 0 5px 0;
  margin-bottom: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
`;
const Purple = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  color: #8165df;
  margin-left: 5px;
`;
const Green = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  color: #197d2f;
  text-align: left;
  margin: 5px 10px;
`;
const Input = styled.input`
  width: 300px;
  height: 20px;
  border: solid #9c9c9c 0.5px;
  background: #ffffff;
  margin-left: 10px;
`;
const Button = styled.button`
  height: 22px;
  margin-left: 20px;
  border-radius: 4px;
  border: none;
  background: #8165df;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  color: #ffffff;
`;
const PwMsg = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  color: #d63031;
  text-align: left;
  margin: 5px 10px;
`;
const BtnDiv = styled.div`
  text-align: center;
  margin-top: 20px;
`;
const NextBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  color: white;
  background: #8165df;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
`;

const SignUpForm = () => {
  const [state, setState] = useState({
    email: "",
    userPw: "",
    checkPw: "",
    name: "",
    authCode: "",
  });

  const _handleInputChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Usertype>
          <FaBookOpen /> 학생용
        </Usertype>
        <SignupDiv>
          <Ms style={{ display: `block` }}>필수항목 *</Ms>
          <Label>
            ID를 입력해주세요.
            <Ms>*</Ms>
            <Purple>
              <BsFillCheckCircleFill />
              ID는 회원검색으로 사용됩니다.
            </Purple>
          </Label>

          <Input
            type="text"
            name="userId"
            onChange={e => {
              //handleOnChange("id", e);
            }}
          />
          <Button>중복확인</Button>
          <Green>
            <BsFillCheckCircleFill />
            사용가능한 아이디입니다!
          </Green>
          <Label>
            비밀번호를 입력해주세요.<Ms>*</Ms>
          </Label>
          <Input
          //type={pwType.type}
          />
          {/* <span onClick={handlePasswordType}>
            {pwType.visible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span> */}
          <PwMsg>
            비밀번호는 영문 대소문자, 특수문자(*,!,~,?)를 포함하여
            <br />
            8~16자 사이로 설정해주세요.
          </PwMsg>
          <Label>
            비밀번호를 다시 입력해주세요.<Ms>*</Ms>
          </Label>
          <Input type="password" />

          <Label>
            이메일을 입력해주세요.<Ms>*</Ms>
          </Label>
          <Input type="email"></Input>
          <Button>인증번호받기</Button>
          <Label>
            이름을 입력해주세요.<Ms>*</Ms>
          </Label>
          <Input type="text"></Input>

          <Label>
            인증번호를 입력해주세요.<Ms>*</Ms>
          </Label>
          <Input></Input>
          <BtnDiv>
            <NextBtn>
              <IoIosArrowForward style={{ width: 25, height: 25 }} />
            </NextBtn>
          </BtnDiv>
        </SignupDiv>
      </MainDiv>
    </Test>
  );
};
export default SignUpForm;
