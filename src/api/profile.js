import axios from 'axios';

// constants
import {
  USER_INFO,
  EDIT_INFO
} from '../constants/urls/profileUrls';

const BASE_URL = `${process.env.REACT_APP_SERVER_URL}`;

// 유저 정보 조회
export const fetchGetUserInfo = () => {
  try {
    const res = axios.get(BASE_URL + USER_INFO);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchEditInfo = (formData) => {
  try {
    const res = axios.post(BASE_URL + EDIT_INFO, formData);

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