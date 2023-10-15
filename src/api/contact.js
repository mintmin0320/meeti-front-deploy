import axios from 'axios';

// constants
import { GET_CONTACT_LIST } from '../constants/urls/contactUrls';

// 친구 추가
export const fetchGetMinutes = (userId, friendId) => {
  try {
    return axios.post(`${GET_CONTACT_LIST}/${{ userId }}/${friendId}`);
  } catch (error) {
    throw error;
  }
};

// export const fetchAddMinutes = (data, userId) => {
//   try {
//     const res = axios.post(`${ADD_MINUTES}/${userId}`, data);

//     return res;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchDeleteMinutes = (meetingId) => {
//   try {
//     const res = axios.delete(`${DELETE_MINUTES}/${meetingId}`);

//     return res;
//   } catch (error) {
//     throw error;
//   }
// };

// export const fetchEditMinutes = (data, meetingId, userId) => {
//   try {
//     const res = axios.post(`${EDIT_MINUTES}/${meetingId}/${userId}`, data);

//     return res;
//   } catch (error) {
//     throw error;
//   }
// };