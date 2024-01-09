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
      <S.Button aria-label='로그인'>로그인</S.Button>
    </S.Form>
  );
};

export default SignIn