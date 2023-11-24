import { useState, useCallback } from "react";

import {
  Container,
  MainSection,
  BackColor
} from '../../styles/CommonStyles';
import color from "./../../assets/color.png";
import * as S from './styles/SignInPage.style';

import SignIn from '../../components/auth/SignInForm';

import { useSignIn } from '../../query-hooks/useAuth';

const SignInPage = () => {
  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
  });

  const { submit } = useSignIn();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setSignIn((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await submit(signIn);
  };

  return (
    <Container>
      <MainSection className="MainDiv">
        <BackColor
          src={color}
          alt='background image'
          style={{ opacity: 0.2 }}
        />
        <S.LoginWrap>
          <S.Title>Login</S.Title>
          <S.SubTitle>반갑습니다 미티에 오신 것을 환영해요!👋</S.SubTitle>
          <SignIn
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </S.LoginWrap>
      </MainSection>
    </Container>
  );
};

export default SignInPage;
