import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MypageScreen from '../../screens/mypage/MypageScreen';
import StatisticsScreen from '../../screens/mypage/StatisticsScreen';

import { routes } from '../routes';
import AppColors from '../../utils/AppColors';

const Stack = createNativeStackNavigator();

function MypageStack() {
  return (
    <Stack.Navigator
      initialRouteName={routes.tab.mypage.MYPAGE_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: AppColors.white },
      }}>
      <Stack.Screen
        name={routes.tab.mypage.MYPAGE_SCREEN}
        component={MypageScreen}
      />
      <Stack.Screen
        name={routes.tab.mypage.STATISTICS_SCREEN}
        component={StatisticsScreen}
      />
    </Stack.Navigator>
  );
}

export default MypageStack;
