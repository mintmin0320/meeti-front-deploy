import axios from 'axios';

const BASE_URL = `https://${process.env.REACT_APP_SERVER_URI}`;
const userId = localStorage.getItem('userId');

export const fetchGetMinutes = () => {
  try {
    const res = axios.get(`${BASE_URL}/meeti/meeting/search/${userId}`);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchAddMinutes = (data) => {
  try {
    const res = axios.post(`${BASE_URL}/meeti/meeting/reg/${userId}`, data);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchDeleteMinutes = (minutesId) => {
  try {
    const res = axios.delete(`${BASE_URL}/meeti/meeting/delete/${minutesId}`);

    return res;
  } catch (error) {
    throw error;
  }
};