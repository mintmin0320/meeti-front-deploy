import axios from 'axios';

// constants
import {
  ADD_SCHEDULE,
  DELETE_SCHEDULE,
  READ_SCHEDULE
} from '../constants/urls/scheduleUrls';

// 일정 - 일정 등록
export const fetchAddSchedule = (userId, data) => {
  try {
    return axios.post(`${ADD_SCHEDULE}/${userId}`, data);
  } catch (error) {
    throw error;
  }
};

// 일정 - 일정 조회
export const fetchGetScheduleList = (userId) => {
  try {
    return axios.get(`${READ_SCHEDULE}/${userId}`);
  } catch (error) {
    throw error;
  }
};

// 일정 - 일정 삭제
export const fetchDeleteSchedule = (scheduleId) => {
  try {
    return axios.delete(`${DELETE_SCHEDULE}/${scheduleId}`);
  } catch (error) {
    throw error;
  }
};