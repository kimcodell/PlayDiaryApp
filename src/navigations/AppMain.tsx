import React from 'react';
import RootBottomTabNavigator from './RootBottomTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import { AppDispatch } from '../store';
import { useSelector } from 'react-redux';

function AppMain() {
  // return jwt ? (
  //   <RootBottomTabNavigation />
  // ) : (
  //   <AuthStackNavigator />
  // )
  return <RootBottomTabNavigator />;
  // return <AuthStackNavigator />;
}

export default AppMain;
