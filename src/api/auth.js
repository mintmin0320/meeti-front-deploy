import axios from 'axios';

import { REFRESH_TOKEN } from '../constants/urls/authUrls';

// 토큰 재요청
export const postRefreshToken = async () => {
  const { data } = await axios.post(REFRESH_TOKEN);

  return data;
};
