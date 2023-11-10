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
} from '../../constants/urls/contactUrls';

/* GET 메서드 */
// 모든 유저 조회
export const getUserData = async (userId) => {
  await new Promise(resolve => setTimeout(resolve, 800));
  const { data } = await axios.get(`${GET_ALL_USER}/${userId}`);

  return data;
};

// 내 친구 리스트
export const getContactsData = async (userId) => {
  const { data } = await axios.get(`${GET_MY_FRIEND}/${userId}`);

  return data;
};

// 즐겨찾기된 친구 리스트
export const getFavoriteData = async (userId) => {
  const { data } = await axios.get(`${GET_FAVORITE_FRIEND}/${userId}`);

  return data;
};

// 요청 대기 리스트
export const getRequestUserData = async (userId) => {
  const { data } = await axios.get(`${GET_WAIT_REQUEST}/${userId}`);

  return data;
};

// 유저 검색
export const getSearchContacts = async (username) => {
  const { data } = await axios.get(`${GET_SEARCH_USERNAME}?username=${encodeURIComponent(username)}`);

  return data;
};

/* POST 메서드 */
// 친구 추가
export const postAddContacts = async ({ userId, friendId }) => {
  await axios.post(`${ADD_FRIEND_REQUEST}/${userId}/${friendId}`);
};

// 친구 수락
export const postRequestAccept = async ({ userId, friendId }) => {
  await axios.post(`${REQUEST_ACCEPT}/${userId}/${friendId}`,);
};

// 즐겨찾기 (On/Off)
export const postOnFavorite = async ({ userId, friendId }) => {
  await axios.post(`${ON_FAVORITE}/${userId}/${friendId}`);
};

/* DELETE 메서드 */
// 친구 삭제
export const deleteContacts = async ({ userId, friendId }) => {
  await axios.delete(`${DELETE_FRIEND}/${userId}/${friendId}`);
};