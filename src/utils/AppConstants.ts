const AppConstants = Object.freeze({
  STORAGE_KEYS: {
    TOKEN: 'token',
    FCM_TOKEN: 'fcm-token',
    RECENT_SEARCH: 'recent-search',
  },
  LOGIN_TYPES: {
    EMAIL: 'email',
    NAVER: 'naver',
  },
  URL: {
    PRIVACY_POLICY: '',
    TERMS_OF_USE: '',
    DB_REQUEST: '',
    CS_CENTER: '',
    NOTICE: '',
    FAQ: '',
  },
  NUMBERS: {
    RECENT_SEARCH_LENGTH: 8,
  },
  BOTTOM_TAB_LABEL: {
    HOME: '홈',
    SEARCH: '검색',
    CALENDAR: '캘린더',
    MYPAGE: '나의 OO',
  },
  HEADER_TITLE: {
    FOLLOW: '팔로워/팔로잉',
    ARCHIVE: '보관함',
    STATISTICS: '관람 분석',
    SETTING: '설정',
    CHANGE_PROFILE: '프로필 수정',
    CHANGE_PASSWORD: '비밀번호 변경',
    CREATORS: '제작/캐스팅',
    ACTOR_PROFILE: '프로필',
  },
});

export default AppConstants;
