import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './BottomTabStacks/HomeStack';
import SearchStack from './BottomTabStacks/SearchStack';
import CalendarStack from './BottomTabStacks/CalendarStack';
import MypageStack from './BottomTabStacks/MypageStack';
import HomeIcon from '../assets/icons/HomeIcon';
import SearchIcon from '../assets/icons/SearchIcon';
import UserIcon from '../assets/icons/UserIcon';
import { routes } from './routes';

import AppColors from '../utils/AppColors';
import AppConstants from '../utils/AppConstants';

const BottomTab = createBottomTabNavigator();

function AppBottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={routes.tab.home.HOME_SCREEN}
      sceneContainerStyle={{ backgroundColor: AppColors.white }}
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarInactiveTintColor: AppColors.textSecondary,
        tabBarActiveTintColor: AppColors.textPrimary,
        tabBarLabelStyle: {
          ...Platform.select({
            ios: {
              fontSize: 12,
              marginBottom: -10,
            },
            android: {
              fontSize: 10,
              marginBottom: 10,
            },
          }),
        },
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: AppColors.grayLine,
          backgroundColor: AppColors.white,
          height: Platform.OS === 'android' ? 64 : 78,
        },
        lazy: false,
      }}>
      <BottomTab.Screen
        name={routes.tab.home.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarLabel: AppConstants.BOTTOM_TAB_LABEL.HOME,
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={24}
              height={24}
              color={focused ? AppColors.mainColor : AppColors.gray}
            />
          ),
          tabBarAccessibilityLabel: AppConstants.BOTTOM_TAB_LABEL.HOME,
        }}
      />
      <BottomTab.Screen
        name={routes.tab.search.SEARCH_STACK}
        component={SearchStack}
        options={{
          tabBarLabel: AppConstants.BOTTOM_TAB_LABEL.SEARCH,
          tabBarIcon: ({ focused }) => (
            <SearchIcon
              width={24}
              height={24}
              color={focused ? AppColors.mainColor : AppColors.gray}
            />
          ),
          tabBarAccessibilityLabel: AppConstants.BOTTOM_TAB_LABEL.SEARCH,
        }}
      />
      <BottomTab.Screen
        name={routes.tab.calendar.CALENDAR_STACK}
        component={CalendarStack}
        options={{
          tabBarLabel: AppConstants.BOTTOM_TAB_LABEL.CALENDAR,
          // tabBarIcon: ({ focused }) => (
          //   <CalendarIcon
          //     width={24}
          //     height={24}
          //     color={focused ? AppColors.mainColor : AppColors.gray}
          //   />
          // ),
          tabBarAccessibilityLabel: AppConstants.BOTTOM_TAB_LABEL.CALENDAR,
        }}
      />
      <BottomTab.Screen
        name={routes.tab.mypage.MYPAGE_STACK}
        component={MypageStack}
        options={{
          tabBarLabel: AppConstants.BOTTOM_TAB_LABEL.MYPAGE,
          tabBarIcon: ({ focused }) => (
            <UserIcon
              width={24}
              height={24}
              color={focused ? AppColors.mainColor : AppColors.gray}
            />
          ),
          tabBarAccessibilityLabel: AppConstants.BOTTOM_TAB_LABEL.MYPAGE,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default AppBottomTabNavigator;
