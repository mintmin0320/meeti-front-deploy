import axios from 'axios';

// constants
import {
  ADD_MINUTES,
  DELETE_MINUTES,
  EDIT_MINUTES,
  READ_MINUTES
} from '../constants/urls/minutesUrls';

// 회의록 리스트 조회
export const fetchMinutesList = (userId) => {
  return axios.get(`${READ_MINUTES}/${userId}`);
};

// 회의록 추가
export const fetchAddMinutes = (data, userId) => {
  return axios.post(`${ADD_MINUTES}/${userId}`, data);
};

// 회의록 삭제
export const fetchDeleteMinutes = (meetingId) => {
  return axios.delete(`${DELETE_MINUTES}/${meetingId}`);
};

// 회의록 수정
export const fetchEditMinutes = (data, meetingId, userId) => {
  return axios.post(`${EDIT_MINUTES}/${meetingId}/${userId}`, data);
};