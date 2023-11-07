import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  getUserData,
  getContactsData,
  getFavoriteData,
  getRequestUserData,
  postAddContacts,
  postOnFavorite,
  postRequestAccept,
  deleteContacts,
  getSearchContacts,
} from './api';

// 전체 유저 목록
const fetchAllUser = (userId) => ({
  queryKey: ["users", userId],
  queryFn: () => getUserData(userId),
  suspense: true,
  staleTime: 50000,
});

// 내 친구 목록
const fetchContacts = (userId) => ({
  queryKey: ["contacts", userId],
  queryFn: () => getContactsData(userId),
  suspense: true,
  staleTime: 50000,
});

// 즐겨찾기 목록
const fetchFavorite = (userId) => ({
  queryKey: ["favorite", userId],
  queryFn: () => getFavoriteData(userId),
  // suspense: true,
  staleTime: 50000,
});

// 요청 대기자 목록
const fetchRequestUser = (userId) => ({
  queryKey: ["request", userId],
  queryFn: () => getRequestUserData(userId),
  suspense: true,
  staleTime: 50000,
});

// 연락처 검색
const fetchSearchContacts = (username) => ({
  queryKey: ["search", username],
  queryFn: () => getSearchContacts(username),
  suspense: true,
  enabled: false,
  staleTime: 50000,
});

// 연락처 추가
const useAddContacts = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params) => postAddContacts(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    }
  })
};

// 요청 수락
const useRequestAccept = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params) => postRequestAccept(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["requestUser"] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    }
  })
};

// 연락처 삭제
const useDeleteContacts = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params) => deleteContacts(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
    }
  })
};

// 즐겨찾기 ON/OFF
const useOnFavorites = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params) => postOnFavorite(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      queryClient.invalidateQueries({ queryKey: ["favorite"] });
    }
  })
};

export {
  fetchAllUser,
  fetchContacts,
  fetchFavorite,
  fetchRequestUser,
  fetchSearchContacts,
  useAddContacts,
  useOnFavorites,
  useRequestAccept,
  useDeleteContacts,
};