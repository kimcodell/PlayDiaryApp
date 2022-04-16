type RootStackParamList = {
  '/': undefined;
  'root/play-detail': undefined;
  'root/other-user-profile/main': undefined;
  'root/other-user-profile/follows': { startIndex: number; userId?: number };
  'root/other-user-profile/archive': undefined;
  'tab/other-user-profile/statistics': undefined;
  'root/mypage/change-profile': {
    nickname: string;
    introduction?: string;
    profileImgUrl?: string;
  };
  'root/mypage/change-password': undefined;
};

export default RootStackParamList;
