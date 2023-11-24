import axios from 'axios';

import {
  APPROVAL_LIST,
  DECISION_APPROVAL,
  ADD_APPROVAL_REQUEST,
  ADMIN_LIST,
  WAIT_RESERVATION
} from '../../constants/urls/approval';

// 결재 대기 리스트
export const getApprovalData = async (userId) => {
  const { data } = await axios.get(`${APPROVAL_LIST}/${userId}`);

  return data;
};

// 결재 담당자 리스트
export const getAdminData = async (userId) => {
  const { data } = await axios.get(`${ADMIN_LIST}/${userId}`);

  return data;
};

// 예약 대기 리스트
export const getWaitReservationData = async (userId) => {
  const { data } = await axios.get(`${WAIT_RESERVATION}/${userId}`);

  return data;
};

// 결재 요청 등록
export const postAddApproval = async (userId, formData) => {
  console.log(userId, formData)
  return await axios.post(`${ADD_APPROVAL_REQUEST}/${userId}`, formData);
};

// 결재 결정
export const postDecisionApproval = async (approvalId, params) => {
  return await axios.post(`${DECISION_APPROVAL}/${approvalId}`, params);
};