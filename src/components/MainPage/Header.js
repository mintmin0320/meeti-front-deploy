import React from "react";
import styled, { css } from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
//image
import color from "./../../assets/color.png";
import logo from "./../../assets/logo.png";

const HeaderDiv = styled.div`
  position: static;
  background-color: aliceblue;
  display: flex;
`;
const LogoColor = styled.img`
  position: absolute;
  width: 213px;
  height: 176px;
`;
const Logo = styled.img`
  position: relative;
  width: 149px;
  left: 35px;
  top: 30px;
  cursor: pointer;
`;
const Input = styled.input`
  position: absolute;
  width: 466px;
  height: 34px;
  left: 213px;
  top: 66px;
  border: 0.8px solid #595959;
  border-radius: 50px;
  padding-left: 20px;
`;
const SignUp = styled.button`
  position: absolute;
  width: 108px;
  height: 43px;
  left: 1007px;
  top: 57px;
  color: #0e006b;
  border: 2px solid #0e006b;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;
`;
const Login = styled.button`
  position: absolute;
  width: 108px;
  height: 43px;
  left: 1137px;
  top: 57px;
  color: #ffffff;
  background: #0e006b;
  border-radius: 10px;
  cursor: pointer;
`;
const ColorPoint = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 30px;

  ${(props) =>
    props.red &&
    css`
      background-color: #ff7675;
      left: 1032px;
      top: 152px;
    `}
  ${(props) =>
    props.blue &&
    css`
      background-color: #74b9ff;
      left: 1061px;
      top: 152px;
    `}
    ${(props) =>
    props.purple &&
    css`
      background-color: #a29bfe;
      left: 1090px;
      top: 152px;
    `}
    ${(props) =>
    props.yellow &&
    css`
      background-color: #fdcb6e;
      left: 1119px;
      top: 152px;
    `}
    ${(props) =>
    props.orange &&
    css`
      background-color: #f3a683;
      left: 1148px;
      top: 152px;
    `}
    ${(props) =>
    props.pink &&
    css`
      background-color: #f8a5c2;
      left: 1177px;
      top: 152px;
    `}
    ${(props) =>
    props.mint &&
    css`
      background-color: #63cdda;
      left: 1206px;
      top: 152px;
    `}
    ${(props) =>
    props.green &&
    css`
      background-color: #78e08f;
      left: 1235px;
      top: 152px;
    `}
`;
const Header = () => {
  return (
    <HeaderDiv>
      <div className="left">
        <LogoColor src={color} />
        <Logo src={logo} />
      </div>
      <div className="mid">
        <form>
          <Input />
          <AiOutlineSearch className="AiOutlineSearch" />
        </form>
      </div>
      <div className="right">
        <SignUp>회원가입</SignUp>
        <Login>로그인</Login>
        <div>
          <ColorPoint red />
          <ColorPoint blue />
          <ColorPoint purple />
          <ColorPoint yellow />
          <ColorPoint orange />
          <ColorPoint pink />
          <ColorPoint mint />
          <ColorPoint green />
        </div>
      </div>
    </HeaderDiv>
  );
};

export default Header;
