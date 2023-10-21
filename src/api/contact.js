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
  return axios.post(`${ADD_FRIEND_REQUEST}/${userId}/${friendId}`);
};

// 친구 수락
export const fetchRequestAccept = (userId, friendId) => {
  return axios.post(`${REQUEST_ACCEPT}/${userId}/${friendId}`,);
};

// 내 친구 리스트
export const fetchContactsList = (userId) => {
  return axios.get(`${GET_MY_FRIEND}/${userId}`);
};

// 즐겨찾기된 친구 리스트
export const fetchFavoriteList = (userId) => {
  return axios.get(`${GET_FAVORITE_FRIEND}/${userId}`);
};

// 즐겨찾기 (On/Off)
export const fetchOnFavorite = (userId, friendId) => {
  return axios.post(`${ON_FAVORITE}/${userId}/${friendId}`);
};

// 친구 삭제
export const fetchDeleteContacts = (userId, friendId) => {
  return axios.delete(`${DELETE_FRIEND}/${userId}/${friendId}`);
};

// 요청 대기 리스트
export const fetchRequestUserList = (userId) => {
  return axios.get(`${GET_WAIT_REQUEST}/${userId}`);
};

// 모든 유저 조회
export const fetchAllUser = () => {
  return axios.get(GET_ALL_USER);
};

// 유저 검색
export const fetchSearchList = (username) => {
  return axios.get(`${GET_SEARCH_USERNAME}?username=${username}`);
};
