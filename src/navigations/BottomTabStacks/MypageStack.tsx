import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MypageScreen from '../../screens/mypage/MypageScreen';
import StatisticsScreen from '../../screens/mypage/StatisticsScreen';
import FollowListScreen from '../../screens/mypage/FollowListScreen';
import SettingScreen from '../../screens/root/setting/SettingScreen';

import { routes } from '../routes';
import AppColors from '../../utils/AppColors';
import CommonHeader from '../../components/common/CommonHeader';

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
          headerLeft: () => <CommonHeader headerTitle="관람분석" />,
        }}
      />
      <Stack.Screen
        name={routes.tab.mypage.FOLLOW_LIST_SCREEN}
        component={FollowListScreen}
        options={{
          headerLeft: () => <CommonHeader headerTitle="팔로우" />,
        }}
      />
      <Stack.Screen
        name={routes.tab.mypage.SETTING_SCREEN}
        component={SettingScreen}
        options={{
          headerLeft: () => <CommonHeader headerTitle="설정" />,
        }}
      />
    </Stack.Navigator>
  );
}

export default MypageStack;
