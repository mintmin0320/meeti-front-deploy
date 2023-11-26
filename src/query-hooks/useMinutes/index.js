import { useMutation, useQueryClient } from '@tanstack/react-query';

import Toast from '../../common/Toast';

import {
  getMinutesData,
  deleteMinutes,
  postAddMinutes,
  postEditMinutes
} from './api';

import { minutesKey } from './key';

const toast = Toast();

// 회의록 리스트 조회
const fetchMinutes = (userId) => ({
  queryKey: [minutesKey.minutes, userId],
  queryFn: () => getMinutesData(userId),
  staleTime: 50000,
});

// 회의록 저장
const useSaveMinutes = () => {
  const queryClient = useQueryClient();
  const saveMutation = useMutation({
    mutationFn: ({ userId, params }) => postAddMinutes(userId, params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [minutesKey.minutes] });

      toast.success('회의록을 저장했습니다.');
    },
    onError: () => {
      toast.error('회의록 저장 중 오류가 발생했습니다.');
    }
  });

  const saveMinutes = async ({ userId, params }) => {
    await saveMutation.mutateAsync({ userId, params });
  };

  return { ...saveMutation, saveMinutes };
};

// 회의록 수정
const useEditMinutes = () => {
  const queryClient = useQueryClient();
  const editMutation = useMutation({
    mutationFn: ({ userId, meetingId, params }) =>
      postEditMinutes(userId, meetingId, params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [minutesKey.minutes] });

      toast.success('회의록을 수정했습니다.');
    },
    onError: () => {
      toast.error('회의록 수정 중 오류가 발생했습니다.');
    }
  });

  const postEdit = async ({ userId, meetingId, params }) => {
    await editMutation.mutateAsync({ userId, meetingId, params });
  };

  return { ...editMutation, postEdit };
};

// 회의록 삭제
const useDeleteMinutes = () => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: (meetingId) => deleteMinutes(meetingId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [minutesKey.minutes] });

      toast.success('회의록이 삭제되었습니다.');
    },
    onError: () => {
      toast.error('회의록 삭제 중 오류가 발생했습니다.');
    }
  });

  const handleDelete = async (meetingId) => {
    await deleteMutation.mutateAsync(meetingId);
  };

  return { ...deleteMutation, handleDelete };
};

export {
  fetchMinutes,
  useDeleteMinutes,
  useSaveMinutes,
  useEditMinutes,
};
