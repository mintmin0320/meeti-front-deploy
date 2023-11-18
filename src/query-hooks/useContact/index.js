import { useMutation, useQueryClient } from '@tanstack/react-query';

import Toast from '../../common/Toast';

import {
  getUserData,
  getContactsData,
  getFavoriteData,
  getRequestUserData,
  getContactSchedule,
  getSearchContacts,
  postAddContacts,
  postOnFavorite,
  postRequestAccept,
  deleteContacts,
} from './api';

const toast = Toast();

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

// 친구 일정 조회
const fetchContactsSchedule = (userId, friendId) => ({
  queryKey: ["friend-contacts", userId],
  queryFn: () => getContactSchedule({ userId, friendId }),
  staleTime: 50000,
});

// 연락처 추가
const useAddContacts = () => {
  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: ({ userId, friendId }) =>
      postAddContacts({ userId, friendId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });

      toast.success('신청을 전송했습니다.');
    }
  });

  const handleAddContacts = async (userId, friendId) => {
    try {
      await addMutation.mutateAsync({ userId, friendId });
    } catch (error) {
      toast.error('신청을 실패했습니다!');
    }
  };

  return { ...addMutation, handleAddContacts };
};

// 요청 수락
const useRequestAccept = () => {
  const queryClient = useQueryClient();
  const requestAcceptMutation = useMutation({
    mutationFn: ({ userId, friendId }) =>
      postRequestAccept({ userId, friendId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["request"] });
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["contacts"] });

      toast.success('요청이 수락되었습니다!');
    }
  });

  const handleOnAccept = async (userId, friendId) => {
    try {
      await requestAcceptMutation.mutateAsync({ userId, friendId });
    } catch (error) {
      toast.error('요청 수락을 실패했습니다!');
    }
  };

  return { ...requestAcceptMutation, handleOnAccept };
};

// 연락처 삭제
const useDeleteContacts = () => {
  const queryClient = useQueryClient();
  const deleteContactsMutation = useMutation({
    mutationFn: ({ userId, friendId }) =>
      deleteContacts({ userId, friendId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      queryClient.invalidateQueries({ queryKey: ["users"] });

      toast.success('연락처가 삭제되었습니다!');
    }
  });

  const handleDeleteContacts = async (userId, friendId) => {
    try {
      await deleteContactsMutation.mutateAsync({ userId, friendId });
    } catch (error) {
      toast.error('연락처 삭제를 실패했습니다!');
    }
  };

  return { ...deleteContactsMutation, handleDeleteContacts };
};

// 즐겨찾기 ON/OFF
const useOnFavorites = () => {
  const queryClient = useQueryClient();
  const onFavoritesMutation = useMutation({
    mutationFn: ({ userId, friendId }) => postOnFavorite({ userId, friendId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      queryClient.invalidateQueries({ queryKey: ["favorite"] });
    }
  });

  const handleOnFavorite = async (userId, friendId) => {
    try {
      await onFavoritesMutation.mutateAsync({ userId, friendId });
    } catch (error) {
      toast.error('즐겨찾기 변경 실패했습니다!');
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
  fetchContactsSchedule,
  useAddContacts,
  useOnFavorites,
  useRequestAccept,
  useDeleteContacts,
};
