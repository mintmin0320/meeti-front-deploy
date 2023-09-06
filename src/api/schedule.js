import axios from 'axios';

const BASE_URL = `http://${process.env.REACT_APP_SERVER_URI}`;

export const fetchAddSchedule = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': '',
    }

    const res = await axios.post(`${BASE_URL}/meeti/reg/calender/${1}`, data, { headers });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchGetSchedule = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': '',
    }

    const res = await axios.get(`${BASE_URL}/meeti/calender/search/${1}`, { headers });

    return res.data;
  } catch (error) {
    throw error;
  }
};

// export const getSchedule = async (scheduleId) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/schedule/${scheduleId}`);



//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
