import axios from 'axios';

// constants
import {
  ADD_MINUTES,
  DELETE_MINUTES,
  EDIT_MINUTES,
  READ_MINUTES
} from '../constants/urls/minutesUrls';

// 회의록 리스트 조회
export const getMinutesData = ({ userId }) => {

  const { data } = axios.get(`${READ_MINUTES}/${userId}`);

  return data;
};

// 회의록 추가
export const postAddMinutes = ({ params, userId }) => {
  return axios.post(`${ADD_MINUTES}/${userId}`, params);
};

// 회의록 삭제
export const deleteMinutes = ({ meetingId }) => {
  return axios.delete(`${DELETE_MINUTES}/${meetingId}`);
};

// 회의록 수정
export const postEditMinutes = ({ params, meetingId, userId }) => {
  return axios.post(`${EDIT_MINUTES}/${meetingId}/${userId}`, params);
};