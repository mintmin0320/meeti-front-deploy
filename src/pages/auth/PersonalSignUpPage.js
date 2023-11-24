import { useState, useCallback } from "react";

import { MdPerson } from '../../common/icons/index';

import {
  Container,
  MainSection,
  BackColor,
  SignUpTypeText,
  SignUpWrap,
  ValidText,
  Input,
  InputText,
  ButtonBox,
  SignUpButton
} from '../../styles/CommonStyles';
import color from "./../../assets/color.png";

import SignUpForm from '../../components/auth/SignUpForm';

import { usePersonalSignUp } from '../../query-hooks/useAuth';

const SignUpPage = () => {
  const [signUpState, setSignUpState] = useState({
    email: '',
    password: '',
    username: '',
  });

  const { submit } = usePersonalSignUp();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setSignUpState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  // 회원가입
  const handleSubmit = async (e) => {
    e.preventDefault();

    await submit(signUpState);
  };

  return (
    <Container>
      <MainSection>
        <BackColor
          src={color}
          alt='background image'
          style={{ opacity: 0.2 }}
        />
        <SignUpTypeText>
          <MdPerson size="1.3rem" />
          개인용
        </SignUpTypeText>
        <SignUpWrap>
          <SignUpForm onSubmit={handleSubmit}>
            <InputText>이메일을 입력해주세요.</InputText>
            <Input
              type="text"
              name="email"
              onChange={handleChange}
              required
            />
            <InputText>이름을 입력해주세요.</InputText>
            <Input
              type="text"
              name="username"
              onChange={handleChange}
              required
            />
            <InputText>비밀번호를 입력해주세요.</InputText>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
            <ValidText>
              비밀번호는 영문 대소문자, 특수문자(*,!,~,?)를 포함하여
              <br />
              8~16자 사이로 설정해주세요.
            </ValidText>
            <ButtonBox>
              <SignUpButton aria-label='회원가입'>
                회원가입
              </SignUpButton>
            </ButtonBox>
          </SignUpForm>
        </SignUpWrap>
      </MainSection>
    </Container>
  );
};

export default SignUpPage;
