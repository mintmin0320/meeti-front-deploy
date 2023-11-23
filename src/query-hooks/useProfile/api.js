import axios from 'axios';

import {
  USER_INFO,
  EDIT_INFO
} from '../../constants/urls/profileUrls';

// 유저 정보 조회
export const getUserData = async (userId) => {
  const { data } = await axios.get(`${USER_INFO}/${userId}`);

  return data;
};

// 유저 정보 수정사항 저장
export const postEditData = async (userId, formData) => {
  return await axios.post(`${EDIT_INFO}/${userId}`, formData);
};