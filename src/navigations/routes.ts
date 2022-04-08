export const routes = {
	root: {
		SETTING_SCREEN: 'mypage/setting',
		CHANGE_PROFILE_SCREEN: 'mypage/change-profile',
		CHANGE_PASSWORD_SCREEN: 'mypage/change-password',
	},
	tab: {
		home: {
			HOME_SCREEN: 'tab/home',
		},
		search: {
      SEARCH_STACK: 'tab/search',
			SEARCH_SCREEN: 'tab/search/main',
			SEARCH_RESULT_SCREEN: 'tab/search/result',
		},
		calender: {
			CALENDER_SCREERN: 'tab/calender',
		},
		mypage: {
			MYPAGE_STACK: 'tab/mypage',
			MYPAGE_SCREEN: 'tab/mypage/main',
		},
	},
	auth: {
		LOGIN_SCREEN: 'auth/login',
		SIGN_UP_SCREEN: 'auth/signup',
		FIND_PASSWORD_SCREEN: 'auth/find-password'
	},
};
