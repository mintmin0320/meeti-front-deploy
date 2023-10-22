import axios from 'axios';

// constants
import {
  ADD_SCHEDULE,
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

// 일정 삭제
export const fetchDeleteSchedule = (scheduleId) => {
  return axios.delete(`${DELETE_SCHEDULE}/${scheduleId}`);
};