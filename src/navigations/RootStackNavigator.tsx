import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'twrnc';
import { routes } from './routes';
import AppBottomTabNavigator from './AppBottomTabNavigator';
import PlayDetailScreen from '../screens/root/PlayDetailScreen';
import ChangeProfileScreen from '../screens/root/setting/ChangeProfileScreen';
import ChangePasswordScreen from '../screens/root/setting/ChangePasswordScreen';
import FollowListScreen from '../screens/mypage/FollowListScreen';
import FollowerFollowingIndex from '../enums/FollowerFollowingIndex';
import StatisticsScreen from '../screens/mypage/StatisticsScreen';
import ArchiveScreen from '../screens/mypage/ArchiveScreen';
import CommonHeader from '../components/common/CommonHeader';
import AppConstants from '../utils/AppConstants';

export const headerComponentCreator = (title: string) => () =>
  <CommonHeader headerTitle={title} />;

const Stack = createNativeStackNavigator();

function RootStackNavigator() {
  return (
    <SafeAreaView style={tailwind`flex-1`}>
      <Stack.Navigator
        initialRouteName={routes.root.INIT}
        screenOptions={{ title: '' }}>
        <Stack.Screen
          name={routes.root.INIT}
          component={AppBottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={routes.root.PLAY_DETAIL_SCREEN}
          component={PlayDetailScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name={routes.root.OTHER_USER_PROFILE}
          component={OtherUserScreen}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name={routes.root.ARCHIVE_SCREEN}
          component={ArchiveScreen}
          options={{
            headerLeft: headerComponentCreator(
              AppConstants.HEADER_TITLE.ARCHIVE,
            ),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name={routes.root.STATISTICS_SCREEN}
          component={StatisticsScreen}
          options={{
            headerLeft: headerComponentCreator(
              AppConstants.HEADER_TITLE.STATISTICS,
            ),
          }}
        />
        <Stack.Screen
          name={routes.root.FOLLOW_LIST_SCREEN}
          component={FollowListScreen}
          initialParams={{ startIndex: FollowerFollowingIndex['팔로워'] }}
          options={{
            headerLeft: headerComponentCreator(
              AppConstants.HEADER_TITLE.FOLLOW,
            ),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name={routes.root.CHANGE_PROFILE_SCREEN}
          component={ChangeProfileScreen}
          options={{
            headerLeft: headerComponentCreator(
              AppConstants.HEADER_TITLE.CHANGE_PROFILE,
            ),
          }}
        />
        <Stack.Screen
          name={routes.root.CHANGE_PASSWORD_SCREEN}
          component={ChangePasswordScreen}
          options={{
            headerLeft: headerComponentCreator(
              AppConstants.HEADER_TITLE.CHANGE_PASSWORD,
            ),
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default RootStackNavigator;
