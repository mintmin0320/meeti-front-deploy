import axios from 'axios';

// constants
import {
  ACCOUNT_DELETION,
  SIGN_OUT,
  REFRESH_TOKEN,
  SINGIN,
  PERSONAL_SIGNUP,
  OFFICE_SIGNUP,
  REQUEST_EMAIL,
  VALID_CODE
} from '../../constants/urls/authUrls';

// 로그아웃
export const postSignOut = async () => {
  return await axios.post(SIGN_OUT);
};

// 회원탈퇴
export const deleteAccountDeletion = async (userId) => {
  return await axios.delete(`${ACCOUNT_DELETION}/${userId}`);
};
