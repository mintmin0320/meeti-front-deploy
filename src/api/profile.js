import axios from 'axios';

// constants
import {
  USER_INFO,
  EDIT_INFO
} from '../constants/urls/profileUrls';

// 유저 정보 조회
export const fetchGetUserInfo = () => {
  try {
    const res = axios.get(USER_INFO);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchEditInfo = (userId, formData) => {
  try {
    const res = axios.post(`${EDIT_INFO}/${userId}`, formData);

    return res;
  } catch (error) {
    throw error;
  }
};