import axios from 'axios';

// constants
import {
  APPROVAL_LIST,
  APPROVAL_REQUEST,
  APPROVAL_REJECT,
  ADD_APPROVAL_REQUEST
} from '../constants/urls/approval';

// 결재 등록
export const fetchAddRequest = (userId, data) => {
  try {
    return axios.post(`${ADD_APPROVAL_REQUEST}/${userId}`, data);
  } catch (error) {
    throw error;
  }
};

// 결재 - 결재 요청 목록
export const fetchGetApprovalList = (userId) => {
  try {
    return axios.get(`${APPROVAL_LIST}/${userId}`);
  } catch (error) {
    throw error;
  }
};

// 결재 - 결재 승인
export const fetchApprovalRequest = (userId) => {
  try {
    return axios.get(`${APPROVAL_REQUEST}/${userId}`);
  } catch (error) {
    throw error;
  }
};

// 결재 - 결재 거절
export const fetchRejectRequest = (userId) => {
  try {
    return axios.get(`${APPROVAL_REJECT}/${userId}`);
  } catch (error) {
    throw error;
  }
};

