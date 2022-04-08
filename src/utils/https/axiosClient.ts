import axios from 'axios';
import StorageHelper from '../storageHelper';
import { AppConstants } from '../AppConstants';
// import Config from 'react-native-config';

const axiosClient = axios.create({
  // baseURL: Config.BASE_URL,
  //TODO 환경변수(env)로 변경 필요.
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async config => {
  const token = await StorageHelper.getData(AppConstants.STORAGE_KEYS.TOKEN);
  if (token) {
    // @ts-ignore
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    const {
      config,
      response: { status },
    } = error;
    // if (status === 419) {
    //   if (error.response.data.code === 'expired') {
    //     const originalRequest = config;
    //     const refreshToken = await EncryptedStorage.getItem('refreshToken');
    //     // token refresh 요청
    //     const {data} = await axios.post(
    //       `${Config.API_URL}/refreshToken`, // token refresh api
    //       {},
    //       {headers: {authorization: `Bearer ${refreshToken}`}},
    //     );
    //     // TODO 새로운 토큰 저장
    //     // dispatch(setAccessToken(data.data.accessToken));
    //     originalRequest.headers.authorization = `Bearer ${data.data.accessToken}`;
    //     // 419로 요청 실패했던 요청 새로운 토큰으로 재요청
    //     return axios(originalRequest);
    //   }
    // }

    // if (error.response.status === 401) {
    //   StorageHelper.clearStorage();
    //   store.dispatch(setAuthInfo(null));
    // }
    // if (error.response && error.response.data) {
    //   throw error.response.data;
    // }
    return Promise.reject(error);
  },
);

export default axiosClient;
