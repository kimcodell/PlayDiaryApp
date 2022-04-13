import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarScreen from '../../screens/calendar/CalendarScreen';

import { routes } from '../routes';
import AppColors from '../../utils/AppColors';

const Stack = createNativeStackNavigator();

function CalendarStack() {
  return (
    <Stack.Navigator
      initialRouteName={routes.tab.calendar.CALENDAR_SCREERN}
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: AppColors.white },
      }}>
      <Stack.Screen
        name={routes.tab.calendar.CALENDAR_SCREERN}
        component={CalendarScreen}
      />
    </Stack.Navigator>
  );
}

export default CalendarStack;
