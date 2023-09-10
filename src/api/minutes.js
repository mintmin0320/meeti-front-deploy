import axios from 'axios';

const BASE_URL = `http://${process.env.REACT_APP_SERVER_URI}`;

export const fetchGetMinutes = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE2OTQzNDUyNzEsImV4cCI6MTY5NDM1NDI3MSwiaWQiOjEsInJvbGUiOiJDT01NT04ifQ.m9kpfpnAera8uDpJMf76pPyHARG-mYgcfuPML3gejM6vBpH37vfJs1kC99j70gF6mNhOr8ZFPZasUyD8bfQblg',
    }
    const res = await axios.get(`${BASE_URL}/meeti/meeting/search/${1}`, { headers });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAddMinutes = async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE2OTQzNDUyNzEsImV4cCI6MTY5NDM1NDI3MSwiaWQiOjEsInJvbGUiOiJDT01NT04ifQ.m9kpfpnAera8uDpJMf76pPyHARG-mYgcfuPML3gejM6vBpH37vfJs1kC99j70gF6mNhOr8ZFPZasUyD8bfQblg',
    }
    const res = await axios.post(`${BASE_URL}/meeti/meeting/reg/${1}`, data, { headers });

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDeleteMinutes = async (minutesId) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJzdWIiOiJBQ0NFU1MiLCJpYXQiOjE2OTQzNDUyNzEsImV4cCI6MTY5NDM1NDI3MSwiaWQiOjEsInJvbGUiOiJDT01NT04ifQ.m9kpfpnAera8uDpJMf76pPyHARG-mYgcfuPML3gejM6vBpH37vfJs1kC99j70gF6mNhOr8ZFPZasUyD8bfQblg',
    }
    const res = await axios.delete(`${BASE_URL}/meeti/meeting/delete/${minutesId}`, { headers });

    return res.data;
  } catch (error) {
    throw error;
  }
};