import { Link } from "react-router-dom";

import * as S from './styles/SignUp.style';

import { MdWork, MdPerson } from "../../common/icons/index";

const SignUp = () => {
  return (
    <S.SignupDiv>
      <S.TitleDiv>
        <S.Title>Sign up</S.Title>
        <S.SubTitle>안녕하세요 회의실과 캘린더를 함께하여</S.SubTitle>
        <S.SubTitle>효율적으로 미팅을 진행 할 수 있도록 하는</S.SubTitle>
        <S.SubTitle>저희는 “미티” 입니다👋</S.SubTitle>
      </S.TitleDiv>
      <S.ButtonDiv>
        <Link to="/auth/personal" style={{ textDecoration: "none" }}>
          <S.Button>
            <MdPerson style={{ color: "#8165DF" }} size="1.6rem" />
            <S.Text>개인용</S.Text>
            <S.Br />
            <S.Join>회원가입하기</S.Join>
          </S.Button>
        </Link>
        <Link to="/auth/corp" style={{ textDecoration: "none" }}>
          <S.Button>
            <MdWork style={{ color: "#8165DF" }} size="1.6rem" />
            <S.Text>기업용</S.Text>
            <S.Br />
            <S.Join>회원가입하기</S.Join>
          </S.Button>
        </Link>
      </S.ButtonDiv>
    </S.SignupDiv>
  );
};

export default SignUp;
