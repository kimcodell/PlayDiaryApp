export const routes = {
  root: {
    INIT: '/',
    PLAY_DETAIL_SCREEN: 'root/play-detail',
    OTHER_USER_PROFILE: 'root/other-user-profile/main',
    FOLLOW_LIST_SCREEN: 'root/other-user-profile/follows',
    ARCHIVE_SCREEN: 'root/other-user-profile/archive',
    STATISTICS_SCREEN: 'tab/other-user-profile/statistics',
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
    calendar: {
      CALENDAR_STACK: 'tab/calendar',
      CALENDAR_SCREERN: 'tab/calendar/main',
    },
    mypage: {
      MYPAGE_STACK: 'tab/mypage',
      MYPAGE_SCREEN: 'tab/mypage/main',
      FOLLOW_LIST_SCREEN: 'tab/mypage/follows',
      ARCHIVE_SCREEN: 'tab/mypage/archive',
      STATISTICS_SCREEN: 'tab/mypage/statistics',
      SETTING_SCREEN: 'tab/mypage/setting',
    },
  },
  auth: {
    LOGIN_SCREEN: 'auth/login',
    SIGN_UP_SCREEN: 'auth/signup',
    FIND_PASSWORD_SCREEN: 'auth/find-password',
  },
};
