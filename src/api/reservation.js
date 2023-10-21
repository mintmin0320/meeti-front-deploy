import axios from 'axios';

// constants
import {
  OFFICE_LIST,
  RESERVATION_LIST,
  ADD_OFFICE_LIST,
  CLASSIFICATION_AREA,
  DETAIL_OFFICE_INFO,
  RESERVATION_OFFICE,
  SEARCH_OFFICE,
  RESERVATION_PAYMENT
} from '../constants/urls';

// 공유 가능한 오피스 조회
export const fetchOfficeList = () => {
  return axios.get(OFFICE_LIST);
};

// 예약한 공유 오피스 조회
export const fetchReservationList = (userId) => {
  return axios.get(`${RESERVATION_LIST}/${userId}`);
};

// 공유 오피스 등록
export const fetchAddOffice = (userId, formData) => {
  return axios.post(`${ADD_OFFICE_LIST}/${userId}`, formData);
};

// 오피스 검색
export const fetchSearchOffice = (placeName) => {
  return axios.get(`${SEARCH_OFFICE}/${placeName.search}`);
};

// 오피스 지역별 분류
export const fetchClassificationArea = (address) => {
  return axios.get(`${CLASSIFICATION_AREA}/${address}`);
};

// 공유 오피스 상세페이지
export const fetchDetailOfficeData = (officeId) => {
  return axios.get(`${DETAIL_OFFICE_INFO}/${officeId}`);
};

// 오피스 예약
export const fetchReservationOffice = (userId, data) => {
  return axios.post(`${RESERVATION_OFFICE}/${userId}`, data);
};

// 예약 결제 (카카오페이)
export const fetchReservationPayment = (data) => {
  return axios.post(RESERVATION_PAYMENT, data);
};
