import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// apis
import {
  fetchGetAuthCode,
  fetchOfficeSignUp,
  fetchEmailVerificationCode,
} from "../../api/auth";

// icons
import { MdWork } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillCheckCircleFill } from "react-icons/bs";

import color from "./../../assets/color.png";

// styles
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

const UserType = styled.div`
  position: absolute;
  margin: 3.5rem 10rem;
  color: #8165df;
  width: 25vw;
  /* height: 50px;
  font-weight: 700; */
  font-size: 1.6rem;
  line-height: 2.4rem;
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
  font-size: 1rem;
  line-height: 0.8rem;
  color: #d63031;
  text-align: left;
`;

const Label = styled.div`
  color: #404248;
  text-align: left;
  margin: 5vh 0 3vh 0;
  margin-bottom: 2vh;
  font-style: normal;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.3rem;
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
  width: auto;
  height: auto;
  border: solid #9c9c9c 0.5px;
  background: #ffffff;
  margin-left: 10px;
`;

const Button = styled.button`
  padding: 0.5rem;
  margin-left: 20px;
  border-radius: 0.4rem;
  border: none;
  background: #8165df;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 10px;
  color: #ffffff;
  cursor: pointer;
`;

const PwMsg = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.1rem;
  color: #d63031;
  text-align: left;
  margin: 0.5rem 1em;
`;

const BtnDiv = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const NextBtn = styled.button`
  /* width: 4vw;
  height: 3vh; */
  padding: 1vw 2vh;
  border-radius: 10%;
  border: none;
  color: white;
  background: #8165df;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  font-size: 1rem;
  cursor: pointer;
`;

const SignUpCorpPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [isEmailVerificationRequested, setIsEmailVerificationRequested] =
    useState(false);
  const [isAuthCode, setIsAuthCode] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === "code") {
      setCode(e.target.value);
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  // 인증코드 요청
  /* 입력 데이터 검증 및 공백 시 처리 필요 */
  const getAuthCode = async (e) => {
    e.preventDefault();

    try {
      setIsEmailVerificationRequested(true);

      const data = {
        email: form.email,
      };

      const res = await fetchGetAuthCode(data);

      if (res.status === 200) {
        alert("인증번호 요청!");
      } else {
        alert("요청 실패!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 인증코드 확인
  const codeCheck = async (e) => {
    e.preventDefault();

    try {
      const data = {
        code,
      };

      const res = await fetchEmailVerificationCode(data);

      if (res.status === 200) {
        alert("인증번호 일치!");

        setIsAuthCode(true);
      } else {
        alert("인증번호 불일치!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 회원가입
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: form.email,
      password: form.password,
      username: form.username,
    };

    try {
      const res = await fetchOfficeSignUp(data);

      if (res.status === 200) {
        navigate("/auth/sign-in");
      } else {
        alert("회원가입 실패");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <UserType>
          <MdWork size="1.3rem" /> 기업용
        </UserType>
        <SignupDiv>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Ms style={{ display: `block` }}>필수항목 *</Ms>
            <Label>
              이메일을 입력해주세요.
              <Ms>*</Ms>
            </Label>
            <Input
              type="text"
              name="email"
              onChange={handleInputChange}
              required
            />
            <Button onClick={getAuthCode} type="button">
              인증번호 요청
            </Button>
            <Label>
              인증번호를 입력해주세요.<Ms>*</Ms>
            </Label>
            <Input
              disabled={!isEmailVerificationRequested}
              type="text"
              name="code"
              onChange={handleInputChange}
              required
            />
            <Button onClick={codeCheck} type="button">
              확인
            </Button>
            <Label>
              비밀번호를 입력해주세요.<Ms>*</Ms>
            </Label>
            <Input
              type="password"
              name="password"
              onChange={handleInputChange}
              required
            />
            <PwMsg>
              비밀번호는 영문 대소문자, 특수문자(*,!,~,?)를 포함하여
              <br />
              8~16자 사이로 설정해주세요.
            </PwMsg>
            <Label>
              이름을 입력해주세요.<Ms>*</Ms>
            </Label>
            <Input
              type="text"
              name="username"
              onChange={handleInputChange}
              required
            />
            <BtnDiv>
              <NextBtn disabled={!isAuthCode}>
                {/* <IoIosArrowForward style={{ width: 25, height: 25 }} /> */}
                다음
              </NextBtn>
            </BtnDiv>
          </form>
        </SignupDiv>
      </MainDiv>
    </Test>
  );
};

export default SignUpCorpPage;
