import { useMutation, useQueryClient } from '@tanstack/react-query';

import Toast from '../../common/Toast';
import {
  getAdminData,
  getApprovalData,
  getWaitReservationData,
  postAddApproval,
  postDecisionApproval
} from './api';

const toast = Toast();

// 결재 대기 리스트
const fetchApprovalData = (userId) => ({
  queryKey: ["approval", userId],
  queryFn: () => getApprovalData(userId),
  staleTime: 50000,
});

// 결재 담당자 리스트
const fetchAdminData = (userId) => ({
  queryKey: ["admin", userId],
  queryFn: () => getAdminData(userId),
  suspense: true,
  staleTime: 50000,
});

// 예약 대기 리스트
const fetchWaitReservation = (userId) => ({
  queryKey: ["wait-reservation", userId],
  queryFn: () => getWaitReservationData(userId),
  suspense: true,
  staleTime: 50000,
});

// 결재 요청
const useAddApproval = () => {
  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: ({ userId, formData }) => postAddApproval(userId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["approval"] });

      toast.success('결재 요청을 등록했습니다.');
    },
    onError: () => {
      toast.error('결재 요청 중 오류가 발생했습니다.');
    }
  });

  const submit = async ({ userId, formData }) => {
    await addMutation.mutateAsync({ userId, formData });
  };

  return { ...addMutation, submit };
};

// 결재 판단
const useDecisionApproval = () => {
  const queryClient = useQueryClient();
  const postMutation = useMutation({
    mutationFn: ({ approvalId, params }) =>
      postDecisionApproval(approvalId, params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["approval"] });
      queryClient.invalidateQueries({ queryKey: ["reservation"] });

      toast.success('결재 처리 완료했습니다.');
    },
    onError: () => {
      toast.error('결재 처리 중 오류가 발생했습니다.');
    }
  });

  const decisionApproval = async ({ approvalId, params }) => {
    await postMutation.mutateAsync({ approvalId, params });
  };

  return { ...postMutation, decisionApproval };
};

export {
  fetchApprovalData,
  fetchAdminData,
  fetchWaitReservation,
  useAddApproval,
  useDecisionApproval
}