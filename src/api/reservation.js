import axios from 'axios';

// constants
import {
  READ_OFFICE_LIST,
  RESERVATION_LIST,
  ADD_OFFICE_LIST,
  CLASSIFICATION_AREA,
  DETAIL_OFFICE_INFO,
  RESERVATION_OFFICE,
  SEARCH_OFFICE
} from '../constants/urls';

// 공유 가능한 오피스 조회
export const fetchOfficeList = () => {
  return axios.get(READ_OFFICE_LIST);
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
  return axios.get(`${SEARCH_OFFICE}/${placeName}`);
};

export const fetchClassificationArea = (address) => {
  return axios.get(`${CLASSIFICATION_AREA}/${address}`);
};

// 공유 오피스 상세페이지
export const fetchDetailOfficeData = (officeId) => {
  return axios.get(`${DETAIL_OFFICE_INFO}/${officeId}`);
};

export const fetchReservationOffice = (userId, data) => {
  return axios.post(`${RESERVATION_OFFICE}/${userId}`, data);
};