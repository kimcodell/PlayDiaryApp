import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/HomeScreen';

import { routes } from '../routes';
import AppColors from '../../utils/AppColors';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={routes.tab.home.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: AppColors.white,
          paddingHorizontal: 20,
        },
      }}>
      <Stack.Screen name={routes.tab.home.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
