import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './routes';

const Stack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.auth.LOGIN_SCREEN} component={} />

      <Stack.Screen name={routes.auth.SIGN_UP_SCREEN} component={} />

      <Stack.Screen name={routes.auth.FIND_PASSWORD_SCREEN} component={} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
