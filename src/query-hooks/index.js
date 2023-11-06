import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getUserData,
  getContactsData,
  getFavoriteData,
  getRequestUserData,
  postAddContacts,
  postOnFavorite,
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
  queryKey: ["requestUser", userId],
  queryFn: () => getRequestUserData(userId),
  suspense: true,
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
  useAddContacts,
  useOnFavorites,
};