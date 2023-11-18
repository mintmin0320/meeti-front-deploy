import axios from 'axios';

import {
  ADD_SCHEDULE,
  DELETE_SCHEDULE,
  READ_SCHEDULE
} from '../../constants/urls/scheduleUrls';

// 일정 조회
export const getScheduleData = async (userId) => {
  const { data } = await axios.get(`${READ_SCHEDULE}/${userId}`);

  return data;
};

// 일정 등록
export const postAddSchedule = async ({ userId, params }) => {
  return await axios.post(`${ADD_SCHEDULE}/${userId}`, params);
};

// 일정 삭제
export const deleteSchedule = async (scheduleId) => {
  return await axios.delete(`${DELETE_SCHEDULE}/${scheduleId}`);
};