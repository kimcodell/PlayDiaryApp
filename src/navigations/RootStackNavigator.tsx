import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBottomTabNavigator from './AppBottomTabNavigator';
import PlayDetailScreen from '../screens/root/PlayDetailScreen';
import SettingScreen from '../screens/root/setting/SettingScreen';
import ChangeProfileScreen from '../screens/root/setting/ChangeProfileScreen';
import ChangePasswordScreen from '../screens/root/setting/ChangePasswordScreen';

import tailwind from 'twrnc';
import { routes } from './routes';

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
          name={routes.root.SETTING_SCREEN}
          component={SettingScreen}
        />
        <Stack.Screen
          name={routes.root.CHANGE_PROFILE_SCREEN}
          component={ChangeProfileScreen}
        />
        <Stack.Screen
          name={routes.root.CHANGE_PASSWORD_SCREEN}
          component={ChangePasswordScreen}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default RootStackNavigator;
