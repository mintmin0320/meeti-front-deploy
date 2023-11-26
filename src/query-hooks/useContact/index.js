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

import { contactsKey } from './key';

const toast = Toast();

// 전체 유저 목록
const fetchAllUser = (userId) => ({
  queryKey: [contactsKey.users, userId],
  queryFn: () => getUserData(userId),
  suspense: true,
  staleTime: 50000,
});

// 내 친구 목록
const fetchContacts = (userId) => ({
  queryKey: [contactsKey.contacts, userId],
  queryFn: () => getContactsData(userId),
  suspense: true,
  staleTime: 50000,
});

// 즐겨찾기 목록
const fetchFavorite = (userId) => ({
  queryKey: [contactsKey.favorites, userId],
  queryFn: () => getFavoriteData(userId),
  staleTime: 50000,
});

// 요청 대기자 목록
const fetchRequestUser = (userId) => ({
  queryKey: [contactsKey.request, userId],
  queryFn: () => getRequestUserData(userId),
  suspense: true,
  staleTime: 50000,
});

// 연락처 검색
const fetchSearchContacts = (username) => ({
  queryKey: [contactsKey.search, username],
  queryFn: () => getSearchContacts(username),
  suspense: true,
  enabled: false,
  staleTime: 50000,
});

// 친구 일정 조회
const fetchContactsSchedule = (userId, friendId) => ({
  queryKey: [contactsKey.friends, userId],
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
      queryClient.invalidateQueries({ queryKey: [contactsKey.users] });

      toast.success('신청을 전송했습니다.');
    },
    onError: () => {
      toast.error('연락처 추가 중 오류가 발생했습니다.');
    }
  });

  const handleAddContacts = async (userId, friendId) => {
    await addMutation.mutateAsync({ userId, friendId });
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
      queryClient.invalidateQueries({ queryKey: [contactsKey.request] });
      queryClient.invalidateQueries({ queryKey: [contactsKey.users] });
      queryClient.invalidateQueries({ queryKey: [contactsKey.contacts] });

      toast.success('요청이 수락되었습니다!');
    },
    onError: () => {
      toast.error('요청 수락 중 오류가 발생했습니다.');
    }
  });

  const handleOnAccept = async (userId, friendId) => {
    await requestAcceptMutation.mutateAsync({ userId, friendId });
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
      queryClient.invalidateQueries({ queryKey: [contactsKey.contacts] });
      queryClient.invalidateQueries({ queryKey: [contactsKey.users] });

      toast.success('연락처가 삭제되었습니다!');
    },
    onError: () => {
      toast.error('연락처가 삭제 중 오류가 발생했습니다.');
    }
  });

  const handleDeleteContacts = async (userId, friendId) => {
    await deleteContactsMutation.mutateAsync({ userId, friendId });
  };

  return { ...deleteContactsMutation, handleDeleteContacts };
};

// 즐겨찾기 ON/OFF
const useOnFavorites = () => {
  const queryClient = useQueryClient();
  const onFavoritesMutation = useMutation({
    mutationFn: ({ userId, friendId }) => postOnFavorite({ userId, friendId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [contactsKey.contacts] });
      queryClient.invalidateQueries({ queryKey: [contactsKey.favorites] });
    },
    onError: () => {
      toast.error('즐겨찾기 변경 중 오류가 발생했습니다.');
    }
  });

  const handleOnFavorite = async (userId, friendId) => {
    await onFavoritesMutation.mutateAsync({ userId, friendId });
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
}
