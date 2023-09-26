import axios from 'axios';

// 유저 정보 조회
export const fetchGetUserInfo = () => {
  try {
    const res = axios.get(`/meeti/user/info`);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchEditInfo = (formData) => {
  try {
    const res = axios.post(`/meeti/user/update`, formData);

    return res;
  } catch (error) {
    throw error;
  }
};

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