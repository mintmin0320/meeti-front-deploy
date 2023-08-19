import axios from 'axios';

const BASE_URL = `https://${process.env.REACT_APP_SERVER_URI}`;

export const setSchedule = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/schedule/set-schedule`, data);

    return response;
  } catch (error) {
    throw error;
  }
};

export const getSchedule = async (scheduleId) => {
  try {
    const response = await axios.get(`${BASE_URL}/schedule/${scheduleId}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};
