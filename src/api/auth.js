import axios from 'axios';

// constants
import {
  ACCOUNT_DELETION,
  SIGN_OUT
} from '../constants/urls/authUrls';

export const fetchSignIn = async (data) => {
  const res = await axios.post(`/meeti/user/login`, data);
  const { accessToken, refreshToken } = res.data;

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('userId', res.data.id);

  return res;
};

export const fetchGetRefreshToken = (refreshToken) => {
  return axios.post(`/meeti/access-token/issue`, { refreshToken });
};

export const fetchPersonalSignUp = (data) => {
  return axios.post(`/meeti/user/join`, data);
};

export const fetchOfficeSignUp = (data) => {
  return axios.post(`/meeti/user/join/office`, data);
};

export const fetchGetAuthCode = (data) => {
  return axios.post(`/email/valid`, data);
};

export const fetchEmailVerificationCode = (data) => {
  return axios.post(`/email/valid / code`, data);
};

// 회원탈퇴
export const fetchAccountDeletion = (userId) => {
  return axios.delete(`${ACCOUNT_DELETION}/${userId}`);
};

// 로그아웃
export const fetchSignOut = () => {
  return axios.post(SIGN_OUT);
};