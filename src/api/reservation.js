import axios from 'axios';

// constants
import {
  READ_OFFICE_LIST,
  READ_MY_OFFICE_LIST,
  ADD_OFFICE_LIST,
  CLASSIFICATION_OFFICE,
  DETAIL_OFFICE_INFO,
  RESERVATION_OFFICE,
  SEARCH_OFFICE
} from '../constants/urls';

// 공유 가능한 오피스 조회
export const fetchGetOfficeList = () => {
  try {
    return axios.get(READ_OFFICE_LIST);
  } catch (error) {
    throw error;
  }
};

// 예약한 공유 오피스 조회
export const fetchReservationList = (userId) => {
  try {
    return axios.get(`${READ_MY_OFFICE_LIST}/${userId}`);
  } catch (error) {
    throw error;
  }
};

// 공유 오피스 등록
export const fetchAddOffice = (userId, formData) => {
  try {
    return axios.post(`${ADD_OFFICE_LIST}/${userId}`, formData);
  } catch (error) {
    throw error;
  }
};

export const fetchSearchOffice = (placeName) => {
  try {
    return axios.get(`${SEARCH_OFFICE}/${placeName}`);
  } catch (error) {
    throw error;
  }
};

export const fetchClassificationOffice = (address) => {
  try {
    return axios.get(`${CLASSIFICATION_OFFICE}/${address}`);
  } catch (error) {
    throw error;
  }
};

// 공유 오피스 상세페이지
export const fetchDetailOfficeData = (officeId) => {
  try {
    return axios.get(`${DETAIL_OFFICE_INFO}/${officeId}`);
  } catch (error) {
    throw error;
  }
};

export const fetchReservationOffice = (userId, data) => {
  try {
    return axios.post(`${RESERVATION_OFFICE}/${userId}`, data);
  } catch (error) {
    throw error;
  }
};