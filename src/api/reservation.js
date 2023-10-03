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
export const fetchGetOfficeList = async () => {
  try {
    const res = await axios.get(READ_OFFICE_LIST);

    return res.data;
  } catch (error) {
    throw error;
  }
};

// 예약한 공유 오피스 조회
export const fetchGetMyOfficeList = async () => {
  try {
    const res = await axios.get(`${READ_MY_OFFICE_LIST}/${userId}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};

// 공유 오피스 등록
export const fetchAddOffice = async (formData) => {
  try {
    const res = await axios.post(`${ADD_OFFICE_LIST}/${userId}`, formData);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSearchOfficeData = async (keyword) => {
  try {
    const res = await axios.get(`${SEARCH_OFFICE}/${keyword}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchClassificationOfficeData = async (address) => {
  try {
    const res = await axios.get(`${CLASSIFICATION_OFFICE}/${address}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDetailOfficeData = async (officeId) => {
  try {
    const res = await axios.get(`${DETAIL_OFFICE_INFO}/${officeId}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchReservationOffice = async (data) => {
  try {
    const res = await axios.post(`${RESERVATION_OFFICE}/${userId}`, data);

    return res.data;
  } catch (error) {
    throw error;
  }
};