import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_SERVER_URL}`;

export const fetchSignIn = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/meeti/user/login`, data);
    const { accessToken, refreshToken } = res.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('userId', res.data.id);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchGetRefreshToken = (refreshToken) => {
  try {
    const res = axios.post(`${BASE_URL}/meeti/access-token/issue`, { refreshToken });

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchPersonalSignUp = (data) => {
  try {
    const res = axios.post(`${BASE_URL}/meeti/user/join`, data);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchOfficeSignUp = (data) => {
  try {
    const res = axios.post(`${BASE_URL}/meeti/user/join/office`, data);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchGetAuthCode = (data) => {
  try {
    const res = axios.post(`${BASE_URL}/email/valid`, data);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchEmailVerificationCode = (data) => {
  try {
    const res = axios.post(`${BASE_URL}/email/valid/code`, data);

    return res;
  } catch (error) {
    throw error;
  }

};

// 회원탈퇴
export const fetchAccountDeletion = (userId) => {
  try {
    const res = axios.delete(`${BASE_URL}/meeti/user/delete/${userId}`);

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');

    return res;
  } catch (error) {
    throw error;
  }
};

// 로그아웃
export const fetchSignOut = () => {
  try {
    const res = axios.post(`${BASE_URL}/meeti/user/logout`);

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');

    return res;
  } catch (error) {
    throw error;
  }
};