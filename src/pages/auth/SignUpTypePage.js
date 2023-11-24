import { Link } from "react-router-dom";

import {
  Container,
  MainSection,
  BackColor
} from '../../styles/CommonStyles';
import color from "./../../assets/color.png";
import * as S from './styles/SignUp.style';

import { MdWork, MdPerson } from "../../common/icons/index";

const SignUpTypePage = () => {
  return (
    <Container>
      <MainSection>
        <BackColor
          src={color}
          alt='background image'
          style={{ opacity: 0.2 }}
        />
        <S.SignUpWrap>
          <S.TitleBox>
            <S.Title>회원가입</S.Title>
            <S.SubTitle>안녕하세요 회의실과 캘린더를 함께하여</S.SubTitle>
            <S.SubTitle>효율적으로 미팅을 진행 할 수 있도록 하는</S.SubTitle>
            <S.SubTitle>저희는 “미티” 입니다 👋</S.SubTitle>
          </S.TitleBox>
          <S.ButtonBox>
            <Link to="/auth/personal" style={{ textDecoration: "none" }}>
              <S.Button aria-label='개인용 회원가입'>
                <MdPerson style={{ color: "#8165DF" }} size="1.6rem" />
                <S.Text>개인용</S.Text>
                <S.Br />
                <S.JoinInfoText>회원가입하기</S.JoinInfoText>
              </S.Button>
            </Link>
            <Link to="/auth/corp" style={{ textDecoration: "none" }}>
              <S.Button aria-label='기업용 회원가입'>
                <MdWork style={{ color: "#8165DF" }} size="1.6rem" />
                <S.Text>기업용</S.Text>
                <S.Br />
                <S.JoinInfoText>회원가입하기</S.JoinInfoText>
              </S.Button>
            </Link>
          </S.ButtonBox>
        </S.SignUpWrap>
      </MainSection>
    </Container>
  );
};

export default SignUpTypePage;
