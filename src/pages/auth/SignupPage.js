import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import { FaBookOpen } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import color from "./../../assets/color.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";


const SignupForm = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    userPw: "",
    name: "",
    authCode: "",
    codeCheck: true, // 인증번호 Input 활성화
    emailCheck: false, // 이메일 인증을 완료해야 회원가입 버튼이 보이게함
  });

  const _handleInputChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // 인증코드 요청
  const getAuthNum = async e => {
    e.preventDefault();
    const url = `http://${process.env.REACT_APP_SERVER_URI}/users/email-verify`;
    const data = {
      email: state.email,
    };
    try {
      const res = await axios.post(url, data, { withCredentials: true });
      setState({
        ...state,
        codeCheck: false,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // 인증코드 확인
  const codeCheck = async e => {
    e.preventDefault();
    const url = `http://${process.env.REACT_APP_SERVER_URI}/users/email-authentication`;
    const data = {
      authNum: state.authCode,
    };
    try {
      const res = await axios.post(url, data);
      console.log(res);
      if (res.data.result) {
        setState({
          ...state,
          emailCheck: true,
        });
        alert("인증 성공");
      }
      else {
        alert("잘못된 인증번호입니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 회원가입
  const handleSubmit = async e => {
    e.preventDefault();
    const url = `https://${process.env.REACT_APP_SERVER_URI}/users/sign-up`;
    const data = {
      email: state.email,
      name: state.name,
      password: state.password
    };
    try {
      const res = await axios.post(url, data);
      console.log(res);
      if (res.data.result) {
        navigate('/calendar');
      } else {
        alert('회원가입 실패');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const isEmailValid = validateEmail(email);
  // const isPwdValid = validatePwd(password);
  // const isConfirmPwd = password === confirmPwd;

  // const [emailMsg, setEmailMsg] = useState("");
  // const [pwdMsg, setPwdMsg] = useState("");
  // const [confirmPwdMsg, setConfirmPwdMsg] = useState("");

  // const validateEmail = (email) => {
  //   return email
  //     .toLowerCase()
  //     .match(
  //       /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  //     );
  // };

  // const validatePwd = (password) => {
  //   return password
  //     .toLowerCase()
  //     .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{10,25}$/);
  // };

  // const onChangeEmail = useCallback(async (e) => {
  //   const currEmail = e.target.value;
  //   setEmail(currEmail);

  //   if (!validateEmail(currEmail)) {
  //     setEmailMsg("이메일 형식이 올바르지 않습니다.");
  //   } else {
  //     setEmailMsg("올바른 이메일 형식입니다.");
  //   }
  // });

  // //비밀번호
  // const onChangePwd = useCallback((e) => {
  //   const currPwd = e.target.value;
  //   setPassword(currPwd);

  //   if (!validatePwd(currPwd)) {
  //     setPwdMsg("영문, 숫자, 특수기호 조합으로 10자리 이상 입력해주세요.");
  //   } else {
  //     setPwdMsg("안전한 비밀번호입니다.");
  //   }
  // }, []);

  //비밀번호 확인
  // const onChangeConfirmPwd = useCallback(
  //   e => {
  //     const currConfirmPwd = e.target.value;
  //     setConfirmPwd(currConfirmPwd);

  //     if (currConfirmPwd !== password) {
  //       setConfirmPwdMsg("비밀번호가 일치하지 않습니다.");
  //     } else {
  //       setConfirmPwdMsg("올바른 비밀번호입니다.");
  //     }
  //   },
  //   [password]
  // );

  // const [pwType, setpwType] = useState({
  //   type: "password",
  //   visible: false,
  // });

  // const handlePasswordType = e => {
  //   setpwType(() => {
  //     if (!pwType.visible) {
  //       return { type: "text", visible: true };
  //     } else {
  //       return { type: "password", visible: false };
  //     }
  //   });
  // };

  return (
    <Test>
      <MainDiv className="MainDiv">
        <BackColor src={color} style={{ opacity: 0.2 }} />
        <Usertype>
          <FaBookOpen /> 학생용
        </Usertype>
        <SignupDiv>
          {/* <form onSubmit={e => handleSubmit(e)}> */}
          <form>
            <Ms style={{ display: `block` }}>필수항목 *</Ms>
            <Label>
              이메일을 입력해주세요.
              <Ms>*</Ms>
              <Purple>
                <BsFillCheckCircleFill />
                이메일은 회원검색으로 사용됩니다.
              </Purple>
            </Label>
            <Input
              type="text"
              name="email"
              onChange={_handleInputChange}
              required
            // onChange={e => {
            //handleOnChange("id", e);
            />
            <Button
              // onClick={getAuthNum}
              type='button'
            >
              인증번호받기
            </Button>
            <Green>
              {/* <BsFillCheckCircleFill /> */}
              {/* 사용가능한 아이디입니다! */}
            </Green>
            <Label>
              인증번호를 입력해주세요.<Ms>*</Ms>
            </Label>
            <Input
              disabled={state.codeCheck}
              type="text"
              name="authCode"
              onChange={_handleInputChange}
              required
            />
            <Button
              // onClick={codeCheck}
              type='button'
            >
              확인
            </Button>
            <Label>
              비밀번호를 입력해주세요.<Ms>*</Ms>
            </Label>
            <Input
              type="password"
              name="userPw"
              onChange={_handleInputChange}
              required
            />
            {/* <span onClick={handlePasswordType}>
            {pwType.visible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span> */}
            <PwMsg>
              비밀번호는 영문 대소문자, 특수문자(*,!,~,?)를 포함하여
              <br />
              8~16자 사이로 설정해주세요.
            </PwMsg>
            <Label>
              이름을 입력해주세요.<Ms>*</Ms>
            </Label>
            <Input
              type="text"
              name="name"
              onChange={_handleInputChange}
              required
            />
            <BtnDiv>
              {state.emailCheck && (
                <NextBtn>
                  <IoIosArrowForward style={{ width: 25, height: 25 }} />
                </NextBtn>
              )}
            </BtnDiv>
          </form>
        </SignupDiv>
      </MainDiv>
    </Test>
  );
};
export default SignupForm;

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
const Usertype = styled.div`
  position: absolute;
  margin: 35px 100px;
  color: #8165df;
  width: 500px;
  height: 50px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;
const SignupDiv = styled.div`
  margin: 30px auto;
  padding: 30px;
  z-index: 3;
  text-align: left;
`;
const Ms = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 7px;
  line-height: 8px;
  color: #d63031;
  text-align: left;
`;
const Label = styled.div`
  color: #404248;
  text-align: left;
  margin: 15px 0 5px 0;
  margin-bottom: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
`;
const Purple = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  color: #8165df;
  margin-left: 5px;
`;
const Green = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  color: #197d2f;
  text-align: left;
  margin: 5px 10px;
`;
const Input = styled.input`
  width: 300px;
  height: 20px;
  border: solid #9c9c9c 0.5px;
  background: #ffffff;
  margin-left: 10px;
`;
const Button = styled.button`
  height: 22px;
  margin-left: 20px;
  border-radius: 4px;
  border: none;
  background: #8165df;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  font-size: 8px;
  line-height: 10px;
  color: #ffffff;
`;
const PwMsg = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  color: #d63031;
  text-align: left;
  margin: 5px 10px;
`;
const BtnDiv = styled.div`
  text-align: center;
  margin-top: 20px;
`;
const NextBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  color: white;
  background: #8165df;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
`;