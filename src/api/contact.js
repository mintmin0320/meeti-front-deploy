import axios from 'axios';

// constants
import {
  ADD_FRIEND_REQUEST,
  REQUEST_ACCEPT,
  GET_MY_FRIEND,
  ON_FAVORITE,
  DELETE_FRIEND,
  GET_ALL_USER,
  GET_FAVORITE_FRIEND,
  GET_WAIT_REQUEST,
  GET_SEARCH_USERNAME
} from '../constants/urls/contactUrls';

// 친구 추가
export const fetchAddFriend = (userId, friendId) => {
  try {
    return axios.post(`${ADD_FRIEND_REQUEST}/${userId}/${friendId}`);
  } catch (error) {
    throw error;
  }
};

// 친구 수락
export const fetchRequestAccept = (userId, friendId) => {
  try {
    return axios.post(`${REQUEST_ACCEPT}/${userId}/${friendId}`,);
  } catch (error) {
    throw error;
  }
};

// 내 친구 리스트
export const fetchMyFriend = (userId) => {
  try {
    return axios.get(`${GET_MY_FRIEND}/${userId}`);
  } catch (error) {
    throw error;
  }
};

// 연락처 - 즐겨찾기된 친구 리스트
export const fetchFavoriteList = (userId) => {
  try {
    return axios.get(`${GET_FAVORITE_FRIEND}/${userId}`);
  } catch (error) {
    throw error;
  }
};

// 연락처 - 즐겨찾기 (On/Off)
export const fetchOnFavorite = (userId, friendId) => {
  try {
    return axios.post(`${ON_FAVORITE}/${userId}/${friendId}`);
  } catch (error) {
    throw error;
  }
};

// 연락처 - 친구 삭제
export const fetchDeleteFriend = (userId, friendId) => {
  try {
    return axios.delete(`${DELETE_FRIEND}/${userId}/${friendId}`);
  } catch (error) {
    throw error;
  }
};

// 연락처 - 요청 대기 리스트
export const fetchRequestUserList = (userId) => {
  try {
    return axios.get(`${GET_WAIT_REQUEST}/${userId}`);
  } catch (error) {
    throw error;
  }
};

// 연락처 - 모든 유저 조회
export const fetchAllUser = () => {
  try {
    return axios.get(GET_ALL_USER);
  } catch (error) {
    throw error;
  }
};

// 연락처 - 유저 검색
export const fetchSearchList = (username) => {
  try {
    return axios.get(`${GET_SEARCH_USERNAME}?username=${username}`);
  } catch (error) {
    throw error;
  }
};
