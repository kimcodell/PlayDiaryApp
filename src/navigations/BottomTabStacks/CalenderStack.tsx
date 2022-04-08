import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalenderScreen from '../../screens/calender/CalenderScreen';

import { routes } from '../routes';
import AppColors from '../../utils/AppColors';

const Stack = createNativeStackNavigator();

function CalenderStack() {
  return (
    <Stack.Navigator
      initialRouteName={routes.tab.calender.CALENDER_SCREERN}
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: AppColors.white },
      }}>
      <Stack.Screen
        name={routes.tab.calender.CALENDER_SCREERN}
        component={CalenderScreen}
      />
    </Stack.Navigator>
  );
}

export default CalenderStack;
