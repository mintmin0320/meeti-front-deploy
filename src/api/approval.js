import axios from 'axios';

// constants
import {
  APPROVAL_LIST,
  DECISION_APPROVAL,
  ADD_APPROVAL_REQUEST,
  ADMIN_LIST
} from '../constants/urls/approval';

// 결재 대기 리스트
export const fetchApprovalList = (userId) => {
  try {
    return axios.get(`${APPROVAL_LIST}/${userId}`);
  } catch (error) {
    throw error;
  }
};

// 결재 담당자 리스트
export const fetchAdminList = (userId) => {
  try {
    return axios.get(`${ADMIN_LIST}/${userId}`);
  } catch (error) {
    throw error;
  }
};

// 결재 요청 등록
export const fetchAddApproval = (userId, formData) => {
  try {
    return axios.post(`${ADD_APPROVAL_REQUEST}/${userId}`, formData);
  } catch (error) {
    throw error;
  }
};

// 결재 결정
export const fetchDecisionApproval = (approvalId, data) => {
  try {
    return axios.post(`${DECISION_APPROVAL}/${approvalId}`, data);
  } catch (error) {
    throw error;
  }
};
