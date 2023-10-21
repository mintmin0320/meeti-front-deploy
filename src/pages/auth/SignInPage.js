import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

// apis
import { fetchSignIn } from "../../api/auth";

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
  text-align: center;
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

const LoginDiv = styled.div`
  border-radius: 20px;
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
  font-size: 1rem;
  margin-bottom: 3vh;
  color: #535571;
`;

const Label = styled.label`
  color: #8165df;
  text-align: left;
  padding-left: 0.8rem;
  font-size: 1rem;
`;

const SignupLink = styled(Link)`
  color: #8165df;
  text-align: left;
  padding-left: 10px;
  font-size: 1;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background-color: white;
  border: solid #9c9c9c 0.1px;
  width: 280px;
`;

const Btn = styled.button`
  /* width: 290px;
  height: 30px; */
  padding: 2vh 4vh;
  font-size: 1.1rem;
  margin: 4rem auto;
  color: white;
  background-color: #8165df;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.1);
  cursor: pointer;
`;

const SignInPage = () => {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState({
    email: null,
    password: null,
  });

  const handleInputChange = (e) => {
    setSignIn({
      ...signIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: signIn.email,
      password: signIn.password,
    };

    try {
      const res = await fetchSignIn(data);

      if (res.data) {
        navigate("/");
      } else {
        alert('회원가입 실패!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <LoginDiv>
          <Title>Login</Title>
          <SubTitle>반갑습니다 미티에 오신 것을 환영해요!👋</SubTitle>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={(e) => handleSubmit(e)}
          >
            <Label>ID</Label>
            <Input
              type="text"
              name="email"
              onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}
            />
            <Label>PW</Label>
            <Input
              type="password"
              name="password"
              onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
            />
            <SignupLink to="/auth">아직 미티의 회원이 아니신가요?</SignupLink>
            <Btn>로그인</Btn>
          </form>
        </LoginDiv>
      </MainDiv>
    </Test>
  );
};

export default SignInPage;
