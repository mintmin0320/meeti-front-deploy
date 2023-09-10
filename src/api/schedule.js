import axios from 'axios';

const BASE_URL = `https://${process.env.REACT_APP_SERVER_URI}`;
const userId = localStorage.getItem('userId');

export const fetchAddSchedule = async (data) => {

  try {
    const res = await axios.post(`${BASE_URL}/meeti/reg/calender/${userId}`, data);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchGetSchedule = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/meeti/calender/search/${userId}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDeleteSchedule = async (scheduleId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/meeti/calender/delete/${scheduleId}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};