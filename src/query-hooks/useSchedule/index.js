import { useMutation, useQueryClient } from '@tanstack/react-query';

import Toast from '../../common/Toast';

import {
  getScheduleData,
  postAddSchedule,
  deleteSchedule
} from './api';

import { scheduleKey } from './key';

const toast = Toast();

// 일정 조회
const fetchSchedule = (userId) => ({
  queryKey: [scheduleKey.schedule, userId],
  queryFn: () => getScheduleData(userId),
  staleTime: 50000,
});

// 일정 등록
const useAddSchedule = () => {
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: ({ userId, params }) =>
      postAddSchedule({ userId, params }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [scheduleKey.schedule] });

      toast.success('일정 등록 성공!');
    },
    onError: () => {
      toast.error('일정 등록 중 에러가 발생했습니다.');
    }
  });

  const handleSubmit = async (userId, data) => {
    await addMutation.mutateAsync({ userId, params: data });
  };

  return { ...addMutation, handleSubmit };
};

// 일정 삭제
const useDeleteSchedule = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (scheduleId) => deleteSchedule(scheduleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [scheduleKey.schedule] });

      toast.success('일정 삭제 성공!');
    },
    onError: () => {
      toast.error('일정 삭제 중 오류가 발생했습니다.');
    }
  });

  const handleDeleteSchedule = async (scheduleId) => {
    await deleteMutation.mutateAsync(scheduleId);
  };

  return { ...deleteMutation, handleDeleteSchedule };
};

export {
  fetchSchedule,
  useAddSchedule,
  useDeleteSchedule,
};
