import axios from 'axios';

const BASE_URL = `https://${process.env.REACT_APP_SERVER_URI}`;

// 유저 정보 조회
export const fetchGetUserInfo = () => {
  try {
    const res = axios.get(`${BASE_URL}/meeti/user/info`);

    return res;
  } catch (error) {
    throw error;
  }
};

// export const fetchAddMinutes = (data, userId) => {
//   try {
//     const res = axios.post(`${BASE_URL}/meeti/meeting/reg/${userId}`, data);

//     return res;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchDeleteMinutes = (meetingId) => {
//   try {
//     const res = axios.delete(`${BASE_URL}/meeti/meeting/delete/${meetingId}`);

//     return res;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchEditMinutes = (data, meetingId, userId) => {
//   try {
//     const res = axios.post(`${BASE_URL}/meeti/meeting/${meetingId}/${userId}`, data);

//     return res;
//   } catch (error) {
//     throw error;
//   }
// };