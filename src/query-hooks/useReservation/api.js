import axios from 'axios';

import {
  OFFICE_LIST,
  RESERVATION_LIST,
  ADD_OFFICE_LIST,
  CLASSIFICATION_AREA,
  DETAIL_OFFICE_INFO,
  RESERVATION_OFFICE,
  SEARCH_OFFICE,
  RESERVATION_PAYMENT
} from '../../constants/urls';

// 공유 가능한 오피스 조회
export const getOfficeData = async () => {
  const { data } = await axios.get(OFFICE_LIST);

  return data;
};

// 예약한 공유 오피스 조회
export const getReservationData = async (userId) => {
  const { data } = await axios.get(`${RESERVATION_LIST}/${userId}`);

  return data;
};

// 오피스 검색
export const getSearchOfficeData = async (placeName) => {
  const { data } = await axios.get(`${SEARCH_OFFICE}/${encodeURIComponent(placeName)}`);

  return data;
};

// 오피스 지역별 분류
export const getClassificationAreaData = async (address) => {
  const { data } = await axios.get(`${CLASSIFICATION_AREA}/${address}`);

  return data;
};

// 공유 오피스 상세페이지
export const getDetailOfficeData = async (officeId) => {
  const { data } = await axios.get(`${DETAIL_OFFICE_INFO}/${officeId}`);

  return data;
};

// 공유 오피스 등록
export const postAddOffice = async (userId, formData) => {
  return await axios.post(`${ADD_OFFICE_LIST}/${userId}`, formData);
};

// 오피스 예약
export const postReservationOffice = async (userId, params) => {
  return await axios.post(`${RESERVATION_OFFICE}/${userId}`, params);
};

// 예약 결제 (카카오페이)
export const postReservationPayment = async (params) => {
  return await axios.post(RESERVATION_PAYMENT, params);
};
