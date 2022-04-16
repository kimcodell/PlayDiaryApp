import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MypageScreen from '../../screens/mypage/MypageScreen';
import StatisticsScreen from '../../screens/mypage/StatisticsScreen';
import FollowListScreen from '../../screens/mypage/FollowListScreen';
import ArchiveScreen from '../../screens/mypage/ArchiveScreen';
import SettingScreen from '../../screens/root/setting/SettingScreen';
import FollowerFollowingIndex from '../../enums/FollowerFollowingIndex';
import { headerComponentCreator } from '../RootStackNavigator';
import { routes } from '../routes';

import AppColors from '../../utils/AppColors';
import AppConstants from '../../utils/AppConstants';

const Stack = createNativeStackNavigator();

function MypageStack() {
  return (
    <Stack.Navigator
      initialRouteName={routes.tab.mypage.MYPAGE_SCREEN}
      screenOptions={{
        contentStyle: { backgroundColor: AppColors.white },
        title: '',
      }}>
      <Stack.Screen
        name={routes.tab.mypage.MYPAGE_SCREEN}
        component={MypageScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.tab.mypage.STATISTICS_SCREEN}
        component={StatisticsScreen}
        options={{
          headerLeft: headerComponentCreator(
            AppConstants.HEADER_TITLE.STATISTICS,
          ),
        }}
      />
      <Stack.Screen
        name={routes.tab.mypage.FOLLOW_LIST_SCREEN}
        component={FollowListScreen}
        initialParams={{ startIndex: FollowerFollowingIndex['팔로워'] }}
        options={{
          headerLeft: headerComponentCreator(AppConstants.HEADER_TITLE.FOLLOW),
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name={routes.tab.mypage.SETTING_SCREEN}
        component={SettingScreen}
        options={{
          headerLeft: headerComponentCreator(AppConstants.HEADER_TITLE.SETTING),
        }}
      />
      <Stack.Screen
        name={routes.tab.mypage.ARCHIVE_SCREEN}
        component={ArchiveScreen}
        options={{
          headerLeft: headerComponentCreator(AppConstants.HEADER_TITLE.ARCHIVE),
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MypageStack;
