import { useState, useCallback } from "react";

import { MdWork } from '../../common/icons/index';

import color from "./../../assets/color.png";
import {
  Container,
  MainSection,
  BackColor,
  SignUpTypeText,
  SignUpWrap,
  ValidText,
  Input,
  Button,
  InputText,
  ButtonBox,
  SignUpButton
} from '../../styles/CommonStyles';

import SignUpForm from '../../components/auth/SignUpForm';

import {
  useAuthCodeRequest,
  useCheckVerificationCode,
  useOfficeSignUpSignUp
} from '../../query-hooks/useAuth';

const SignUpCorpPage = () => {
  const [code, setCode] = useState("");
  const [isEmailVerificationRequested, setIsEmailVerificationRequested] =
    useState(false);
  const [isAuthCode, setIsAuthCode] = useState(false);
  const [signUpState, setSignUpState] = useState({
    email: '',
    password: '',
    username: '',
  });

  const { submit } = useOfficeSignUpSignUp();
  const { requestAuthCode } = useAuthCodeRequest();
  const { checkVerification } = useCheckVerificationCode();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    if (name === 'code') {
      setCode(e.target.value);
    } else {
      setSignUpState((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  }, []);

  // 인증코드 요청
  const handleAuthCode = async () => {
    setIsEmailVerificationRequested(true);

    await requestAuthCode(signUpState.email);
  };

  // 인증코드 확인
  const handleValidCode = async () => {
    await checkVerification(code);

    setIsAuthCode(true);
  };

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
          <MdWork size="1.3rem" />
          기업용
        </SignUpTypeText>
        <SignUpWrap>
          <SignUpForm onSubmit={handleSubmit}>
            <InputText>
              이메일을 입력해주세요.
            </InputText>
            <Input
              type="text"
              name="email"
              onChange={handleChange}
              required
            />
            <Button onClick={handleAuthCode} type="button">
              인증번호 요청
            </Button>
            <InputText>인증번호를 입력해주세요.</InputText>
            <Input
              disabled={!isEmailVerificationRequested}
              type="text"
              name="code"
              onChange={handleChange}
              required
            />
            <Button onClick={handleValidCode} type="button">
              확인
            </Button>
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
              <SignUpButton
                disabled={!isAuthCode}
                aria-label='회원가입'
              >
                다음
              </SignUpButton>
            </ButtonBox>
          </SignUpForm>
        </SignUpWrap>
      </MainSection>
    </Container>
  );
};

export default SignUpCorpPage;
