import { useMutation } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";

import Toast from '../../common/Toast';

import { deleteAccountDeletion, postSignOut } from './api';

const toast = Toast();

// 로그아웃
const useSignOut = () => {
  const navigate = useNavigate();
  const signOutMutation = useMutation({
    mutationFn: postSignOut,
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userId");

      navigate("/auth/sign-in");
    },
    onError: () => {
      toast.error('로그아웃 중 오류가 발생했습니다.');
    }
  });

  const handleSignOut = async () => {
    await signOutMutation.mutateAsync();
  };

  return { ...signOutMutation, handleSignOut };
};

// 회원탈퇴
const useAccountDeletion = () => {
  const navigate = useNavigate();
  const accountDeletionMutation = useMutation({
    mutationFn: (userId) =>
      deleteAccountDeletion(userId),
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userId");

      navigate("/auth/sign-in");
    },
    onError: () => {
      toast.error('회원탈퇴 중 오류가 발생했습니다.');
    }
  });

  const handleAccountDeletion = async (userId) => {
    await accountDeletionMutation.mutateAsync(userId);
  };

  return { ...accountDeletionMutation, handleAccountDeletion };
};

export {
  useSignOut,
  useAccountDeletion
}