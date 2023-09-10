import axios from 'axios';

const BASE_URL = `http://${process.env.REACT_APP_SERVER_URI}`;
const userId = localStorage.getItem('userId');

export const fetchGetOfficeData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/meeti/office/search`);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchGetMyOfficeData = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/meeti/reservation/search/user/${userId}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAddOffice = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/meeti/reg/office/${userId}`, formData);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSearchOfficeData = async (keyword) => {
  try {
    const res = await axios.get(`${BASE_URL}/meeti/office/search/place/${keyword}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchClassificationOfficeData = async (address) => {
  try {
    const res = await axios.get(`${BASE_URL}/meeti/office/search/address/${address}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDetailOfficeData = async (officeId) => {
  try {
    const res = await axios.get(`${BASE_URL}/meeti/office/search/${officeId}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchReservationOffice = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/meeti/reg/reservation/${userId}`, data);

    return res.data;
  } catch (error) {
    throw error;
  }
};