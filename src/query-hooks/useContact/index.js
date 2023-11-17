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
  const addMutation = useMutation({
    mutationFn: (params) => postAddContacts(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      alert('친구 신청 완료!');
    }
  });

  const handleAddContacts = async (params) => {
    try {
      await addMutation.mutateAsync(params);
    } catch (error) {
      console.error('실패했습니다!', error);
    }
  };

  return { ...addMutation, handleAddContacts };
};

// 요청 수락
const useRequestAccept = () => {
  const queryClient = useQueryClient();
  const requestAcceptMutation = useMutation({
    mutationFn: (params) => postRequestAccept(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["request"] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["contacts"] });

      alert('요청이 수락되었습니다!');
    }
  });

  const handleOnAccept = async (params) => {
    try {
      await requestAcceptMutation.mutateAsync(params);
    } catch (error) {
      console.error('실패했습니다!', error);
    }
  };

  return { ...requestAcceptMutation, handleOnAccept };
};

// 연락처 삭제
const useDeleteContacts = () => {
  const queryClient = useQueryClient();
  const deleteContactsMutation = useMutation({
    mutationFn: (params) => deleteContacts(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      queryClient.invalidateQueries({ queryKey: ["users"] });

      alert('연락처가 삭제되었습니다!');
    }
  });

  const handleDeleteContacts = async (params) => {
    try {
      await deleteContactsMutation.mutateAsync(params);
    } catch (error) {
      console.error('실패했습니다!', error);
    }
  };

  return { ...deleteContactsMutation, handleDeleteContacts };
};

// 즐겨찾기 ON/OFF
const useOnFavorites = () => {
  const queryClient = useQueryClient();
  const onFavoritesMutation = useMutation({
    mutationFn: (params) => postOnFavorite(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      queryClient.invalidateQueries({ queryKey: ["favorite"] });

      alert('즐겨찾기 상태가 변경되었습니다!');
    }
  });

  const handleOnFavorite = async (params) => {
    try {
      await onFavoritesMutation.mutateAsync(params);
    } catch (error) {
      console.error('실패했습니다!', error);
    }
  };

  return { ...onFavoritesMutation, handleOnFavorite };
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
