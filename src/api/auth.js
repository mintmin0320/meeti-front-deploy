import axios from 'axios';

const BASE_URL = `https://${process.env.REACT_APP_SERVER_URI}`;

export const fetchSignIn = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/meeti/user/login`, data);
    const { accessToken, refreshToken } = res.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('userId', res.data.id);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSignUp = (data) => {
  try {
    const res = axios.post(`${BASE_URL}/meeti/user/join`, data);

    return res;
  } catch (error) {
    throw error;
  }
};
