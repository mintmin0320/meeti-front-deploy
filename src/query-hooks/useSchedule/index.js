import { useMutation, useQueryClient } from '@tanstack/react-query';

import Toast from '../../common/Toast';

import {
  getScheduleData,
  postAddSchedule,
  deleteSchedule
} from './api';

const toast = Toast();

// 일정 조회
const fetchSchedule = (userId) => ({
  queryKey: ["schedule", userId],
  queryFn: () => getScheduleData(userId),
  staleTime: 50000,
});

// 일정 등록
const useAddSchedule = () => {
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: ({ userId, params }) => postAddSchedule({ userId, params }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedule"] });

      toast.success('일정 등록 성공!');
    }
  });

  const handleSubmit = async (userId, data) => {
    try {
      await addMutation.mutateAsync({ userId, params: data });
    } catch (error) {
      toast.error(`일정 추가 중 오류 발생: ${error}`);
    }
  };

  return { ...addMutation, handleSubmit };
};

// 일정 삭제
const useDeleteSchedule = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (scheduleId) => deleteSchedule(scheduleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["schedule"] });

      toast.success('일정 삭제 성공!');
    }
  });

  const handleDeleteSchedule = async (scheduleId) => {
    try {
      await deleteMutation.mutateAsync(scheduleId);
    } catch (error) {
      toast.error(`일정 삭제 중 오류 발생: ${error}`);
    }
  };

  return { ...deleteMutation, handleDeleteSchedule };
};

export {
  fetchSchedule,
  useAddSchedule,
  useDeleteSchedule,
};
