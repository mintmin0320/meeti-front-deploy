import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  getMinutesData,
  deleteMinutes,
  postAddMinutes,
  postEditMinutes
} from './api';

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
    }
  })
};

export {
  fetchMinutes,
  useDeleteMinutes,
  useSaveMinutes,
  useEditMinutes,
};
