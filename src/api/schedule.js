import axios from 'axios';

// constants
import {
  ADD_SCHEDULE,
  CONTACTS_SCHEDULE,
  DELETE_SCHEDULE,
  READ_SCHEDULE
} from '../constants/urls/scheduleUrls';

// 일정 등록
export const fetchAddSchedule = (userId, data) => {
  return axios.post(`${ADD_SCHEDULE}/${userId}`, data);
};

// 일정 조회
export const fetchScheduleList = (userId) => {
  return axios.get(`${READ_SCHEDULE}/${userId}`);
};

// 친구 일정 조회
export const fetchContactList = (userId, friendId) => {
  return axios.get(`${CONTACTS_SCHEDULE}/${userId}/${friendId}`);
};

// 일정 삭제
export const fetchDeleteSchedule = (scheduleId) => {
  return axios.delete(`${DELETE_SCHEDULE}/${scheduleId}`);
};