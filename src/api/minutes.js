import axios from 'axios';

// constants
import {
  ADD_MINUTES,
  DELETE_MINUTES,
  EDIT_MINUTES,
  READ_MINUTES
} from '../constants/urls/minutesUrls';

export const fetchGetMinutes = (userId) => {
  try {
    const res = axios.get(`${READ_MINUTES}/${userId}`);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchAddMinutes = (data, userId) => {
  try {
    const res = axios.post(`${ADD_MINUTES}/${userId}`, data);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchDeleteMinutes = (meetingId) => {
  try {
    const res = axios.delete(`${DELETE_MINUTES}/${meetingId}`);

    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchEditMinutes = (data, meetingId, userId) => {
  try {
    const res = axios.post(`${EDIT_MINUTES}/${meetingId}/${userId}`, data);

    return res;
  } catch (error) {
    throw error;
  }
};