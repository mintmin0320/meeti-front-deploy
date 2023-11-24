import * as S from './styles/SignInForm.style';

const SignIn = ({ handleSubmit, handleChange }) => {
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label>
        ID
        <S.Input
          type="text"
          name="email"
          onChange={handleChange}
          required
        />
      </S.Label>
      <S.Label>
        PW
        <S.Input
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
      </S.Label>
      <S.SignupLink to="/auth">아직 미티의 회원이 아니신가요?</S.SignupLink>
      <S.Button aria-label='로그인'>로그인</S.Button>
    </S.Form>
  );
};

export default SignIn