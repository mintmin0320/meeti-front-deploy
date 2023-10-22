import axios from 'axios';

// constants
import {
  ACCOUNT_DELETION,
  SIGN_OUT,
  REFRESH_TOKEN,
  SINGIN,
  PERSONAL_SIGNUP,
  OFFICE_SIGNUP,
  REQUEST_EMAIL,
  VALID_CODE
} from '../constants/urls/authUrls';

// 로그인
export const fetchSignIn = async (data) => {
  const res = await axios.post(SINGIN, data);
  const { accessToken, refreshToken } = res.data;

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('userId', res.data.id);

  return res;
};

// 토큰 재요청
export const fetchGetRefreshToken = (refreshToken) => {
  return axios.post(REFRESH_TOKEN, { refreshToken });
};

// 개인 회원가입
export const fetchPersonalSignUp = (data) => {
  return axios.post(PERSONAL_SIGNUP, data);
};

// 기업 회원가입
export const fetchOfficeSignUp = (data) => {
  return axios.post(OFFICE_SIGNUP, data);
};

// 이메일 인증 요청
export const fetchGetAuthCode = (data) => {
  return axios.post(REQUEST_EMAIL, data);
};

// 이메일 인증 코드 확인
export const fetchEmailVerificationCode = (data) => {
  return axios.post(VALID_CODE, data);
};

// 회원탈퇴
export const fetchAccountDeletion = (userId) => {
  return axios.delete(`${ACCOUNT_DELETION}/${userId}`);
};

// 로그아웃
export const fetchSignOut = () => {
  return axios.post(SIGN_OUT);
};