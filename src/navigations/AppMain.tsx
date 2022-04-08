import React from 'react';
import { AppDispatch } from '../store';
import { useSelector } from 'react-redux';
import RootStackNavigator from './RootStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';

function AppMain() {
  // return jwt ? (
  //   <RootStackNavigator />
  // ) : (
  //   <AuthStackNavigator />
  // )
  return <RootStackNavigator />;
  // return <AuthStackNavigator />;
}

export default AppMain;
