import axios from 'axios';

const BASE_URL = `https://${process.env.REACT_APP_SERVER_URI}`;
const userId = localStorage.getItem('userId');

export const fetchGetMinutes = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/meeti/meeting/search/${userId}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAddMinutes = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/meeti/meeting/reg/${userId}`, data);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDeleteMinutes = async (minutesId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/meeti/meeting/delete/${minutesId}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};