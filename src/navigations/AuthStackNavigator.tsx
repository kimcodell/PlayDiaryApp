import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import FindPasswordScreen from '../screens/auth/FindPasswordScreen';

import { routes } from './routes';

const Stack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={routes.auth.LOGIN_SCREEN}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.auth.LOGIN_SCREEN} component={LoginScreen} />

      <Stack.Screen
        name={routes.auth.SIGN_UP_SCREEN}
        component={SignupScreen}
      />

      <Stack.Screen
        name={routes.auth.FIND_PASSWORD_SCREEN}
        component={FindPasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
