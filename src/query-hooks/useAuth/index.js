import { useMutation } from '@tanstack/react-query';
import { useNavigate } from "react-router-dom";

import Toast from '../../common/Toast';

import {
  deleteAccountDeletion,
  signIn,
  personalSignUp,
  officeSignUp,
  postSignOut,
  authCodeRequest,
  checkVerificationCode
} from './api';

const toast = Toast();

// 인증 코드 요청
const useAuthCodeRequest = () => {
  const postMutation = useMutation({
    mutationFn: (email) => authCodeRequest(email),
    onSuccess: () => {
      toast.success('인증 코드 요청 성공!');
    },
    onError: () => {
      toast.error('인증 코드 요청 중 오류가 발생했습니다.');
    }
  });

  const requestAuthCode = async (email) => {
    await postMutation.mutateAsync(email);
  };

  return { ...postMutation, requestAuthCode };
};

// 인증 코드 확인
const useCheckVerificationCode = () => {
  const postMutation = useMutation({
    mutationFn: (code) => checkVerificationCode(code),
    onSuccess: () => {
      toast.success('인증 완료되었습니다.');
    },
    onError: () => {
      toast.error('인증 과정에서 오류가 발생했습니다.');
    }
  });

  const checkVerification = async (code) => {
    await postMutation.mutateAsync(code);
  };

  return { ...postMutation, checkVerification };
};

// 개인 회원가입
const usePersonalSignUp = () => {
  const navigate = useNavigate();
  const singUpMutation = useMutation({
    mutationFn: (params) => personalSignUp(params),
    onSuccess: () => {
      navigate("/auth/sign-in");

      toast.success('회원가입 성공! 🎉');
    },
    onError: () => {
      toast.error('회원가입 중 오류가 발생했습니다.');
    }
  });

  const submit = async (params) => {
    await singUpMutation.mutateAsync(params);
  };

  return { ...singUpMutation, submit };
};

// 기업 회원가입
const useOfficeSignUpSignUp = () => {
  const navigate = useNavigate();
  const singUpMutation = useMutation({
    mutationFn: (params) => officeSignUp(params),
    onSuccess: () => {
      navigate("/auth/sign-in");

      toast.success('회원가입 성공! 🎉');
    },
    onError: () => {
      toast.error('회원가입 중 오류가 발생했습니다.');
    }
  });

  const submit = async (params) => {
    await singUpMutation.mutateAsync(params);
  };

  return { ...singUpMutation, submit };
};

// 로그인
const useSignIn = () => {
  const navigate = useNavigate();
  const signInMutation = useMutation({
    mutationFn: (params) => signIn(params),
    onSuccess: (data) => {
      const { accessToken, refreshToken, id } = data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('userId', id);

      navigate("/");

      toast.success('미티에 오신 것을 환영합니다! 🎉');
    },
    onError: () => {
      toast.error('로그인 중 오류가 발생했습니다.');
    }
  });

  const submit = async (params) => {
    await signInMutation.mutateAsync(params);
  };

  return { ...signInMutation, submit };
};

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
  useAuthCodeRequest,
  useCheckVerificationCode,
  useSignIn,
  usePersonalSignUp,
  useOfficeSignUpSignUp,
  useSignOut,
  useAccountDeletion
}