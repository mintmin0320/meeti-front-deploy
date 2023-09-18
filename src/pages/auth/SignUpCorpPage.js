import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// apis
import { fetchOfficeSignUp } from '../../api/auth';

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

const SignUpCorpPage = () => {
  const navigate = useNavigate();
  const [authCode, setAuthCode] = useState(null);
  const [isAuthCode, setIsAuthCode] = useState(false);
  const [form, setForm] = useState({
    email: null,
    password: null,
    username: null,
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 인증코드 요청
  const getAuthNum = async e => {
    e.preventDefault();
    // const url = `http://${process.env.REACT_APP_SECRET_URL}/users/email-verify`;
    // const data = {
    //   email: signUp.email,
    // };
    // try {
    //   const res = await axios.post(url, data, { withCredentials: true });
    //   setState({
    //     ...state,
    //     codeCheck: false,
    //   });
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // 인증코드 확인
  const codeCheck = async e => {
    e.preventDefault();
    // const url = `http://${process.env.REACT_APP_SERVER_URI}/users/email-authentication`;
    // const data = {
    //   authNum: state.authCode,
    // };
    // try {
    //   const res = await axios.post(url, data);
    //   console.log(res);
    //   if (res.data.result) {
    //     setState({
    //       ...state,
    //       emailCheck: true,
    //     });
    //     alert("인증 성공");
    //   } else {
    //     alert("잘못된 인증번호입니다.");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
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

      if (res.data) {
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
          <MdWork /> 기업용
        </UserType>
        <SignupDiv>
          <form onSubmit={e => handleSubmit(e)}>
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
            <Button onClick={getAuthNum} type="button">
              인증번호받기
            </Button>
            <Label>
              인증번호를 입력해주세요.<Ms>*</Ms>
            </Label>
            <Input
              disabled={isAuthCode}
              type="text"
              name="authCode"
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
              <NextBtn>
                <IoIosArrowForward style={{ width: 25, height: 25 }} />
              </NextBtn>
            </BtnDiv>
          </form>
        </SignupDiv>
      </MainDiv>
    </Test>
  );
};

export default SignUpCorpPage;