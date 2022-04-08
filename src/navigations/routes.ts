export const routes = {
  root: {
    INIT: '/',
    PLAY_DETAIL_SCREEN: 'root/play-detail',
    SETTING_SCREEN: 'root/mypage/setting',
    CHANGE_PROFILE_SCREEN: 'root/mypage/change-profile',
    CHANGE_PASSWORD_SCREEN: 'root/mypage/change-password',
  },
  tab: {
    home: {
      HOME_STACK: 'tab/home',
      HOME_SCREEN: 'tab/home/main',
    },
    search: {
      SEARCH_STACK: 'tab/search',
      SEARCH_SCREEN: 'tab/search/main',
      SEARCH_RESULT_SCREEN: 'tab/search/result',
    },
    calender: {
      CALENDER_STACK: 'tab/calender',
      CALENDER_SCREERN: 'tab/calender/main',
    },
    mypage: {
      MYPAGE_STACK: 'tab/mypage',
      MYPAGE_SCREEN: 'tab/mypage/main',
      STATISTICS_SCREEN: 'tab/mypage/statistics',
    },
  },
  auth: {
    LOGIN_SCREEN: 'auth/login',
    SIGN_UP_SCREEN: 'auth/signup',
    FIND_PASSWORD_SCREEN: 'auth/find-password',
  },
};
