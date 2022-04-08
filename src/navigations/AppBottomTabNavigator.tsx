import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './BottomTabStacks/HomeStack';
import SearchStack from './BottomTabStacks/SearchStack';
import CalenderStack from './BottomTabStacks/CalenderStack';
import MypageStack from './BottomTabStacks/MypageStack';

import { routes } from './routes';
import AppColors from '../utils/AppColors';

const BottomTab = createBottomTabNavigator();

function AppBottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={routes.tab.home.HOME_SCREEN}
      sceneContainerStyle={{ backgroundColor: AppColors.white }}
      screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name={routes.tab.home.HOME_STACK}
        component={HomeStack}
      />
      <BottomTab.Screen
        name={routes.tab.search.SEARCH_STACK}
        component={SearchStack}
      />
      <BottomTab.Screen
        name={routes.tab.calender.CALENDER_STACK}
        component={CalenderStack}
      />
      <BottomTab.Screen
        name={routes.tab.mypage.MYPAGE_STACK}
        component={MypageStack}
      />
    </BottomTab.Navigator>
  );
}

export default AppBottomTabNavigator;
