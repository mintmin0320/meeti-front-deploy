import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import Toast from '../../common/Toast';

import {
  getClassificationAreaData,
  getDetailOfficeData,
  getOfficeData,
  getReservationData,
  getSearchOfficeData,
  postAddOffice,
  postReservationOffice,
  postReservationPayment
} from './api';

import { reservationKey } from './key';

const toast = Toast();

// 오피스 리스트
const fetchOffice = () => ({
  queryKey: [reservationKey.office],
  queryFn: () => getOfficeData(),
  staleTime: 50000,
});

// 예약 리스트
const fetchReservation = (userId) => ({
  queryKey: [reservationKey.reservation, userId],
  queryFn: () => getReservationData(userId),
  staleTime: 50000,
});

// 오피스 이름 검색
const fetchSearchOffice = (placeName) => ({
  queryKey: [reservationKey.officeSearch, placeName],
  queryFn: () => getSearchOfficeData(placeName),
  enabled: false,
  staleTime: 50000,
});

// 오피스 지역 분류
const fetchClassificationArea = (address) => ({
  queryKey: [reservationKey.officeArea, address],
  queryFn: () => getClassificationAreaData(address),
  enabled: !!address && address !== '',
  staleTime: 50000,
});

// 오피스 상세 정보
const fetchOfficeDetail = (officeId) => ({
  queryKey: [reservationKey.officeDetail, officeId],
  queryFn: () => getDetailOfficeData(officeId),
  staleTime: 50000,
});

// 공유 오피스 등록
const useAddOffice = () => {
  const queryClient = useQueryClient();
  const navigator = useNavigate();
  const postMutation = useMutation({
    mutationFn: ({ userId, formData }) =>
      postAddOffice(userId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [reservationKey.office] });

      toast.success('공유 오피스를 등록했습니다.');

      navigator('/reservation');
    },
    onError: () => {
      toast.error('공유 오피스 등록 중 오류가 발생했습니다.');
    }
  });

  const submit = async ({ userId, formData }) => {
    await postMutation.mutateAsync({ userId, formData });
  };

  return { ...postMutation, submit };
};

// 오피스 예약
const useReservation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const postMutation = useMutation({
    mutationFn: ({ userId, params }) =>
      postReservationOffice(userId, params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [reservationKey.office] });
      queryClient.invalidateQueries({ queryKey: [reservationKey.reservation] });
      queryClient.invalidateQueries({ queryKey: [reservationKey.officeDetail] });

      toast.success('예약 완료되었습니다.');

      navigate("/reservation");
    },
    onError: () => {
      toast.error('예약 중 오류가 발생했습니다.');
    }
  });

  const reservation = async ({ userId, params }) => {
    await postMutation.mutateAsync({ userId, params });
  };

  return { ...postMutation, reservation };
};

// 카카오페이 결제
const usePayment = () => {
  const postMutation = useMutation({
    mutationFn: (params) =>
      postReservationPayment(params),
    onSuccess: (data) => {
      window.open(data.next_redirect_pc_url, '_blank');

      toast.success('결제가 완료되었습니다.');
    },
    onError: () => {
      toast.error('카카오페이 결제 중 오류가 발생했습니다.');
    }
  });

  const payment = async (params) => {
    await postMutation.mutateAsync(params);
  };

  return { ...postMutation, payment };
};

export {
  fetchOffice,
  fetchReservation,
  fetchSearchOffice,
  fetchClassificationArea,
  fetchOfficeDetail,
  useAddOffice,
  useReservation,
  usePayment
}