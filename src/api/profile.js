import axios from 'axios';

// constants
import {
  USER_INFO,
  EDIT_INFO
} from '../constants/urls/profileUrls';

// 유저 정보 조회
export const fetchGetUserInfo = () => {
  return axios.get(USER_INFO);
};

// 유저 정보 수정사항 저장
export const fetchEditInfo = (userId, formData) => {
  return axios.post(`${EDIT_INFO}/${userId}`, formData);
};