import axios from 'axios';

// constants
import {
  ADD_MINUTES,
  DELETE_MINUTES,
  EDIT_MINUTES,
  READ_MINUTES
} from '../../constants/urls/minutesUrls';


// 회의록 리스트 조회
export const getMinutesData = async (userId) => {
  const { data } = await axios.get(`${READ_MINUTES}/${userId}`);

  return data;
};

// 회의록 저장
export const postAddMinutes = async (userId, params) => {
  return await axios.post(`${ADD_MINUTES}/${userId}`, params);
};

// 회의록 삭제
export const deleteMinutes = async (meetingId) => {
  return await axios.delete(`${DELETE_MINUTES}/${meetingId}`);
};

// 회의록 수정
export const postEditMinutes = async (userId, meetingId, params) => {
  return await axios.post(`${EDIT_MINUTES}/${meetingId}/${userId}`, params);
};
