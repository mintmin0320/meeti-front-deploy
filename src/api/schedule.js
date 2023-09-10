import axios from 'axios';

const BASE_URL = `http://${process.env.REACT_APP_SERVER_URI}`;

export const fetchAddSchedule = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE2OTQzMjg0MjUsImV4cCI6MTY5NDMzNzQyNSwiaWQiOjEsInJvbGUiOiJDT01NT04ifQ.WB7NMNVjyeWqTUUKJoS6u4hITj09CHuFdJn_0janupDlH2aGRav9fHb7LEseZmQKX3Q-VyR3DZjX05COAyxg6A',
    }
    const res = await axios.post(`${BASE_URL}/meeti/reg/calender/${1}`, data, { headers });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchGetSchedule = async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE2OTQzMzQzMDksImV4cCI6MTY5NDM0MzMwOSwiaWQiOjEsInJvbGUiOiJDT01NT04ifQ.LwtYSkNRg_Ze3luNgfhbX5K15OcoiGlcj7bKxnFkuhkghuuYHhRZ_9aPJNv1-KGxljx98rNyeS2sn-_vgEfYWQ',
    }
    const res = await axios.get(`${BASE_URL}/meeti/calender/search/${1}`, { headers });

    return res.data;
  } catch (error) {
    throw error;
  }
};