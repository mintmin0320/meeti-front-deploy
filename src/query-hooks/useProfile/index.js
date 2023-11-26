import { useMutation, useQueryClient } from '@tanstack/react-query';

import Toast from '../../common/Toast';

import { getUserData, postEditData } from './api';

import { profileKey } from './key';

const toast = Toast();

// 유저 정보 조회
const fetchUserData = (userId) => ({
  queryKey: [profileKey.profile, userId],
  queryFn: () => getUserData(userId),
  staleTime: 50000,
});

// 유저 정보 수정
const useEditInfo = () => {
  const queryClient = useQueryClient();

  const editMutation = useMutation({
    mutationFn: ({ userId, formData }) =>
      postEditData(userId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [profileKey.profile] });

      toast.success('회원정보 수정 성공!');
    },
    onError: () => {
      toast.error('회원정보 수정 중 오류가 발생했습니다.');
    }
  });

  const postEdit = async ({ userId, formData }) => {
    await editMutation.mutateAsync({ userId, formData });
  };

  return { ...editMutation, postEdit };
};

export {
  fetchUserData,
  useEditInfo
}
