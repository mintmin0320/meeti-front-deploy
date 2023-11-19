import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

import { fetchSignIn } from "../../api/auth";

import {
  Container,
  MainSection,
  BackColor
} from '../../styles/CommonStyles';
import color from "./../../assets/color.png";

const LoginWrap = styled.div`
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

const Button = styled.button`
  padding: 1vh 4vh;
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
    email: '',
    password: '',
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setSignIn((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

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
    <Container>
      <MainSection className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <LoginWrap>
          <Title>Login</Title>
          <SubTitle>반갑습니다 미티에 오신 것을 환영해요!👋</SubTitle>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <Label>ID</Label>
            <Input
              type="text"
              name="email"
              onChange={handleChange}
            />
            <Label>PW</Label>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
            />
            <SignupLink to="/auth">아직 미티의 회원이 아니신가요?</SignupLink>
            <Button>로그인</Button>
          </form>
        </LoginWrap>
      </MainSection>
    </Container>
  );
};

export default SignInPage;
