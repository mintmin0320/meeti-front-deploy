import { useMutation, useQueryClient } from '@tanstack/react-query';

import Toast from '../../common/Toast';

import {
  getMinutesData,
  deleteMinutes,
  postAddMinutes,
  postEditMinutes
} from './api';

const toast = Toast();

// 회의록 리스트 조회
const fetchMinutes = (userId) => ({
  queryKey: ["minutes", userId],
  queryFn: () => getMinutesData(userId),
  staleTime: 50000,
});

// 회의록 저장
const useSaveMinutes = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params, userId) => postAddMinutes(params, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["minutes"] });

      toast.success('회의록을 저장했습니다.');
    },
    onError: () => {
      toast.error('회의록 저장 중 오류가 발생했습니다.');
    }
  });
};

// 회의록 수정
const useEditMinutes = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params, meetingId, userId) =>
      postEditMinutes(params, meetingId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["minutes"] });

      toast.success('회의록을 수정했습니다.');
    },
    onError: () => {
      toast.error('회의록 수정 중 오류가 발생했습니다.');
    }
  })
};

// 회의록 삭제
const useDeleteMinutes = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (meetingId) => deleteMinutes(meetingId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["minutes"] });

      toast.success('회의록이 삭제되었습니다.');
    },
    onError: () => {
      toast.error('회의록 삭제 중 오류가 발생했습니다.');
    }
  })
};

export {
  fetchMinutes,
  useDeleteMinutes,
  useSaveMinutes,
  useEditMinutes,
};
