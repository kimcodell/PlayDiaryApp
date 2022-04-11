import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBottomTabNavigator from './AppBottomTabNavigator';
import PlayDetailScreen from '../screens/root/PlayDetailScreen';
import ChangeProfileScreen from '../screens/root/setting/ChangeProfileScreen';
import ChangePasswordScreen from '../screens/root/setting/ChangePasswordScreen';

import tailwind from 'twrnc';
import { routes } from './routes';
import CommonHeader from '../components/common/CommonHeader';

const Stack = createNativeStackNavigator();

function RootStackNavigator() {
  return (
    <SafeAreaView style={tailwind`flex-1`}>
      <Stack.Navigator initialRouteName={routes.root.INIT}>
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
        <Stack.Screen
          name={routes.root.CHANGE_PROFILE_SCREEN}
          component={ChangeProfileScreen}
          options={{
            headerLeft: () => <CommonHeader headerTitle="프로필 수정" />,
          }}
        />
        <Stack.Screen
          name={routes.root.CHANGE_PASSWORD_SCREEN}
          component={ChangePasswordScreen}
          options={{
            headerLeft: () => <CommonHeader headerTitle="비밀번호 변경" />,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default RootStackNavigator;
