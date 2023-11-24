import axios from 'axios';

import {
  ACCOUNT_DELETION,
  SIGN_OUT,
  SIGN_IN,
  PERSONAL_SIGNUP,
  OFFICE_SIGNUP,
  REQUEST_EMAIL,
  VALID_CODE
} from '../../constants/urls/authUrls';

// 로그인
export const signIn = async (params) => {
  const { data } = await axios.post(SIGN_IN, params);

  return data;
};

// 개인 회원가입
export const personalSignUp = async (params) => {
  return await axios.post(PERSONAL_SIGNUP, params);
};

// 기업 회원가입
export const officeSignUp = async (params) => {
  return await axios.post(OFFICE_SIGNUP, params);
};

// 이메일 인증 요청
export const authCodeRequest = async (email) => {
  return await axios.post(REQUEST_EMAIL, { email });
};

// 이메일 인증 코드 확인
export const checkVerificationCode = async (code) => {
  return await axios.post(VALID_CODE, { code });
};

// 로그아웃
export const postSignOut = async () => {
  return await axios.post(SIGN_OUT);
};

// 회원탈퇴
export const deleteAccountDeletion = async (userId) => {
  return await axios.delete(`${ACCOUNT_DELETION}/${userId}`);
};
